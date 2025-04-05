# Selects

We're still not fully settled on a solution for this. Currently there are 3 options

### TomSelect

- **Pro**: Only requires writing a small amount of code.
- **Pro**: No dependency on jquery like other select libraries.
- **Pro**: Still actively maintained.
- **Con**: Needs minimum 2 additional js/css files 
- **Con**: Isn't super configurable.

[Link: Tom Select](/docs?file=tomselect.md)


### Mini js Select

- **Pro**: Built on Mini.js so doesn't need additional files
- **Pro**: Super configurable, both behaviour and styling.
- **Con**: Not easy to understand out of the box.

---

### HTMX Dependent Selects

Use this when you want to change the value of a second dropdown based on the selection of the first. This is the Rails implementation of the [HTMX Website Example](https://htmx.org/examples/value-select/).

---

First, create the view that renders the form. With the `hx-get` and `hx-target` attributes, you're saying to the form "When this dropdown is changed, send a get request to this url, and put the response into the `#sub_options` div.

```erb
<select name="location_id" hx-get="<%= dropdown_options_path %>" hx-target="#sub_options">
  <option>...</option>
</select>

<div id="sub_options">
  <%= render partial: "incidents/sub_options" %>
</div>
```

Create a new view that is served at the same path you specified as the `hx-get` in the first step. All this page will do is render the second dropdown.

```erb
<!-- app/views/incidents/_sub_options.html.erb -->
<select name="sub_option">
  <% @sub_options.each do |option| >
    <option value="<%= option.id %>">
      <%= option.label %>
    </option>
  <% end %>
</select>
```

In your controller, get the required data for the select, and respond with the same partial you used in the first step. 

```ruby
def render_sub_options
  location_id = params[:location_id]
  @sub_options = Location.where(location_id:location_id).map{|location| [label: location.name, id: location.id] }
  render partial: "incidents/sub_options", layout: false
end
```


### Web Component Select