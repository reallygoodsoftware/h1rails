---
icon: circle-small
---

# Wiring Up Stripe

Payments is one of the places where we violate our own advice to use rest APIs directly instead of using Gems. In the case of payments, there is quite a lot to do in order to support the basics, so rolling our own solution here would be hard to keep updated and maintain consistency with over time. For example:

* Maintaining our own database records for customers, charges, subscriptions.
* Keeping everything in sync in our system when activity happens on the Stripe Platform&#x20;

It just so happens that there's a [very good gem](https://github.com/pay-rails/pay) for that.

## Pay Gem Setup

<details>

<summary>Add the Gem(s)</summary>

```ruby
# Gemfile
gem "pay", "~> 11.1"

# To use Stripe, also include:
gem "stripe", "~> 15.3"
```

</details>

<details>

<summary>Create and run the migrations</summary>

```
rails pay:install:migrations
```

{% hint style="info" %}
If your user model happens to have an `id` column that's not the same type as your other id columns (usually integer), you should open up the migration file before running `rails db:migrate` and update the column type to the correct field type around line 6. This can happen if you're using uuid for user ids for example.
{% endhint %}

```
rails db:migrate
```

</details>

<details>

<summary>Add an initializer</summary>

```ruby
# config/initializers/pay.rb
Pay.setup do |config|
  # For use in the receipt/refund/renewal mailers
  config.business_name = "My Biz"
  config.business_address = ""
  config.application_name = "My App"
  config.support_email = "Scout <support@use-scout.com>"

  config.default_product_name = "default"
  config.default_plan_name = "default"

  config.automount_routes = true
  config.routes_path = "/pay" # Only when automount_routes is true
  # All processors are enabled by default. If a processor is already implemented in your application, you can omit it from this list and the processor will not be set up through the Pay gem.
  config.enabled_processors = [:stripe, :braintree, :paddle_billing, :paddle_classic, :lemon_squeezy]

  # To disable all emails, set the following configuration option to false:
  config.send_emails = true

  # By default emails are sent via Pay::UserMailer which inherits from Pay::ApplicationMailer. Instead, you may wish to inherit from ApplicationMailer, or use a different mailer entirely.
  config.parent_mailer = "ApplicationMailer"
  config.mailer = "MyCustomPayMailer"

  # All emails can be configured independently as to whether to be sent or not. The values can be set to true, false or a custom lambda to set up more involved logic. The Pay defaults are show below and can be modified as needed.
  config.emails.payment_action_required = true
  config.emails.payment_failed = true
  config.emails.receipt = true
  config.emails.refund = true
  # This example for subscription_renewing only applies to Stripe, therefore we supply the second argument of price
  config.emails.subscription_renewing = ->(pay_subscription, price) {
    (price&.type == "recurring") && (price.recurring&.interval == "year")
  }
  config.emails.subscription_trial_will_end = true
  config.emails.subscription_trial_ended = true

end
```

</details>

<details>

<summary>Update the user model</summary>

```ruby
# Tell the user model to use the pay gem
pay_customer default_payment_processor: :stripe, stripe_attributes: :stripe_attributes

# Set up the data to be sent to Stripe
def stripe_attributes(pay_customer)
  {
    metadata: {
      pay_customer_id: pay_customer.id,
      user_id: id 
    }
  }
end
```

</details>

<details>

<summary>Set Up Webhooks On Stripe</summary>

We need Stripe to notify our app when things change over there. To do this

* Open the stripe dashboard at [https://dashboard.stripe.com/](https://dashboard.stripe.com/)&#x20;
* Go to webhooks -> create
* Select all of the relevant events - see below
* Set the url to `https://ourapp.com/pay/webhooks/stripe`



### Events

**Account**

* account.updated

**Charge**

* charge.dispute.created

- charge.succeeded
- charge.updated

**Checkout**

* checkout.session.async\_payment\_succeeded
* checkout.session.completed

**Customer**

* customer.deleted
* customer.updated
* customer.subscription.created
* customer.subscription.deleted
* customer.subscription.trial\_will\_end
* customer.subscription.updated

**Invoice**

* invoice.payment\_action\_required
* invoice.payment\_failed
* invoice.upcoming

**Payment Intent**

* payment\_intent.succeeded

**Payment Method**

* payment\_method.attached
* payment\_method.detached
* payment\_method.updated

**Subscription Schedule**

* subscription\_schedule.created

***

**A note on event types**

The list of all webhooks the pay gem supports are [here](https://github.com/pay-rails/pay/tree/main/lib/pay/stripe/webhooks). Most of the file names correspond directly to event names in stripe, except for

* `payment_action_required` -> `invoice.payment_action_required`&#x20;
* `payment_failed` -> `invoice.payment_failed`
* `subscription_created` -> `customer_subscription_created`
* `subscription_renewing` -> `invoice.upcoming` &#x20;

</details>

<details>

<summary>Add sections to Active Admin</summary>

Add one file per Pay Database Model.&#x20;

```ruby
# app/admin/pay_customers.rb
ActiveAdmin.register Pay::Customer do
  menu parent: "Pay"
end
```

```ruby
# app/admin/pay_merchants.rb
ActiveAdmin.register Pay::Merchant do
  menu parent: "Pay"
end
```

<pre class="language-ruby"><code class="lang-ruby"><strong># app/admin/pay_payment_methods.rb
</strong>ActiveAdmin.register Pay::PaymentMethod do
  menu parent: "Pay"
end
</code></pre>

```ruby
# app/admin/pay_subscriptions.rb
ActiveAdmin.register Pay::Subscription do
  menu parent: "Pay"
end
```

```ruby
# app/admin/pay_webhooks.rb
ActiveAdmin.register Pay::Webhook do
  menu parent: "Pay"
end
```

```ruby
# app/admin/pay_charges.rb
ActiveAdmin.register Pay::Charge do
  menu parent: "Pay"
end
```

</details>



## Further Setup

The previous steps ensure that our app data gets updated when user actions happen on Stripe. The following steps add the necessary screens and routes into our app.

* Allow user to see what plan they're subscribed to and when (if) it expires.
* Allow user to click a "Subscribe" button if they don't already have a plan (the actual credit card entry happens on Stripe).
* Allow user to click a "Manage Subscription" button which takes them to a customer portal where they can manage or cancel their subscription.

<details>

<summary>Add Routes</summary>

```ruby
# config/routes.rb
get "/account/plan" => "account#plan", as: :account_plan
get "/account/subscribe" => "account#subscribe", as: :account_subscribe
get "/account/manage" => "account#manage_subscription", as: :account_manage_subscription
get "/account/checkout/final" => "account#checkout_final", as: :account_checkout_final
```

</details>

<details>

<summary>Model Methods</summary>

Include concern in user model

```ruby
# app/models/user.rb
include StripeStuff
```

Create The Concern

```ruby
module StripeStuff
  extend ActiveSupport::Concern

  included do
    # Stripe Payment Stuff (Uses the "pay" gem)
    pay_customer default_payment_processor: :stripe, stripe_attributes: :stripe_attributes

    def self.sync_all_users_to_stripe
      User.all.each do |user|
        user.initialize_stripe_customer
      end
    end

    def initialize_stripe_customer
      record = self.payment_processor.api_record
    end

    def stripe_customer_record
      self.pay_customers.find_by(default:true)
    end

    def stripe_subscriptions
      self.stripe_customer_record.subscriptions
    end

    def active_subscription
      self.stripe_subscriptions.find_by(status: "active")
    end

    def stripe_attributes(pay_customer)
      {
        name: self.display_name,
        metadata: {
          pay_customer_id: pay_customer.id,
          user_id: id 
        }
      }
    end

    def generate_stripe_checkout_session(price_id)
      session = Stripe::Checkout::Session.create(
        customer: self.payment_processor.processor_id,
        mode: 'subscription',
        line_items: [{
          price: price_id,
          quantity: 1,
        }],
        success_url: Rails.application.routes.url_helpers.account_checkout_final_url,
        cancel_url: Rails.application.routes.url_helpers.account_checkout_final_url(fail: true),
        metadata: {
          user_id: self.id
        }
      )
      return session
    end

    def generate_stripe_customer_portal_session
      session = Stripe::BillingPortal::Session.create(
        customer: self.payment_processor.processor_id,
        return_url: Rails.application.routes.url_helpers.account_plan_url
      )
      return session
    end
    
  end
end
```

</details>

<details>

<summary>Controller</summary>

```ruby
class AccountController < ApplicationController
  before_action :authenticate_user!

  def plan
  end

  def subscribe
    redirect_to request.referer unless params[:price_id].present?
    @session = current_user.generate_stripe_checkout_session(params[:price_id])
    redirect_to @session.url, allow_other_host: true
  end

  def manage_subscription
    @session = current_user.generate_stripe_customer_portal_session
    redirect_to @session.url, allow_other_host: true
  end

end
```

</details>

<details>

<summary>Stripe Utils</summary>

This is a tiny helper that we can use to enrich the raw data stored in the database which can be used in views, controllers, or emails

```ruby
# app/utils/stripe_utils.rb

module StripeUtils

  def self.map_price_id_to_plan_name(price_id)
    case price_id
    when "price_1RmUJ0EOLzzaqKQSvtMI70P6"
      "Pro"
    end
  end

  def self.price_description_from_plan_object(plan_object)
    currency_symbol = case plan_object["plan"]["currency"]
    when "usd"
      "$"
    when "eur"
      "€"
    when "gbp"
      "£"
    end 

    amount = plan_object["plan"]["amount"] / 100

    "#{currency_symbol}#{amount}/#{plan_object["plan"]["interval"]}"
  end
end
```

</details>

<details>

<summary>Views</summary>

```erb
<div class="container" >
  <div class="flex items-center justify-between my-8">
    <h1 class="ui-title --xl">
      My Plan
    </h1>
  </div>

  <!-- if user has a subscription, show info and Manage Button -->
  <% if current_user.active_subscription %>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="ui-box">
          <div class="flex justify-between items-center">
            <div class="ui-titlepair --xl">
              <h3 class="--title">
                <%= StripeUtils.map_price_id_to_plan_name(current_user.active_subscription.object["plan"]["id"]) %>
              </h3>
              <p class="ui-text --sm">
                <%= StripeUtils.price_description_from_plan_object(current_user.active_subscription.object) %>
              </p>
            </div>
            <div class="flex items-center gap-2">
              <% if current_user.active_subscription.ends_at.present? %>
                <p class="ui-text --sm">
                  Expires <%= current_user.active_subscription.ends_at.strftime("%B %d, %Y") %>
                </p>
              <% end %>
              <a class="ui-button --solid --motion-forward" 
                  href="<%= account_manage_subscription_path %>"
                  hx-boost="false"
                  >
                Manage
                <%= inline_svg("icons/heroicons/arrow-right.svg", class: "w-4 h-4") %>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  <% else %>
    <!-- Otherwise, show the subscribe button -->
    <a class="ui-button --solid" 
        href="<%= account_subscribe_path(price_id: 'price_1RmUJ0EOLzzaqKQSvtMI70P6') %>"
        hx-boost="false"
        >
      Subscribe
    </a>
  <% end %>
</div>
```

</details>











