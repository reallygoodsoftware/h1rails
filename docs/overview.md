
# Overview

- All links and forms will trigger asynchronously by default using [hx-boost](https://htmx.org/attributes/hx-boost/) on the body. (For more info see [How We Use HTMX](?file=htmx.md)).
- If you simply build your app using plain old links and forms, everything should work nicely.
- Some patterns may not be immediately obvious. If you're not sure how to do something check out our Reading section below.


## Cheat Sheet

### Building Hyperlinks

Link to a new page but make sure the current query parameters get passed through.

```html
<a href="<%= projects_path(request.query_parameters) %>">Projects </a>
```

Link to the current page, include all the current query parameters, and add more.

```html
<a href="<%= current_url_with(scope:'draft') %>">Draft</a>
```

Link to a new page, include all the current query parameters, and add more.

```html
<a href="<%= projects_path(current_params_with(scope:'draft')) %>">Draft Projects</a>
```

---

For the source of these methods, see `/helpers/application_helper.rb`. For more info, see [Building URLs in Rails](https://hypergist.io/tony/building-urls-in-rails?collection=html-first-rails)

### Form Styling

### Toasts

### Modals

### Icons


### Multi Step Form Flows

Pleas see the full tutorial here. Snippet shows the key idea - creating a draft database object to carry the user through the flow.

```erb
<a href="<%= start_order_path %>">Start</a>
```

```ruby
# app/controllers/orders_controller.rb
def create
  @order = current_user.orders.new(state:"draft")
  redirect_to order_step_1_path(@order.shortcode) if @order.save 
end
```

### Further Reading
- [Multi Step Form Flows](/docs?file=server_for_state.md)
- [Working With URLs in Rails](https://hypergist.io/tony/building-urls-in-rails?collection=html-first-rails)
- [How We Use HTMX](/docs?file=htmx.md)