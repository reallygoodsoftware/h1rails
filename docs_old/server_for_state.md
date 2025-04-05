# Multi Step Form Flows

A common pattern in web apps is taking users through a form flow with multiple steps, conditional validations at each step, and nested relationships.

We've found it's not always intuitive to figure out how exactly to handle this pattern with simple Rails, so this tutorial will go through the approach we recommend.

## Set Up The Parent Table

The parent table is the table that carries the user through whatever multi step process they're completing. Whenever a user starts a new submission, our process is as follows:

- Create a new record in the parent table. 
- Generate a shortcode for that record.
- Pass this shortcode from step to step throughout the process.

For the purposes of this tutorial, let's imagine our parent table is the `Order` model. First we'll add a new column to the table

```bash
rails g migration add_shortcode_to_orders shortcode:string
rails db:migrate
```

Next, we make sure a record always has a shortcode.

```ruby
# /app/models/order.rb
class Order < ApplicationRecord
  before_validation :set_shortcode

  def set_shortcode
    return if self.shortcode.present?
    loop do
      string = SecureRandom.alphanumeric(5).downcase
      self.shortcode = string
      break string unless Order.where(shortcode: string).first
    end
  end
end
```

## Side Note: Conditional Validations

ActiveRecord validations are great, but usually they're applied universally, not conditionally. For this flow, we want to have a way to switch between different "sets" of validations, depending on what step the user is on.


```ruby
# /app/models/order.rb
class Order < ApplicationRecord
  attr_accessor :validation_set
  validates_presence_of :first_name, if: proc { |order| order.validation_set == "step1" }
end
```

Now in our controller, we can do 

```ruby
@order.validation_set = "step1"
@order.save # Only runs the validations that apply
```

## Step One: Creating the record

For the first step of the flow, the user will simply click on a link and get taken to step one of a form.

```ruby
# config/routes.rb
Rails.application.routes.draw do
  get "/orders/new" => "orders#new", :as => "new_order"
end
```

```ruby
class OrdersController < ApplicationController
  def new
    @order = current_user.orders.new
    if @order.save 
      redirect_to order_step_1_path(@order.shortcode)
    end
  end
end
```

Now, we can add a simple link to the app. Any time a user clicks on it, a new order will be created and they'll be redirected to the first step.

```
<a href="<%= new_order_path %>">New Order</a>
```

## Building The Form

Now lets add the route that shows the first step. We're going to use `:match` here for reasons we'll explore in a few minutes.

```
# config/routes.rb
Rails.application.routes.draw do
  match "/orders/:shortcode/step-one" => "orders#step1",  :as => "order_step1", :via => [:get,:post]
end
```

Get the relevant order record when the user hits step one. 

```
class OrdersController < ApplicationController

  def step1
    get_order
  end

  def get_order
    @order = current_user.orders.find_by(shortcode:params[:shortcode])
  end

end
```

Build the form that gets shown when the user visits step one

```erb
<%= form_for @order, order_step1_path, method: "post" do |f| %>
  <div class="space-y-4">
    <div>
      <%= f.label :first_name %>
      <%= f.text_field :first_name %>
    </div>
    <div>
      <%= f.submit %>
    </div>
  </div>
<% end %> 
```

## Form submission and showing validation errors.

The view above will display the form to the user and let them fill it in. But we also want to cover the scenario where the user has submitted the form but some of the validations haven't passed. 

```ruby
Rails.application.routes.draw do
  # Get request simply shows the form. Post request submits it. Both serve the step1.html.erb partial
  match "/orders/:shortcode/step-one" => "orders#step1",  :as => "order_step1", :via => [:get,:post]
end
```

```erb
<%= form_for @order, order_step1_path, method: "post" do |f| %>
  <% @order.errors.each do |error| >
    <%= error %>
  <% end >
  <div class="space-y-4">
    <div>
      <%= f.label :first_name %>
      <%= f.text_field :first_name %>
    </div>
    <div>
      <%= f.submit %>
    </div>
  </div>
<% end %> 
```

Update the controller action. If a user submits the form (post request), validate and save the changes, then redirect to step2.

```
class OrdersController < ApplicationController

  def step1
    get_order
    if request.post?
      @order.validation_set = "step1"
      if @order.update(order_params)
        redirect_to order_step2_path
      end
    end
  end

  def get_order
    @order = current_user.orders.find_by(shortcode:params[:shortcode])
  end

  def order_params
    params.require(:order).permit(:first_name)
  end
end
```

To recap, the above code will handle **three** different scenarios. 

- The user has landed on the first step of the form but not submitted it yet. Just show them the form.
- The user has submitted the form and there are validation errors. Show them the form as well as the validation errors.
- The user has submitted the form and the validation has passed. Redirect them to the next step

The same pattern can be repeated for each step of the form. 

---

## Nested Relationships

Use a normal link to add an item

```erb
<a href="<%= add_item_to_order_path(@order.shortcode) %>">Add Item</a>
```

Add a route for it

```ruby
# config/routes.rb
get "/orders/:shortcode/add_item" => "orders#add_item", :as => "add_item"
```
And a controller action

```ruby
class OrdersController < ApplicationController
  def add_item
    @item = @order.items.new
    if @item.save 
      # Render whatever action the user is currently on
      render :step1
    end
  end
end
```

**Build your form using the `fields_for` form helper**

```ruby
class Order < ApplicationRecord
  accepts_nested_attributes_for :order_items
end
```

```erb
<%= form_for @order, url: update_order_path(@order.shortcode) do |form| %>
  <%= form.fields_for :order_items do |item_form| %>
    <%= item_form.text_field :first_name %> 
  <% end %>
<% end %>
```

Sometimes you might only want to show inputs for a subset of the records.

```ruby
def step1
  @editable_items = @order.order_items.not_draft
end
```

```erb
<%= form_for @order, url: update_order_path(@order.shortcode) do |form| %>
  <%= form.fields_for :order_items, @editable_items do |item_form| %>
    <%= item_form.text_field :first_name %> 
  <% end %>
<% end %>
```