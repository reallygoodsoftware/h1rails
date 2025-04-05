# H1 Rails

H1 Rails (HTML First Rails) is a boilerplate for building slick, polished web apps.

- **Low Floor, High Ceiling**:  Extremely easy for beginners to get started with minimal setup and simple patterns based on the languages you already know (html, css, js).
- **Batteries Included**: For the most common UI & UX patterns & challenges (modals, tabs, toasts, tooltips etc.).
 
**Who It's For**
- **Existing Rails Developers** who want *even more* simplicity, and/or more batteries included (solutions to common UI & UX challenges).
- **Developers new to Rails** as the most approachable way to explore Ruby & Rails ideas without getting bogged down in some of the areas with a high learning curve (Importmaps, Hotwire, Stimulus).
 

**Enhancements & Simplifications**
- Out-of-the-box support for common UI patterns like modals, toasts, tooltips, forms and other UI patterns, powered primarily by [Base Styles](https://github.com/reallygoodsoftware/base-styles). 
- **No Build**: By default, we store CSS and javascript libraries in the `/public` folder. This removes an entire category of debugging & deployment complexity. 
- **HTMX instead of Hotwire/Turbo**: We also have several best practices docs for how to achieve common UX patterns using HTMX (multi step forms, type to search, etc.)


## Documentation & Demos

- Documentation is available at [h1rails.com](https://h1rails.com).
- Demos are available at `/demos` in the app.

---

## Usage 

> The preferred way to create a new H1 Rails app is to use the generator. Cloning this repo directly will *work*, but is not as clean as using `rails new`.

**To create a new H1 Rails app**
```
rails new APPNAME  -m https://raw.githubusercontent.com/reallygoodsoftware/h1rails/refs/heads/master/generator.rb
```

## Todo

- Settle on a solution for Modals & toasts and remove the alternatives.