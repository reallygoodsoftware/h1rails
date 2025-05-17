# 👋 Intro

Base Styles is a single-file CSS toolkit designed for:

1. Composing clean, consistent user interfaces
2. Providing a lightweight way to keep your CSS organized.

***

## Get Started

{% content-ref url="getting-started.md" %}
[getting-started.md](getting-started.md)
{% endcontent-ref %}

***

## Principles

#### UI Elements _Plus_ Code Organization

Most CSS libraries give you _**either**_:

1. A set of patterns for keeping things organized (e.g. [Tailwind](https://tailwindcss.com/)), **or**
2. A set of UI elements (e.g. [Shadcn](https://ui.shadcn.com/)).

We wanted something that gave us both.

***

### No Build Steps

We no longer need a compile step to build CSS libraries. [CSS variables](https://caniuse.com/css-env-function) brought the ability to define and reuse design tokens, and [CSS Nesting](https://caniuse.com/css-nesting) made building systems in a single file much easier to organize.

***

### Effortless Consistency

If you use [Tailwind](https://tailwindcss.com/) without a component library or a design team, your UI will start to accumulate minor visual inconsistencies over time. Tailwind's recommended strategy is to first add CSS classes, then bundle your HTML into components. Ours removes the second step — you just add the classes and you're done. This is one less thing for your team to worry about, and leaves you with a more consistent UI.

***

### We Style, You Space

We agree with [**Caleb**](https://x.com/calebporzio/status/1837495368843436266):

> "If you bake spacing utilities into your components, you end up constantly wrestling with and overriding them...which begets all sorts of badness."

We recommend including [**Tailwind Lite**](https://tailwind-lite.com) and using it for utility classes like `flex flex-col gap-4`.

***

### Interoperability

Most "components" can be implemented with "add this class to this element on click/hover", which means that for most component libraries, 95% of the work is in the styling and only 5% is in the interactivity. And yet, authors building UI libraries for a specific framework write all of their styling from scratch every time, rather than reusing and sharing a set of styles for, for example, their modal component.

***

### Info

**We would love to see authors build libraries for their specific framework on top of Base Styles. If you are interested in this, please go right ahead!**
