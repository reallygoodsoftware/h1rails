# H1 Rails

H1 Rails is the quickest way to make beautiful web apps with minimal complexity. It uses Ruby on Rails, but centers on HTML, CSS, and Javascript, with the goal of being extremely approachable to developers who are new to Rails.

## What's Inside

**Forms**

- Clean, consistent styling for all form input types. [Read More](https://docs.h1rails.com/h1rails/forms)
- Support for multi-selects tag select, type to search. [Read More](https://docs.h1rails.com/h1rails/selects)
- Code examples for commonly used patterns e.g nested relationships. [Read More](https://docs.h1rails.com/h1rails/form_patterns)

**Icons**

Pre loaded icons from [Heroicons](https://heroicons.com/) and [Tabler Icons](https://tabler.io/icons), powered by [inline_svg](https://github.com/jamesmartin/inline_svg).
```html
<%= inline_svg_tag("heroicons/check.svg") %>
```
[More On Icons](https://docs.h1rails.com/h1rails/icons)

**Modals**
Open any action in a modal with one line.
```ruby
class MyController
  before_action :renders_in_modal, only: [:edit]
end
```

## Documentation & Demos

- Documentation is available at [h1rails.com](https://h1rails.com).
- Demos are available at `/demos` in the app.

---
