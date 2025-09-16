---
icon: circle-small
---

# How We Write Code

{% hint style="info" %}
This is a document originally intended for internal use, which outlines all the patterns we use internally at Really Good Software.
{% endhint %}

### Pre Reading

* **Html First** - An overview of the principles we want to follow when building software.
  * [Website - HTML First](https://html-first.com/guidelines)
* **H1 Rails** - Our starter codebase for creating apps
  * [Github](https://github.com/reallygoodsoftware/h1rails) | [Demo Site](https://demo.h1rails.com/demos) | [Docs Site](https://docs.h1rails.com/h1rails/intro)
* **Base Styles** - Our lightweight library for applying styles
  * [Github](https://github.com/reallygoodsoftware/base-styles) | [Docs Site](https://docs.h1rails.com/basestyles/intro) | [Demo Site](https://1jxpn.hatchboxapp.com/all) | [Raw CSS file](https://cdn.base-styles.com/base-styles.css)
* **Mini Js** - a lightweight javascript library for adding basic interactivity to web pages
  * [Docs Site](https://mini-js.com/) | [Raw JS file](https://cdn.mini-js.com/1.0.20.js)



## Patterns

<details>

<summary>Links &#x26; Forms</summary>

#### General

We use [hx-boost](https://htmx.org/attributes/hx-boost/) on our body, which means that every link and every form is submitted without triggering a page reload. Instead, the content is fetched in the background and inserted into the `#main-content` div. You can see this by opening up your network tab in dev tools and clicking on a link. Our approach is outlined fully in [htmx.md](htmx.md "mention")

This means that, as much as possible, we should build our apps using simple forms and links. For apps with a lot of state, this can mean passing the state through in the URL.

#### Pages with filters (state in the url)

Sometimes we want to build a page that has a lot of options for filtering. In this case we can use simple links that update the url when clicked. A good example of this is the [Hyperfly search results page](https://github.com/reallygoodsoftware/airline). Rails’ default url helpers are a little lacking here, so we’ve added a few more in H1 Rails, documented [here](https://hypergist.io/tony/working-with-urls).

#### Multi Step Forms (state in the database)

A very common pattern is bringing a user through a series of steps. The go-to here is to create an object in the database from _**before**_ the data entry starts - then use simple form submissions and conditional validations. We’ve written a simple tutorial [here](https://docs.base-styles.com/h1rails/form_patterns).

#### Forms with nested relationships

Another common UX is having forms that allow you to add new rows of items. This can get tricky but we’ve created a pattern that works well. There’s a brief explanation of using `accepts_nested_attributes_for` along with `fields_for` in [this tutorial](https://docs.h1rails.com/h1rails/form_patterns#nested-relationships), and you can also look at the demo and code with the following links.

* [Demo](https://demo.h1rails.com/demos/has_many_form)
* [Code](../../../app/views/h1rails/demos/has_many_form.html.erb)

</details>

<details>

<summary>Form Inputs</summary>

#### **Text Inputs**

Normal text input elements inside a form with the `ui-form` class - base styles will take care of styling.

```html
<form class="ui-form"> 
  <input type="text">
</form>
```

#### Text Inputs with floating labels

Base Styles lets us have labels that appear as placeholders when a text input is focussed.

```html
<form class="ui-form">
  <div class="ui-floating-input">
    <input type="text" id="floating_example" placeholder=" ">
    <label for="floating_example">First Name</label>
  </div>
</form>
```

#### \*Phone Number Inputs

We’re currently using a mini js component for this but I’m not super happy and would like to improve it. It can be found in the Navan codebase and the AddOne codebase.

#### Simple Selects

When your select only has a few options and doesn’t require searching or selecting multiple options, a normal select element in a form with the `ui-form` class.

```jsx
<form class="ui-form"> 
  <select>
   <option ...></option>
  </select>
</form>
```

#### Custom Selects

If we need to have searchable options, multiple options, or loading data in remotely, we can use the Select.js preact component.

* Read More: [Broken link](broken-reference "mention")

#### File Uploads

Most of the time we default to using [Dropzone](https://www.dropzone.dev/) instead of the native file upload. Read the article [here](https://hypergist.io/tony/file-uploads-with-dropzone) on how to set this up correctly.

```html
<form>
  <div class="dropzone"></div>
</form>
```

#### Simple Date Pickers

For simple date pickers we can use the native browser date picker. Add the onfocus attribute for better UX to trigger it when clicked.

```html
<form class="ui-form">
  <input type="datetime-local" onclick="this.focus()" />
</form>
```

#### \*Custom Date Pickers

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

#### Modals

Modal styling is powered by Base Styles, and functionality is powered by H1 Rails. Implementing a modal is one line of code in the controller. Documentation [here](../core/modals.md).

#### Toasts

Toast styling is powered by Base Styles, and functionality is powered by H1 Rails. Creating toasts is one line of code in the controller. Documentation [here](https://docs.h1rails.com/h1rails/toasts).

#### Simple Tooltips

We use [Base Styles tooltips](https://1jxpn.hatchboxapp.com/all) for this.

#### Rich Tooltips

Mini js works very well for this, because we are just toggling a class on an element on mouseenter/mouseleave.

```html
TODO: Finish this example
<div :mouseenter="showPopover=true" class="relative">
   <div class="absolute bottom-0" :class="showPopover ? '' : 'hidden'" >
   
   </div>
</div>
```

#### \*Sortable Lists

We don’t currently have a go to for sortable lists.

#### Type to search

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

#### Dependent Selects

This is when changing one dropdown updates the options in another one. This is generally done a case by case basis. HTMX has a pattern which they outline [here](https://htmx.org/examples/value-select/). We’ve also done another pattern using Mini Js on the [Hyperfly](https://hyperfly.reallygoodsoftware.net/) home page.

</details>

## Quick Reference

<table data-header-hidden><thead><tr><th width="128.0546875"></th><th width="800"></th></tr></thead><tbody><tr><td><strong>Links</strong></td><td>• Use <code>&#x3C;a href="&#x3C;%= my_path %>">Click Me&#x3C;/a></code>. Avoid using link_to <br>• HTMX will be applied by default, so no need to add any hx- attributes by default. <br>• To remove/reset htmx on an individual link, do <code>&#x3C;a hx-boost="false" ...>&#x3C;/a></code> <br>• Use the url helpers <code>current_url_with</code> , <code>current_params_with</code> if needed. <a href="https://docs.h1rails.com/h1rails/urls">Read more</a> <br>• To make a link in an h1expo app open in a modal, add ?presentation=modal <br>• HTMX will not be applied if the request is inside a webview (user agent is h1expo). <br>• HTMX will not be applied by default if the link is inside active admin. <br>• For styling, use the <code>.ui-button</code> class to make a link a button, or <code>.ui-link</code> class for plain underline<br>• For links styled as buttons, add <code>hx-indicator='this'</code> to the <code>&#x3C;a></code> tag and add a loading spinner inside with <code>&#x3C;%= inline_svg_tag("misc/spinner.svg",class:"shown-while-loading") %></code></td></tr><tr><td><strong>Forms</strong></td><td><p>• Use the form_for or form_with helper to open a form. Always add the <code>.ui-form</code> class. For example: <code>&#x3C;%= form_for @user, url: demo_user_form_path(@user), html: {class:"ui-form"} do |f| %></code><br>• For form fields, use the normal field helpers. For example: <code>&#x3C;%= f.text_field :first_name %></code><br>• Unless otherwise specified, use floating input labels for form elements. For example:</p><p><code>&#x3C;%= f.text_field :first_name %>&#x3C;%= f.label :first_name, class:"--label" %></code><br>• By default, all forms submit asynchronously (because we have <code>hx-boost</code> on the body. To disable this behaviour, add <code>hx-boost='false'</code> to the form.<br>• For nested forms, use <code>accepts_nested_attributes_for</code> in the model and <code>fields_for</code> in the view. To only display a subset of records, pass them in explicitly. For example: <code>&#x3C;%= user_form.fields_for :categories, @editable_categories do |nested_form| %></code><br>• Unless otherwise specified, include the form errors partial to show errors. For example: <code>&#x3C;%= render partial: "shared/form_errors", locals: { record: f.object} %></code><br>• Unless otherwise specified, add loading spinner icons to form submit buttons, with the <code>.shown-while-loading</code> class. For example: <code>&#x3C;%= f.button class: "ui-button --solid" do |button| %>Continue&#x3C;%= inline_svg_tag("misc/spinner.svg", class:"shown-while-loading") %>&#x3C;% end %></code><br>• Use the same controller action for both get and post actions. For multistep forms, create an action for each step and redirect the user to the next step if saved successfully. For example: <code>def get_order; if request.post?; redirect_to order_step2_path if @order.update(order_params); end; end</code><br>• For multistep forms apply conditional validations by using an <code>attr_accessor</code> called <code>validation_set</code>. Set it in the controller just before a save, and add the validations in the model with a proc. For example: <code>validates_presence_of :first_name, if: proc { |order| order.validation_set == "step1" }</code><br>• For forms with nested records, use a new button to add records, and add hx-preserve to the existing record divs so that they don’t get overwritten.<br>• For forms that require frontend notification messages, set toasts in the controller. For example: <code>flash.now[:toasts] = [{ title: 'Post Created', message: 'Your post has been created.' }]</code></p></td></tr><tr><td><strong>General</strong></td><td>• All buttons should have loading spinners unless otherwise specified. <br></td></tr></tbody></table>
