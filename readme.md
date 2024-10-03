# H1 Rails

H1 Rails is a Rails Boilerplate that follows [HTML First](https://html-first.com/) principles. It uses much of standard Rails but swaps out some of the frontend abstractions and patterns for simpler alternatives. 

- It uses [htmx](https://htmx.org) for partial page updates instead of the Rails default — Turbo. [Why?](https://www.notion.so/H1-Rails-11445b4d9f42805c84fcced5a716043d?pvs=21)
- It uses [Mini js](https://mini-js.com) for frontend sprinkles instead of the Rails default — Stimulus. [Why?](https://www.notion.so/H1-Rails-11445b4d9f42805c84fcced5a716043d?pvs=21)

## Goal

The primary goal of H1 Rails, and the reason we put so much emphasis on reducing complexity, is to be the most ***new-contributor-friendly*** boilerplate out there. The idea is: If a developer is familiar with html, css and javascript, they should have to learn very few new concepts in order to work with an H1 Rails app and build really nice, polished features and flows. 

## Batteries Included

- As well as simpler defaults, H1 Rails also includes a comprehensive set of UI patterns that cover frontend-only things like icons and tooltips, but also integrated (frontend + backend) patterns like modals and toasts. For example:
    - Show a toast message by setting `flash[:toasts]` in your controller.
    - Load a view inside a modal by simply adding `before_action :renders_in_modal` to your controller.
    - Connect Dropzone on the frontend to ActiveStorage on the backend for beautiful, parallel file uploads.
- We also include some gems that accelerate and simplify the process of building web apps and are needed in almost all applications.
    - [Active Admin](https://activeadmin.info/) lets us build admin panels in just a few lines of code.
    - [Devise](https://github.com/heartcombo/devise) handles user authentication.
    - [Figaro](http://docs.dietrails.localhost/Figaro) lets you store environment variables that can be used throughout the app.

## Documentation & Demos

[H1 Rails Docs & Demos](https://www.notion.so/H1-Rails-Docs-Demos-11445b4d9f4280909a6cce799c3626c0?pvs=21)

## Articles

[“Thinking In Hypertext” - some tips for making the switch](https://www.notion.so/Thinking-In-Hypertext-some-tips-for-making-the-switch-11445b4d9f4280a48aa1c0fb1b51fb19?pvs=21)

[How H1 Rails uses HTMX](https://www.notion.so/How-H1-Rails-uses-HTMX-11445b4d9f4280c88ca8f83ae4c35a2d?pvs=21)

[H1 Rails Form Patterns](https://www.notion.so/H1-Rails-Form-Patterns-11445b4d9f4280ccbd51f8d7d32439f3?pvs=21)

[Managing CSS in H1 Rails](https://www.notion.so/Managing-CSS-in-H1-Rails-11445b4d9f428043836dd59471392469?pvs=21)

[A quick guide to state](https://www.notion.so/A-quick-guide-to-state-11445b4d9f42806caf05f9bd4bdcc438?pvs=21)

[New To Rails? Start Here](https://www.notion.so/New-To-Rails-Start-Here-11445b4d9f4280fabb63cb7db66b863e?pvs=21)

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