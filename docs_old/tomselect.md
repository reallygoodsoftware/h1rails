
# TomSelect


First, add the css and js files to your head.

```
<link rel="stylesheet" href="/vendor/tom-select/2.3.1.css<%= cache_buster %>">
<link rel="stylesheet" href="/vendor/tom-select/custom.css<%= cache_buster %>">
<script src="/vendor/tom-select/complete-2.3.1.js"></script>
```

Add custom javascript and apply to all elements with the `.tomselect` class

```
function initializeTomSelect() {
  document.querySelectorAll('.tomselect').forEach((el)=>{
    let settings = { };
    new TomSelect(el,settings);
  });
}
```

Customize styles in custom.css

```css

.ts-control {
  border-color: var(--form-input-border-color, #e5e7eb);
  border-width: var(--form-input-border-width, 2px);
  border-radius: var(--form-input-border-radius, 0.25rem);
  padding: var(--form-input-padding, 0.75rem);
}
.ts-dropdown,
.ts-control,
.ts-control input {
  color: inherit;
  font-size: inherit;
  height: unset !important;
}
.ts-wrapper.focus .ts-control {
  border-color: var(--form-input-border-color-focus, #191919);
}
.ts-wrapper.focus.dropdown-active .ts-control {
  border-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.ts-dropdown {
  margin: 0;
  box-shadow: unset;
  border-color: var(--form-input-border-color-focus, #191919);
  border-width: var(--form-input-border-width, 2px);
  border-radius: var(--form-input-border-radius, 0.25rem);
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.ts-dropdown .active {
  background-color: #001a4b;
  color: var(--bg-primary-text, #fff);
}
.ts-wrapper.multi .ts-control > div {
  margin-bottom: 0px;
  padding: 4px 6px;
}
```

### Usage

To use it, just add the relevant class to a normal select.

```erb
<select class="tomselect" placeholder="Search..." >
  <% @records.each do |record| %>
    <option value="<%= record.id %>" <%= 'selected' if record.id == @active&.id %> >
      <%= record.name %>
    </option>
  <% end %>
</select>
```


```erb
<% form do |f| %>
  <%= f.select_field :tags, {class:"tomselect"} %>
<% end %>
```