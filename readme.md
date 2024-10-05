# H1 Rails

H1 Rails is a Rails Boilerplate that follows [HTML First](https://html-first.com/) principles. It uses much of standard Rails but swaps out some of the frontend abstractions and patterns for simpler alternatives. 

- It uses [htmx](https://htmx.org) for partial page updates instead of the Rails default — Turbo. [Why?](https://www.notion.so/H1-Rails-11445b4d9f42805c84fcced5a716043d?pvs=21)
- It uses [Mini js](https://mini-js.com) for frontend sprinkles instead of the Rails default — Stimulus. [Why?](https://www.notion.so/H1-Rails-11445b4d9f42805c84fcced5a716043d?pvs=21)
- It uses [Base Styles](https://base-styles.com) for UI components.

## Goal

The primary goal of H1 Rails, and the reason we put so much emphasis on reducing complexity, is to be the most ***new-contributor-friendly*** boilerplate out there. The idea is: If a developer is familiar with html, css and javascript, they should have to learn very few new concepts in order to work with an H1 Rails app and build really nice, polished features and flows. 

## Batteries Included

- H1 Rails also includes a comprehensive set of UI patterns that cover frontend-only things like icons and tooltips, but also integrated (frontend + backend) patterns like modals and toasts. For example:
    - Show a toast message by setting `flash[:toasts]` in your controller.
    - Load a view inside a modal by simply adding `before_action :renders_in_modal` to your controller.
    - Connect Dropzone on the frontend to ActiveStorage on the backend for beautiful, parallel file uploads.
- We also include some gems that accelerate and simplify the process of building web apps and are needed in almost all applications.
    - [Active Admin](https://activeadmin.info/) lets us build admin panels in just a few lines of code.
    - [Devise](https://github.com/heartcombo/devise) handles user authentication.
    - [Figaro](http://docs.dietrails.localhost/Figaro) lets you store environment variables that can be used throughout the app.

## Documentation & Demos

- Documentation is available at [h1rails.com](https://h1rails.com).
- Demos are available at `/demos` in the app.

---

## FAQs

- **Why might I use H1 Rails instead of standard Rails?**
    - You’re interested in the html-over-the-wire approach for its conceptual simplicity, but want a quicker way to dive in than learning Turbo and Stimulus.
    - You already know Rails, and have heard about the promise of HTMX and the Hypertext approach.
    - You’ve seen some of the examples of what can be build
- **Why use HTMX instead of Turbo?**
    
    Put simply, after building with both Htmx and Turbo, we found that HTMX was 1. A better fit for the most common UI/UX we wanted to build, and 2. Much easier to learn.
    
    - Some of these patterns
        - Show loading spinners on buttons and form submits. Turbo defaults to the top bar and doesn’t add a class to forms or links when submitted.
        - Using response headers to specify what div id to load returned responses into. We use this pattern with modals but it
    
    In addition, when it came to training new team members, we found that people picked up htmx must faster than turbo frames. I suspect that’s because of a few things:
    
    - Conceptually, htmx just extends what you can do with html. You don’t have to create a new element and wrap your html in it, you can directly target existing ids with `#my_div` for example. With turbo frames, you need to learn what a turbo frame is, where and how to wrap your existing dom elements, and how frames work their magic.
- **Why don’t you use Stimulus js for components?**
    
    
- **Can I use Turbo and stimulus with h1 Rails?**
    
    Of course. You can use as many or as few of the recommendations as you prefer.
    
- **What apps that have been built with h1 Rails?**
- Can I use
- **Who is behind H1 Rails?**