
# Hypertext Rails

Hypertext Rails is a Ruby on Rails Boilerplate that follows [HTML First](https://html-first.com/) principles. It is A) A set of patterns that make building new Rails applications very fast with guidelines on how to use these patterns, and B) An alternative to the [Hotwire](https://hotwire.dev/) defaults, which follows the same philosophy (HTML over the wire) but uses different, simpler abstractions.


## How to build Hypertext Rails apps

1. Use htmx's `hx-boost` tag on your `<body>` to make forms and links load asynchronously, and the `hx-indicator` pattern to show loading spinners.
    - Related: [Hypertext Rails: Working With HTMX](https://hypergist.io/tony/working-with-htmx)
    - Related: [Hypertext Rails: HTMX Loading Indicators](https://hypergist.io/tony/malign-down)
2. Use plain old links and forms to manage state (avoid heavy frontend state).
    - Jump To: [Building URLs](#building-urls)
    - Related: [Hypertext Rails: Using the database for state](https://hypergist.io/tony/multi-step-form-flows)
3. Use a js "sprinkles" library for lightweight frontend interactivity
    - We've included Mini but you can use whichever you'd like. 
    - Related: [Learn Mini Js in 5 minutes](https://mini-js.com/)


## What's Included

#### Libraries


- [HTMX](https://htmx.org/) makes html handle links and forms better. (This replaces the Rails default [Turbo](https://turbo.hotwired.dev/)).
- [Mini](https://mini-js.com/) makes html handle interactivity better. (This replaces the Rails default [Stimulus](https://stimulus.hotwired.dev/)).
- [Tailwind Lite](https://tailwind-lite.com/) makes CSS easier to manage.
- [RGS.css](https://hypergist.io/b/tony/rgs) is a small set of css utilities for common use cases.


#### Utilities
- [Icons](#icons)
- [Modals](#modals)
- [Toasts](#toasts)
- [File Uploads](#file-uploads)
- [Form Styling](#form-styling)
- [Article Styling](#article-styling)

# Cheat Sheet

### Icons

This repo comes pre-loaded with both [heroicons](https://heroicons.com/) and [tabler](https://tablericons.com/) icons, which are free to use, look great, and cover most use cases. We use the [inline_svg](https://github.com/jamesmartin/inline_svg) gem to render them.

Icons can be styled with CSS. Use text color to set their color, and width/height attributes (E.g. Tailwind's "w-4 h-4") to style their size.

To render an icon, use the following snippet and swap out the name of the file and the classes as necessary.

```
<%= inline_svg_tag("/heroicons/icon-chevron-right.svg", class: "w-5 text-indigo-500" ) %>
```

- Icons are stored in the `/app/assets/icons` directory. 

### Modals

To trigger a remote modal, create a normal `<a>` tag with `?modal=true` in your view.

```
<a href="<%= general_path(modal:true) >" class="shadow bg-white rounded px-3 py-2 text-gray-900">Open Modal</a>
```

Then add `htmx_support_modal` as the last line on your controller method.

```ruby
class DocsController < ApplicationController

  def show 
    # Do stuff
    htmx_support_modal
  end

end
```

- The modal container is located in the `shared/_partial_containers` file. It uses Mini and makes use of the native html dialog element augmented with a background overlay and animation. 

### Toasts

To send a toast from the backend to the frontend we use Rails` Flash message functionality. 

**Trigger a toast on the currently loaded page from a controller**

```
flash.now[:toasts] = [
  { title: 'Post Created', message: 'Your post has been successfully created.', style: "success" }
]
```

- The html responsible for toasts lives in `/views/shared/_partial_containers.html.erb` and `/views/shared/_toast.html.erb`. Styling comes from rgs.css

### Form Styling

- Form styling comes from lean-soil, which is part of rgs.css.
- By default all `<form>`s will have styling applied. 
- Further Reading: [Lean Soil on Hypergist](https://hypergist.io/tony/lean-soil)


#### Hypermedia Patterns

We found that coming from writing non Hypertext Rails apps, it's not always intuitive to figure out how exactly to handle working with urls (building links) and working with forms.

### Building URLs

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
 
- **Related**: [Hypertext Rails: Working With URLs](https://hypergist.io/tony/building-urls-in-rails?collection=html-first-rails)
- **View Source**: `/helpers/application_helper.rb`.

### Working With Forms

Our recommended pattern is to create a new temporary record at the beginning of a form flow and use conditional validations at each step. We've tested several patterns and landed on this as the simplest to implement and reason about.

- **Related:** [Hypertext Rails: Using the database for state](https://hypergist.io/tony/multi-step-form-flows)


# Keeping Things Organized



### Guidelines for Managing CSS

### Guidelines for Managing Javascript

### Other

- Using Utilities
- Avoid 

# Further Reading 

#### Required
- Hypertext Rails: Working with HTMX
- Hypertext Rails: Working with CSS
- Hypertext Rails: Multi Step Form Flows
- Hypertext Rails: File Uploads
- Hypertext Rails: Making It Slick
- Learn Mini JS in 5 minutes

#### Optional
- HTMX Loading Patterns
- Rails Basics
- HTMX.org


# TODO

- [x] Icons
- [x] Toasts
- [x] Modals
- [x] File Uploads
- [x] CSS Guidelines
- [ ] Tooltips
- [ ] JS Guidelines