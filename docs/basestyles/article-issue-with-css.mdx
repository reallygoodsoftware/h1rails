
# Background

> **This section is written to be readable by both technical and non-technical people.**

### The issue(s) with CSS

The biggest challenge with CSS when it comes to building large web software applications is the "Curse of the cascade". CSS is incredibly flexible - there are hundreds of ways to do the same thing, each with their own set of subtle trade offs. 

Because of this, codebases become difficult to organize as the grow, and it's very easy to accidentally break one thing when working on something completely separate. 

If you don't borrow opinionated patterns from the open source community, or have someone senior and opinionated in-house to keep things orderly, the styling in your application will invariably become bloated and buggy as your product grows.

### Solution 1: CSS in JS

One solution to this problem was introduced when javascript frameworks like [React](https://react.dev/) got popular. These solutions generally enforced "scoping" - which ensured styles could only apply to specific parts of the UI and couldn't "leak" into other parts of it, essentially turning off the part of CSS that caused the most problems, and giving developers greater certainty and comfort to make changes without breaking things. 

The biggest drawback of this approach is that it relies on [transpilation](https://webreference.com/javascript/advanced/transpilers/). Transpilation means that developers can write their code in a new, more powerful dialect, but before that code will work in a browser, it has to be "translated" back into the native languages of the web - html, css, and javascript. This introduces challenges, because the tooling to do this is A) Constantly changing, B) Not very standardized, and C) Very difficult to debug. 

This increases the skill level needed on the team (less experienced devs need assistance to use it), and introduces a maintenance burden. So much so that if you leave a codebase that uses transpilation for just a few months and come back to it, you can often be "locked out" of making changes to it because the tooling needs to be upgraded (which is not always straightforward).

### Solution 2: Tailwind

Several years ago, [another approach](https://tailwindcss.com/) emerged. This approach again had a solution to the Curse of The Cascade, but used a diferent mechanism, by providing a set of constraints that made collisions impossible, and getting developers to define their styles inside their __html__ files, as opposed to inside CSS files as was previously the case.

Tailwind was better than CSS in JS in that it didn't require you to use a meta framework, and required less knowledge of non-standard tooling and frameworks. But it didn't solve all of the problems of CSS in JS.

### Challenges

We build a lot of software at [Really Good Software](https://reallygoodsoftware.net) and have been using Tailwind for 95%+ of our CSS for the last 3 years. We even built [our own library](https://tailwind-lite.com) to remove the requirement for transpilation.

For projects that had a full time designer, Tailwind continued and continues to work well - our developers simply use Tailwind classes to translate what's in a Figma file. 

But tickets don't always have a design. It's very common to see tickets that require adding small improvements like "add a new select input to the form" or "add a new button to cancel an action". 

For projects where this happened regularly, we would often end up introducing subtle design inconsistencies over time. Like a button on the onboarding section that had a different background color than the button on the pricing section. Or form inputs that had slightly different padding on the settings screen to the login screen.

Tailwind's blog says this is because we're not following [their advice](https://tailwindcss.com/docs/reusing-styles#extracting-components-and-partials) and extracting our repeatable code into __components__. But when we got specific, most if not all of the examples we found were much more clear and more readable when expressed as html with some classes, than they were as components. 

### Examples

Lets take some examples, starting with a simple button. Here is how we would render a button with html and some css classes.

To do that same thing with a Tailwind component, we would have to write code in three places. First, we'd have to create a new component.


```html title="components/button.html.erb"
<button type="button" 
  class="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
  focus-visible:outline-2 focus-visible:outline-offset-2 
  focus-visible:outline-indigo-600">
  Button text
</button>
```

``html
<button class="ui-button --primary">
  Submit Form
  <svg></svg>
</button>
```


::: tabs#comparison

@tab Tailwind Component#Component

With the Tailwind-preferred approach

```jsx
<Button>
  Submit Form
  <svg></svg>
</Button>
```


```html
<button class="bg-blue-500 text-white px-4 py-2 rounded">
  Submit Form
  <svg></svg>
</button>
```

@tab HTML with classes#HTML

```html
<button class="ui-button --primary">
  Submit Form
  <svg></svg>
</button>
```



:::

### Organization & Utility

There are two problems to be solved with libraries in this space. The first is code organization and the second is utility.

Tailwind solves the organization problem - it's easy to see where styles are applied because they're all in the same file. But Tailwind itself doesn't provide utility. For example, if you want to create a toast, a modal, or a tooltip, you have to use another layer on top of Tailwind. To be fair, there are many op, but that's an additional layer on top of Tailwind that needs to be managed.
