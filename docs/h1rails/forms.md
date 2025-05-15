---
icon: wpforms
---

# Forms

## Approach

* **Styling** is powered by Base Styles. All we need to do is add a class of `.ui-form` to our form and all our form inputs will be styled for us. We can remove these default styles on a per field basis if we prefer - see instructions below.
* **Loading States** are handled by htmx - all we have to do is to is add a loading spinner which is hidden by default. This pattern is described [**here**](articles/htmx_indicators.md).

## Code Examples

### A Basic Form

```erb
<%= form_with model: @book, url: book_path, html: {class:"ui-form"} do |f| %>
  <%= f.text_field :title, placeholder: "Title" %>
  <%= f.button class: "ui-button --solid" do |button| %>
    Save  
    <%= inline_svg_tag("heroicons/check.svg") %>
  <% end %>
<% end %>
```

<pre class="language-ruby"><code class="lang-ruby"><strong># config/routes/rb
</strong><strong>match "/books/:id" => "books#edit", via: [:get,:patch], as: "book"
</strong></code></pre>

```ruby
def edit
  @book = get_book 
  if request.post?
    if @book.update(book_params)
      redirect_to root_path
    end
  end
end
```

### Loading Spinners

Add an element with the `.shown-while-loading` class - it will be automatically shown when the form is submitted.

```erb
<%= form_with model: @book, url: book_path, html: {class:"ui-form"} do |f| %>
  <%= f.text_field :title, placeholder: "Title" %>
  <%= f.button class: "ui-button --solid" do |button| %>
    Save  
    <%= inline_svg_tag("heroicons/check.svg") %>
    <%= inline_svg_tag("misc/spinner.svg",class:"shown-while-loading") %>
  <% end %>
<% end %>
```

### Floating Field Labels

Wrap an input and label in a div with base styles' `.ui-floating-input` class

```erb
<%= form_with model: @book, url: book_path, html: {class:"ui-form"} do |f| %>
  <div class="ui-floating-input">
    <%= f.text_field :title %>
    <%= f.label :title, class:"--label" %>
  </div>
  <%= f.button class: "ui-button --solid" do |button| %>
    Save  
    <%= inline_svg_tag("heroicons/check.svg") %>
  <% end %>
<% end %>
```

### Show Errors

Use the `shared/form_errors` partial to display the errors for the form.

```erb
<%= form_with model: @book, url: book_path, html: {class:"ui-form"} do |f| %>
  <%= render partial: "shared/form_errors", locals: { record: f.object} %>
  <div class="ui-floating-input">
    <%= f.text_field :title %>
    <%= f.label :title, class:"--label" %>
  </div>
  <%= f.button class: "ui-button --solid" do |button| %>
    Save  
    <%= inline_svg_tag("heroicons/check.svg") %>
    <%= inline_svg_tag("misc/spinner.svg",class:"shown-while-loading") %>
  <% end %>
<% end %>
```

### Forms with Has Many relationships

Sometimes we want to build experiences where users can create or edit a list of options in a single form. Rails form helpers can handle this with `accepts_nested_attributes_for` and `fields_for`.

```ruby
class Order < ApplicationRecord
  accepts_nested_attributes_for :items 
end
```

```erb
<%= form_for @order, url: order_path(@order.shortcode) do |form| %>
  <%= form.fields_for :items do |item_fields| %>
    <%= item_fields.text_field :first_name %> 
  <% end %>
<% end %>
```

* Read the [full article](../patterns/multi-step-and-nested-forms.md) which goes into more detail on nested forms.

### Multi Step Forms

This is covered in detail here:

{% content-ref url="../patterns/multi-step-and-nested-forms.md" %}
[multi-step-and-nested-forms.md](../patterns/multi-step-and-nested-forms.md)
{% endcontent-ref %}



**Why not plain HTML?**

If you've read [HTML First](https://html-first.com/), you'll know it recommends using as few abstraction layers as possible. Rails Form Helpers are one of the few times we recommend using an abstraction instead of just vanilla html `<form>` elements. This is because the utility they provide outweighs the drawbacks of the obfuscation they introduce.

* **Security**: Every form includes and validates a CSRF protection.
* **Validation**: We can show inline errors and top-of-form errors in one line of code.
* **Templating**: We can use the same form template for both edit and update actions.
* **Populating**: We don't need to tell our form about existing record values as it can get these from our model.
* **Nested Forms**: We can easily build has\_many forms without creating a mess of frontend code.

Read More on [Rails Form Helpers](https://guides.rubyonrails.org/form_helpers.html#working-with-basic-forms) on the official Rails Site.
