
# Hypertext Rails

Hypertext Rails is a Ruby on Rails Boilerplate that follows [HTML First](https://html-first.com/) principles. It is A) A set of patterns that make building new Rails applications very fast with guidelines on how to use these patterns, and B) An alternative to the [Hotwire](https://hotwire.dev/) defaults, which follows the same philosophy (HTML over the wire) but uses different, simpler abstractions.


## How to build Hypertext Rails apps

1. Use htmx's `hx-boost` tag on your `<body>` to make forms and links load asynchronously, and the `hx-indicator` pattern to show loading spinners.
    - Related: HTMX & Hypertext Rails - [link](https://hypergist.io/tony/malign-down)
    - Related: HTMX Loading Patterns
2. Use plain old links and forms to manage state (avoid heavy frontend state)
    - Building Hyperlinks
    - Using the Database for state: [Article: Multi Step Form Flows with Rails](https://tonic-rails.toniclabs.ltd/docs?file=server_for_state.md)
3. Use a js "sprinkles" library for lightweight frontend interactivity
    - We've included Mini but you can use whichever you'd like. 
    - [Learn Mini Js in 5 minutes](https://mini-js.com/)


## What's Included

### Libraries


- [HTMX](https://htmx.org/) makes html handle links and forms better. (This replaces the Rails default [Turbo](https://turbo.hotwired.dev/)).
- [Mini](https://mini-js.com/) makes html handle interactivity better. (This replaces the Rails default [Stimulus](https://stimulus.hotwired.dev/)).
- [Tailwind Lite](https://tailwind-lite.com/) makes CSS easier to manage.
- [RGS.css](https://hypergist.io/b/tony/rgs) a small set of css utilities for common use cases.


### Utilities
- Icons
- Modals
- Toasts
- File Uploads
- Form Styling
- Article Styling

## Cheat Sheet

### Icons


- Icons are stored in the `/app/assets/icons` directory. This repo comes pre-loaded with both [heroicons](https://heroicons.com/) and [tabler](https://tablericons.com/) icons, which are free to use, look great, and cover most use cases.
- Icons can be styled with CSS. Use the color attribute to set their color, and width/height attributes (E.g. Tailwind's "w-4 h-4") to style their size.

To render an icon, use the following snippet and swap out the name of the file and the classes as necessary.

```
<%= inline_svg_tag("/heroicons/icon-chevron-right.svg", class: "w-5 text-indigo-500" ) %>
```

### Modals

- The modal container is located in the `shared/_partial_containers` file. It uses Mini and makes use of the native html dialog element augmented with a nicer background overlay and animation. 

To trigger a remote modal, create a normal `<a>` tag with `?modal=true`, and add `htmx_support_modal` as the last line on your controller method.

```
<a href="<%= general_path(modal:true) >" class="shadow bg-white rounded px-3 py-2 text-gray-900">Open Modal</a>
```

In your controller
```ruby
class DocsController < ApplicationController

  def show 
    # Do stuff
    htmx_support_modal
  end

end
```

<a href="/docs?file=readme.md&modal=true" class="no-style shadow bg-alpha text-white rounded px-3 py-2" >Open Modal</a>

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


# Keeping Things Organized

### Guidelines for Managing CSS

### Guidelines for Managing Javascript

### Other

- Using Utilities
- Avoid 

# Further Reading 

Required
- Hypertext Rails: Working with HTMX
- Hypertext Rails: Working with CSS
- Hypertext Rails: Multi Step Form Flows
- Hypertext Rails: File Uploads
- Hypertext Rails: Making It Slick
- Learn Mini JS in 5 minutes

Optional
- HTMX Loading Patterns
- Rails Basics
- HTMX.org