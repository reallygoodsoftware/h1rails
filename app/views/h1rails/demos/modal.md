
### The Basics


In your controller...

```ruby
before_action :renders_in_modal, only: [:my_action]
```

In your view...

```erb
<%= link_to "About Coffee", my_action_path %>
```

<div>
  <a class="ui-button no-style" href="demos/coffee" :click="previewModal()"> Open Modal</a>
  <a class="ui-button no-style" href="demos/coffee?modal_size=xs" :click="previewModal()">Open Modal (xs)</a>
  <a class="ui-button no-style" href="demos/coffee?modal_size=sm" :click="previewModal()">Open Modal (sm)</a>
  <a class="ui-button no-style" href="demos/coffee?modal_size=lg" :click="previewModal()">Open Modal (lg)</a>
</div>

<div class="mt-4">
  <a class="ui-button no-style" href="demos/multistep" :click="previewModal()">Open Form Flow In Modal</a>
  <a class="ui-button no-style" href="demos/has_many_form" :click="previewModal()">Open Has Many Form Flow In Modal</a>
</div>

### The Nitty Gritty

See the docs for more scenarios and detailed info on how modals work under the hood.
