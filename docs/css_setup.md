
# Frontend 

As mentioned in the readme, our frontend patterns follow HTML first principles. We've also added a few (small, easy to learn) libraries and utilities, along with examples of how to use them.

Our CSS files are structured as follows:

| CSS File             | Note |
|----------------------|------|
| setup.css            | Contains CSS variables used by other files  |
| tonic.css            | Utility styles and default styling for dropzone, choices and tippy  |
| tailwind-full.css    | Static file containing most of Tailwind. Uses dumb-tailwind.  |
| dropzone.css         | Base styles for dropzone |
| choices.css          | Base styles for choices  |
| tippy.css            | Base styles for tippy    |
| tailwind-trimmed.css | If performance is important use this. Requires setup - see technical notes  |

<br/>

- **Tailwind**: CSS is a powerful language, but it's cascading nature can make it difficult to debug (figure out why it's not behaving as expected), and maintain (add new styles without breaking existing styles) over time. Because of this, CSS is one of the most common places that novice developers get stuck when starting out. [Single-purpose CSS classes](https://tailwindcss.com/docs/utility-first) address this, by providing a-single-way-to-do-styling which prevents collisions and makes it very obvious where a style is being applied. We use [Tailwind](https://tailwindcss.com/) for this. 
- **HTMX**: Another shortcoming of plain HTML is that it doesn't provide a way to easily update a **part** of a webpage or screen when a user clicks on or interacts with another part of it. Instead it requires the page undergo a full reload to load in new content. This can make interfaces feel slow, and falls short of the expectations of the average internet software user. We use [htmx](https://htmx.org/) to fill this gap.

