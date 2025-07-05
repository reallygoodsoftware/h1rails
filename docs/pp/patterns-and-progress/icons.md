---
icon: icons
---

# Icons

<table data-header-hidden><thead><tr><th width="147.0625"></th><th></th></tr></thead><tbody><tr><td><strong>Current Rating</strong></td><td><strong>B</strong> . We can use <code>&#x3C;svg /></code> elements, but we must either inline the entire file or compile all our svgs into a single sprite file. </td></tr><tr><td><strong>Status</strong></td><td>Proposals Open. See Below</td></tr></tbody></table>



## Current State

There are limitations to using styleable SVG icons without resorting to workarounds&#x20;

### Current Options

**Option A: SVG Sprites with `<use>`**

```html
<svg>
  <use href="sprite.svg#icon-name"></use>
</svg>
```

**Option B: Inline SVG**

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50" fill="currentColor" />
</svg>
```

#### Problems

**SVG Sprites:** Require awkward syntax, limited cross-browser support for external references, and need the sprite to be present in the document.

**Inline SVG:** Bloats HTML markup, provides no caching benefits as SVG code is repeated on every page, and creates maintenance issues when the same icon is used across multiple pages.

### Workarounds

#### CSS `mask` Property

```css
.icon {
  mask: url('icon.svg');
  background-color: currentColor;
  width: 24px;
  height: 24px;
}
```

This approach works for single-color icons but cannot style individual paths within the SVG and has limited browser support for some mask features.

### Proposals

#### Proposal A: SVG `src` Attribute ([WHATWG HTML #5910](https://github.com/whatwg/html/issues/5910))

```html
<svg src="icon.svg" viewBox="0 0 100 100">
  <style>
    circle { fill: red; }
  </style>
</svg>
```

This proposal adds a `src` attribute to SVG elements, allowing external SVG files to be styled with CSS rules from the parent document while maintaining caching benefits.

#### Proposal B: CSS `::src` Pseudo-element ([WHATWG HTML #9064](https://github.com/whatwg/html/issues/9064))

```css
img::src {
  fill: currentColor;
  border: 2px solid blue;
}

img::src path {
  stroke: red;
  stroke-width: 2px;
}
```

This proposal introduces a pseudo-element syntax for styling external SVG content loaded via `<img>` tags, enabling granular control over SVG elements and their children.

#### Proposal C: `currentColor` Support ([WICG #50](https://github.com/WICG/proposals/issues/50))

```html
<img src="logo.svg" colorscheme="glyph">
```

This proposal would automatically substitute black colors with `currentColor` values, enabling SVG images to adapt to their parent's text color for theme support.
