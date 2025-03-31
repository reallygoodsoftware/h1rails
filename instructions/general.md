# Cursor Rules for Code Writing

# Routes

Add new get routes like this (swap "events" for the relevant model)

```
get '/events', 
  to: 'events#index', 
  as: 'events'
```

Add new start routes like this (swap "events" for the relevant model)

```
get '/events/start', 
  to: 'events#start', 
  as: 'start_event'
```

Add new combined get/post routes like this (swap "events" for the relevant model)

```
match '/events/:shortcode/edit', 
  to: 'events#edit', 
  as: 'edit_event', 
  via: [:get,:post]
```

# Controllers

A start controller action should look like this

```
def start 
  @event = Event.new
  if @event.save(validate:false)
    redirect_to edit_event_path(@event.shortcode)
  end
end
```

An edit controller action should look like this.

```
def edit
  @event = Event.find_by(shortcode:params[:shortcode])
  if request.post?
    @event.update(event_params)
    if @event.save
      flash.now[:toasts] = [
        { title: "Event Saved", message: "We've saved your event"}
      ]
    end
  end
end
```

If a controller action should respond as a modal, add a before action like so:

```
before_action :renders_in_modal
```

# Views

### The only css classes that should exist in html.erb files should be either A) Tailwind classes, or B) Classes that appear in base-styles.html.erb

### The only paths that should exist in html. erb files should exist in config/routes.rb. Before writing views, check the file at config/routes.rb - only write paths that exist in this file into the view. 

- A view that loads in a modal should have a title and a close modal button. See the first 13 or so lines of `app/views/h1rails/demos/coffee.html.erb` for an example.


## Icons

1. When suggesting icons, only suggest icons that exist in `/app/assets/icons/heroicons` and `/app/assets/icons/misc`.
3. Include loading spinner icons with the class "shown-while-loading" for all buttons.
4. Use icons from the Heroicons set for all buttons.



## Form Controllers
- When generating controllers that serve forms, do the following:
  - Create a controller action at `/start` which creates the initial object.
  - Creat a controller action for edit which responds to both get and post methods.
  - On successful save, redirect to the most relevant path and include `close_modal:true` in the params.
  - On successful save, create a toast notification. See the `demos_controller.rb` file for an example.


## Form Views

- Use `form_for` to create forms. Don't use `form_with`.
- Always add class `ui-form` to the form.
- Basically, use the following structure to start forms.

```
<%= form_for @pet, url: edit_pet_path(@pet), method: "{method}", html: { class: "ui-form" } do |form| %>
```

## CSS Classes from base-styles/0.0.4.css

### UI Components

- `ui-form`: Use for form elements
- `ui-button`: Base button class
- `ui-link`: Use for styled links
- `ui-box`: Container with box styling
- `ui-modal`: For modal dialogs
- `ui-table`: Styled tables
- `ui-toggle`: Toggle switch component
- `ui-tooltip`: For tooltips
- `ui-tabnav`: Tab navigation
- `ui-titlepair`: Title and description pairs
- `ui-styled-text`: For styled text content
- `ui-shimmer`: Loading placeholder animation

### Layout and Spacing

- `ui-container`: Main content wrapper with responsive widths
- `ui-body`: Full-height body styling

### Form Elements

- `ui-floating-input`: Floating label input fields
- `ui-search-input`: Styled search input

### Utility Classes

- `ui-view-transition`: For view transition animations

## Specific Component Guidelines

1. Use `ui-button` class for buttons, with modifiers like `--solid`, `--minimal`, or `--rounded`.
2. Implement tooltips using `ui-tooltip--{position}` classes (e.g., `ui-tooltip--top`, `ui-tooltip--bottom`).
3. For modals, use the `ui-modal` class with `--visible` for showing the modal.
4. Style text content with `ui-styled-text` for consistent typography.
5. Use `ui-shimmer` for loading placeholder animations.

## Icons & Buttons

Use this structure for form submit buttons

```
<%= f.button class: "ui-button --solid" do |button| %>
  Continue  
  <%= inline_svg_tag("heroicons/arrow-right.svg", class: "hidden-while-loading") %>
  <%= inline_svg_tag("misc/spinner.svg", class:"shown-while-loading") %>
<% end %>
```

Use this structure for other links 

```
<%= link_to "Continue", "#", class: "ui-button --solid", :"hx-indicator" => "this" do %>
  Continue  
  <%= inline_svg_tag("heroicons/arrow-right.svg", class: "hidden-while-loading") %>
  <%= inline_svg_tag("misc/spinner.svg", class:"shown-while-loading") %>
<% end %>
```