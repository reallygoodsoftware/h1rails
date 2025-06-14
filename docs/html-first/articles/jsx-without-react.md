---
description: Aka the Joy of Preact Standalone
icon: circle-small
---

# JSX Without React

It remains my opinion that _**most**_ codebases that use React, do so in such a way where the benefits don't justify the costs. The average react usage stretches conceptually far beyond providing a simple frontend templating language.&#x20;

At the same time, for building highly reactive components, jsx provides the best conventions when compared to A) Vanilla JS, and B) Web Components.&#x20;

I'd like to a deeper dive with comparisons on this at some point in the future. Some thoughts for now off the top of my head:

* **Performance**: When writing vanilla javascript components, there's the performant way to write them, and the non-performant way. If you build enough components, particularly anything that has nested state, deals with thousand of "objects", or appears on a screen a few dozen times (like a multi select), you'll find yourself needing to do fine-tuning after your first implementation has been written. Whereas the conventions provided by jsx mostly ensure that your first pass implementation will be performant out of the box.
* **Web Components:** Again, longer post needed here, but in short: Web components have the same performance considerations (outlined above) as vanilla javascript. Styling Web Components is clunky, difficult to reason about and difficult to extend. I would love to be able to use and recommend them more. &#x20;

## Enter Preact Standalone

[Preact](https://preactjs.com/) is a fast, lightweight alternative to React that provides the same modern API and component model but with a much smaller bundle size (around 3KB). It's been stable for years and maintains almost of all of the same features as React. But - the recommended way to use Preact still requires a build step.&#x20;

Now, if you go digging through their docs, on their Getting Started page you'll see this little inconspicuous notice.

<figure><img src="../../.gitbook/assets/CleanShot 2025-06-14 at 14.35.45@2x.png" alt=""><figcaption></figcaption></figure>

It's not fully clear from the docs, but what this means is that **you can use Preact Standalone to build components almost exactly as you would with React**, but without having React "eat" your entire UI. You don't need to use a bundler, and you don't need to write your whole UI in React. Instead, for any components that are particularly complex, you can write just-those-components in jsx, and have them exist as little islands in your otherwise non-react codebase.&#x20;

## What Using Preact Standalone Looks Like

My go-to pattern here for using Preact Standalone looks like this

### 1. Create a \`.js\` file containing our component

In the first line, we can import the functions we need from the preact standalone cdn.

<pre class="language-javascript"><code class="lang-javascript"><strong>// public/counter.js
</strong>
import { html, useState } from 'https://esm.sh/htm/preact/standalone';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return html`
    &#x3C;div class="p-5">
      &#x3C;div>
        &#x3C;span class="font-bold">Count:&#x3C;/span> ${count}
      &#x3C;/div>
      &#x3C;button class="ui-button mr-3" onClick=${() => setCount(count + 1)}>Increment&#x3C;/button>
      &#x3C;button class="ui-button" onClick=${() => setCount(count - 1)}>Decrement&#x3C;/button>
    &#x3C;/div>
 `;
}
</code></pre>

### 2. Include the component in our page

This code basically says, for every `<div data-component="counter" />` on the page, replace it with the counter component.&#x20;

```html
<script type="module">
  import { render } from 'https://esm.sh/htm/preact/standalone';
  
  import Counter from '/public/counter.js'
  
  document.querySelectorAll('[data-component="counter"]').forEach(element => {
    render(html`<${Counter} element=${element} />`, element);
  });
</script>

<div data-component="counter">
</div>
```

## Builds on top of the web, not around it

What's particularly great about Preact is that it uses ES6 Template Literals - a native javascript feature that's been around since 2015. In addition we can use `<script type="module">` syntax to keep our code organized and load in Preact Standalone and the components we need. Again - all of this is now possible without building and bundling, because of the magic of the platform.



