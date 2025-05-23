---
icon: icons
---

# Icons

### What Icons Are Included

* [Heroicons](https://heroicons.com) (`/app/assets/icons/heroicons`)
* [Tabler Icons](https://tabler.io/icons) (`/app/assets/icons/tabler`)



### Rendering An Icon

* We use the [inline\_svg](https://github.com/jamesmartin/inline_svg) gem.
* To render an icon, use the following snippet and swap out the name of the file and the classes as necessary.

```erb
<%= inline_svg_tag("/heroicons/icon-chevron-right.svg") %>
```

#### Add Classes

Most commonly used to change the size or color.

```erb
<%= inline_svg_tag("/heroicons/icon-chevron-right.svg", class: "w-5 text-indigo-500") %>
```

#### Why not \<img> tags?

Normal image tags don't allow us to specify a class that gets add to the svg element itself. Instead, they render an element that points to the svg, which is different to rendering the svg directly.
