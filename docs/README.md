---
icon: flag-checkered
---

# Start Here

{% hint style="info" %}
The intended audience of this document is 1) LLMs and agents working on H1 Rails codebases, 2) The Really Good Software Team, 3) The General Public
{% endhint %}



## Quick Reference

{% columns %}
{% column width="16.666666666666664%" %}
### Stack
{% endcolumn %}

{% column width="83.33333333333334%" %}
* In pursuit of simplicity, we use the following unconventional approaches...
* We **don't** use [stimulus js](https://stimulus.hotwired.dev/), and we don't use [Turbo](https://turbo.hotwired.dev/).&#x20;
* We **don't** use the Rails asset pipeline. We load assets from the `/public` folder.
* We _**do**_ use htmx. It's loaded in the head, and enabled with `hx-boost` on the `<body>`. [Read More](h1-rails/articles/htmx.md).&#x20;
* We use Litewind for CSS. This is a no-build version of Tailwind.&#x20;
{% endcolumn %}
{% endcolumns %}

{% columns %}
{% column width="16.666666666666664%" %}
### Links
{% endcolumn %}

{% column width="83.33333333333334%" %}
* Use `<a href="<%= my_path %>">Click Me</a>`. Avoid using link\_to
* HTMX will be applied by default, so no need to add any hx- attributes by default.
* To remove/reset htmx on an individual link, do `<a hx-boost="false" ...></a>`
* Use the url helpers `current_url_with` , `current_params_with` if needed. [Read more](https://docs.h1rails.com/h1rails/urls)
* To make a link in an h1expo app open in a modal, add ?presentation=modal
* HTMX will not be applied if the request is inside a webview (user agent is h1expo).
* HTMX will not be applied by default if the link is inside active admin.
* For styling, use the `.ui-button` class to make a link a button, or `.ui-link` class for plain underline
* For links styled as buttons, add `hx-indicator='this'` to the `<a>` tag and add a loading spinner inside with `<%= inline_svg_tag("misc/spinner.svg",class:"shown-while-loading") %>`
{% endcolumn %}
{% endcolumns %}

{% columns %}
{% column width="16.666666666666664%" %}
### Forms
{% endcolumn %}

{% column width="83.33333333333334%" %}
* Use the form\_for or form\_with helper to open a form. Always add the `.ui-form` class. For example: `<%= form_for @user, url: demo_user_form_path(@user), html: {class:"ui-form"} do |f| %>`
* For form fields, use the normal field helpers. For example: `<%= f.text_field :first_name %>`
*   Unless otherwise specified, use floating input labels for form elements. For example:

    `<%= f.text_field :first_name %><%= f.label :first_name, class:"--label" %>`
* By default, all forms submit asynchronously (because we have `hx-boost` on the body. To disable this behaviour, add `hx-boost='false'` to the form.
* For nested forms, use `accepts_nested_attributes_for` in the model and `fields_for` in the view. To only display a subset of records, pass them in explicitly. For example: `<%= user_form.fields_for :categories, @editable_categories do |nested_form| %>`
* Unless otherwise specified, include the form errors partial to show errors. For example: `<%= render partial: "shared/form_errors", locals: { record: f.object} %>`
* Unless otherwise specified, add loading spinner icons to form submit buttons, with the `.shown-while-loading` class. For example: `<%= f.button class: "ui-button --solid" do |button| %>Continue<%= inline_svg_tag("misc/spinner.svg", class:"shown-while-loading") %><% end %>`
* Use the same controller action for both get and post actions. For multistep forms, create an action for each step and redirect the user to the next step if saved successfully. For example: `def get_order; if request.post?; redirect_to order_step2_path if @order.update(order_params); end; end`
* For multistep forms apply conditional validations by using an `attr_accessor` called `validation_set`. Set it in the controller just before a save, and add the validations in the model with a proc. For example: `validates_presence_of :first_name, if: proc { |order| order.validation_set == "step1" }`
* For forms with nested records, use a new button to add records, and add hx-preserve to the existing record divs so that they don’t get overwritten.
* For forms that require frontend notification messages, set toasts in the controller. For example: `flash.now[:toasts] = [{ title: 'Post Created', message: 'Your post has been created.' }]`
{% endcolumn %}
{% endcolumns %}

{% columns %}
{% column width="16.666666666666664%" %}
### Links
{% endcolumn %}

{% column width="83.33333333333334%" %}
* **Html First** - An overview of the principles we want to follow when building software. - [Website](https://html-first.com/guidelines)
* **H1 Rails** - Our starter codebase for creating apps: [Github](https://github.com/reallygoodsoftware/h1rails) | [Demo Site](https://demo.h1rails.com/demos)&#x20;
* **Base Styles** - Our lightweight library for applying styles: [Github](https://github.com/reallygoodsoftware/base-styles) | [Demo Site](https://base-styles.com/) | [Raw CSS file](https://cdn.base-styles.com/base-styles.css)
* **Mini Js** - a lightweight javascript library for adding basic interactivity to web pages. [Docs Site](https://mini-js.com/) | [Raw JS file](https://cdn.mini-js.com/1.0.20.js)
{% endcolumn %}
{% endcolumns %}



## Expanded Notes

<details>

<summary>Links &#x26; Forms</summary>

**General**

We use [hx-boost](https://htmx.org/attributes/hx-boost/) on our body, which means that every link and every form is submitted without triggering a page reload. Instead, the content is fetched in the background and inserted into the `#main-content` div. You can see this by opening up your network tab in dev tools and clicking on a link. Our approach is outlined fully in [htmx.md](h1-rails/articles/htmx.md "mention")

This means that, as much as possible, we should build our apps using simple forms and links. For apps with a lot of state, this can mean passing the state through in the URL.

**Pages with filters (state in the url)**

Sometimes we want to build a page that has a lot of options for filtering. In this case we can use simple links that update the url when clicked. A good example of this is the [Hyperfly search results page](https://github.com/reallygoodsoftware/airline). Rails’ default url helpers are a little lacking here, so we’ve added a few more in H1 Rails, documented [here](https://hypergist.io/tony/working-with-urls).

**Multi Step Forms (state in the database)**

A very common pattern is bringing a user through a series of steps. The go-to here is to create an object in the database from _**before**_ the data entry starts - then use simple form submissions and conditional validations. We’ve written a simple tutorial [here](https://docs.base-styles.com/h1rails/form_patterns).

**Forms with nested relationships**

Another common UX is having forms that allow you to add new rows of items. This can get tricky but we’ve created a pattern that works well. There’s a brief explanation of using `accepts_nested_attributes_for` along with `fields_for` in [this tutorial](https://docs.h1rails.com/h1rails/form_patterns#nested-relationships), and you can also look at the demo and code with the following links.

* [Demo](https://demo.h1rails.com/demos/has_many_form)
* [Code](../app/views/h1rails/demos/has_many_form.html.erb)

</details>

<details>

<summary>Form Inputs</summary>

**Text Inputs**

Normal text input elements inside a form with the `ui-form` class - base styles will take care of styling.

```html
<form class="ui-form"> 
  <input type="text">
</form>
```

**Text Inputs with floating labels**

Base Styles lets us have labels that appear as placeholders when a text input is focussed.

```html
<form class="ui-form">
  <div class="ui-floating-input">
    <input type="text" id="floating_example" placeholder=" ">
    <label for="floating_example">First Name</label>
  </div>
</form>
```

**\*Phone Number Inputs**

We’re currently using a mini js component for this but I’m not super happy and would like to improve it. It can be found in the Navan codebase and the AddOne codebase.

**Simple Selects**

When your select only has a few options and doesn’t require searching or selecting multiple options, a normal select element in a form with the `ui-form` class.

```jsx
<form class="ui-form"> 
  <select>
   <option ...></option>
  </select>
</form>
```

**Custom Selects**

If we need to have searchable options, multiple options, or loading data in remotely, we can use the Select.js preact component.

* Read More: [broken-reference](h1-rails/articles/broken-reference/ "mention")

**File Uploads**

Most of the time we default to using [Dropzone](https://www.dropzone.dev/) instead of the native file upload. Read the article [here](https://hypergist.io/tony/file-uploads-with-dropzone) on how to set this up correctly.

```html
<form>
  <div class="dropzone"></div>
</form>
```

**Simple Date Pickers**

For simple date pickers we can use the native browser date picker. Add the onfocus attribute for better UX to trigger it when clicked.

```html
<form class="ui-form">
  <input type="datetime-local" onclick="this.focus()" />
</form>
```

**\*Custom Date Pickers**

I haven’t fully explored the options here, but we’ve used [Flatpickr](https://flatpickr.js.org/) in Miguel’s Navan project which seemed to work well. I would love to build a version of `<better-date-picker>` also which builds on the work Caleb Porzio is doing with his flux Date Picker

</details>

<details>

<summary>Loading States</summary>

We use [HTMX’s built-in loading indicator](https://htmx.org/attributes/hx-indicator/) feature to show loading spinners. To do this, we add a class of `.shown-while-loading` to the loading icon.

**On Forms**

```erb
<%= form_with model: @user, url: user_path(@user.id), html: {class:"ui-form"} do |form| %>
  <%= form.button class: "ui-button --solid" do |button| %>
    Save  
    <%= inline_svg_tag("heroicons/check.svg") %>
    <%= inline_svg_tag("misc/spinner.svg",class:"shown-while-loading") %>
  <% end %>
<% end %>
```

**On Buttons**

Forms work out of the box, but for links you have to tell htmx which element to apply the behaviour to, with `hx-indicator=this`.

```erb
<a href="/link" class="ui-button --solid" hx-indicator="this">
  New Category
  <%= inline_svg_tag("heroicons/plus.svg") %>
  <%= inline_svg_tag("misc/spinner.svg",class:"shown-while-loading") %>
</a>
```

</details>

<details>

<summary>Other Patterns</summary>

**Modals**

Modal styling is powered by Base Styles, and functionality is powered by H1 Rails. Implementing a modal is one line of code in the controller. Documentation [here](h1-rails/modals.md).

**Toasts**

Toast styling is powered by Base Styles, and functionality is powered by H1 Rails. Creating toasts is one line of code in the controller. Documentation [here](https://docs.h1rails.com/h1rails/toasts).

**Simple Tooltips**

We use [Base Styles tooltips](https://1jxpn.hatchboxapp.com/all) for this.

**Rich Tooltips**

Mini js works very well for this, because we are just toggling a class on an element on mouseenter/mouseleave.

```html
TODO: Finish this example
<div :mouseenter="showPopover=true" class="relative">
   <div class="absolute bottom-0" :class="showPopover ? '' : 'hidden'" >
   
   </div>
</div>
```

**\*Sortable Lists**

We don’t currently have a go to for sortable lists.

**Type to search**

The go-to for this is htmx using a form with `hx-trigger="input changed from:#el"`

```html
<form hx-get="/search" 
      hx-trigger="input changed delay:500ms from:#search-input" 
      hx-target="#results">
    
    <input type="text" 
           id="search-input" 
           name="q" 
           placeholder="Search...">
           
    <div id="results">
    </div>
</form>
```

**Dependent Selects**

This is when changing one dropdown updates the options in another one. This is generally done a case by case basis. HTMX has a pattern which they outline [here](https://htmx.org/examples/value-select/). We’ve also done another pattern using Mini Js on the [Hyperfly](https://hyperfly.reallygoodsoftware.net/) home page.

</details>



