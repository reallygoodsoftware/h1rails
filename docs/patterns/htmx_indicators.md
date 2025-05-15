---
title: 'HTMX Loading Patterns'
icon: 'dash'
iconStyle: 'regular'
---

HTMX has an in-built way to display loading content the moment a user submits a request. The term they use for this is `hx-indicator`. You can read more about it [here](https://htmx.org/attributes/hx-indicator/).

There are several scenarios where a user can trigger a request: Clicking a Link, Clicking a Button, or Submitting a Form.

## Scenario 1: Clicking A Link

The most common way to handle this is to replace your main content container with something that indicates content is loading.

* Add two divs inside your htmx target div (in this case `#main-content`).

* Wrap your main content in a `.hidden-while-loading` div, and...

* Add your loading content in a `.shown-while-loading` div.

```html
<div id="main-content"> 
  <div class="shown-while-loading">
    <div class="shimmer p-5">
      <div class="rect"></div>
      <div class="rect width-.75"></div>
      <div class="rect width-.5"></div>
      <div class="rect width-.25"></div>
    </div>
  </div>
  <div class="hidden-while-loading">
    <%= yield %>
  </div>
</div>
```

Make sure your htmx request specifies an `hx-indicator`

```html
<body hx-boost="true" hx-target="#main-content" hx-indicator="#main-content">
```

That's it. Provided you've loaded the CSS below and the Shimmer CSS, and added your shimmer content, this should work out of the box.

## Scenario 2: Clicking A Button

In scenarios where the content of the whole page won't change on click, a full replacement of the main div with a shimmer is overkill. In this case a cleaner UX is to simply show the user a loading spinner inside the button they clicked. This is as simple as

* Add `hx-indicator="this"` to the button itself. This will override the `hx-indicator` on any outer elements.

* Add a loading spinner inside the link or button, wrapped in a `.shown-while-loading` span.

* If there's already another icon on the button, it will look bad alongside the loading spinner. So hide it by wrapping it in `.hidden-while-loading`

```html
<a hx-indicator="this" href="/foo" class="flex items-center">
  Send Notification
  <span class="hidden-while-loading">
    <svg class="w-4 h-4"></svg>
  </span>
  <span class="shown-while-loading">
    <svg class="w-4 h-4"></svg>
  </span>
</a>
```

## Scenario 3: Submitting A Form

When a user submits a form the cleanest UX we've found is to...

* Show a loading spinner on the submit button to indicate the form is saving.

* Communicate that the form is in an interim state and should not be modified.

This can be achieved by doing the following:

* Add `hx-indicator="this"` to the form.

* Add the `.faded-while-loading` class to the form.

* Add loading spinner icons inside the submit button.

```html
<form hx-indicator="this" class="faded-while-loading">
  <button type="submit">
    Save 
    <span class="hidden-while-loading">
      <svg class="w-4 h-4"></svg>
    </span>
    <span class="shown-while-loading">
      <svg class="w-4 h-4"></svg>
    </span>
  </button>
</form>
```

## The SVG

```html
<svg viewBox="0 0 50 50" class=" htmx-indicator">
  <path fill="currentColor" d="M43.935,25.146c0-10.355-8.396-18.75-18.75-18.75c-10.355,0-18.75,8.396-18.75,18.75h4.068     c0-8.115,6.567-14.682,14.682-14.682s14.682,6.567,14.682,14.682H43.935z">
    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"></animateTransform>
  </path>
</svg>
```

## The CSS

```css
.htmx-request .shown-while-loading { display: block; }
.htmx-request .hidden-while-loading { display: none; }
.shown-while-loading { display: none; }
.htmx-request.faded-while-loading, .htmx-request .faded-while-loading  { opacity: 0.6 }
```