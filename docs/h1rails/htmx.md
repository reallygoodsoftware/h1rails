---
title: 'Working With HTMX'
icon: 'dash'
iconStyle: 'regular'
---

* HTMX is a lightweight extension that makes links and forms feel more smooth, by sending requests asynchronously.

* The library is very extensive - we only use a small subset of its functionality.

* You can tell htmx to do things either by adding attributes to your html elements, or by sending headers in html responses.

<br />

# How We Use htmx

* There are two ways to incorporate htmx into an app. You can have it off-by-default, in which case you apply behaviours selectively only to the elements you want. Or you can have it on-by-default, in which case every `<a>` and `<form>` element in the app will be sent asynchronously, unless otherwise specified.

* In this application, htmx is **on-by-default**. To do this, we've added `hx-boost="true"` to the body of our page.

* We've also set `hx-target` and `hx-select` to `#main-content`. This means that by default, when a request is sent from a link or a form, htmx will extract only the contents of the `#main-content` div in the response, and put it into the current `#main-content` div.

```html
# /app/views/layouts/application.html.erb
<body hx-boost="true" hx-target="#main-content" hx-select="#main-content">
  <%= render :partial => "shared/partial_containers" %>
  <div id="main-content">
    <%= yield %>
  </div>
</body>
```

You'll notice from the above snippet that anything in the `shared/_partial_containers.html.erb` is **not** replaced by default when a new page is loaded (because it's outside the `#main-content` div). This partial is where we render modals, toasts and side sliding content, so not having it get updated when a new page loads makes the app feel more native. (See below for more info on overriding this).

# General Usage

Outside of toasts and modals, there's very little custom code that's needed. If we just use `<a>` tags and `<form>`s as usual, htmx should do the rest for us. But there are some stylistic changes that may not be intuitive if you're used to handling state on the frontend.

* Use the url for simple state, and use the `current_url_with` helper to keep code clean and less verbose when passing data around.

* When the url is insufficient - for example multi step forms or wizards - use the database for state.

* Try to have one controller action per user action, but feel free to reuse the same view across multiple controller actions.

<br />

# Override & Customization Snippets

#### To override an `<a>` or `<form>` to remove asynchronous loading...

```html
<a hx-boost="false"> This Link won't be touched by htmx</a>
```

#### To remove the htmx defaults that will be inherited from the body (in our case `hx-target` and `hx-select`)

Don't put this directly on an element that needs to have the defaults unset - put it on a parent element.

```html
<div hx-disinherit="*">
  <input hx-get="/my-path" hx-target="#alternate_target" >
</div>

```

#### To disable scroll to top

Sometimes when an htmx-enabled link is clicked after a page has been scrolled, htmx will automatically scroll to the top of the page. You can disable this by adding `hx-swap="innerHTML show:no-scroll"`

```html
<a hx-swap="innerHTML show:no-scroll" >My Link</a>
```

#### Prevent a response from swapping the main page body

This is useful when you only want to replace the content of modals or toasts but not the main body of the page.

```ruby
  def my_action
    response.set_header('HX-Reswap', 'none')
    response.set_header('HX-Push-Url', 'false')
  end
```

#### To Refresh content that's not included in the `#main-content` div

You'll notice that anything in `shared/_partial_containers.html.erb` is not replaced by default when a new page is loaded (because it's outside the #main-content div). This partial is where we render modals, toasts and side sliding content, so not having it get updated when a new page loads makes the app feel more native. To override this, use the `hx-swap-oob` attribute on the div that has the content you want to include. For example, for toasts, we check if the controller has any new toasts, and if it has, we add the attribute, like so...

```html
<div id="toasts" hx-swap-oob="true">
</div>
```