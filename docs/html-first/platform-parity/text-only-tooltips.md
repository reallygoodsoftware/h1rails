---
icon: lightbulb-on
---

# Text Only Tooltips

**TLDR**

* The [CSS only method](text-only-tooltips.md#css-only-method) using `::after` has been possible since 2005. It works well for most cases, but isn't as clean as a html-only method and has a few minor accessibility issues.
* The HTML method is currently being rolled out and should reach parity in the next few years.



## CSS Only Method

The CSS Only method uses  `attr` along with `::after`, to let you show a styled tooltip on hover or focus of an element. A good implementation of this is [hint.css](https://github.com/chinchang/hint.css/blob/master/hint.base.css). The snippet below shows the core methods used.

```css
[aria-label] {
  position: relative;
  cursor: pointer;
}

[aria-label]:after {
  content: attr(aria-label);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 1000;
  height: 20px;
}

[aria-label]:hover::after {
  opacity: 1;
}
```

### Known Issues (Why you might use a library)

* Requires a lot of CSS unless using a library like [hint.css](https://kushagra.dev/lab/hint/) or base-styles.
* No automatic reposition (can overflow viewport edges).
* No smart placement logic (e.g., flipping to bottom if top would be cut off).

### **Accessibility**&#x20;

This list assumes using a library like [hint.css](https://github.com/chinchang/hint.css) or base-styles.

#### Good

* ✅ **Screen reader access** via `aria-label`
* ✅ **Keyboard navigation** via `:focus`
* ✅ **Touch/mobile access** via `:hover` tap behavior
* ✅ **No motion barriers** (static tooltips)
* ✅ **Works without JavaScript** (no scripting dependency)

#### Bad

* ❌ **No keyboard dismissal** (Esc key support)
* ❌ **Potential viewport overflow** making content unreadable
* ❌ **No programmatic API** for assistive tech integration



## HTML Only Tooltips



* [Popover Research Explainer](https://open-ui.org/components/popover.research.explainer/)
* [Anchor Tool](https://anchor-tool.com/)

**Resources**

**TODO**: Expand here on `<dialog>` , `popover='hint'`, anchor positioning, and how to combine all three to get good platform tooltips.

## &#x20;







