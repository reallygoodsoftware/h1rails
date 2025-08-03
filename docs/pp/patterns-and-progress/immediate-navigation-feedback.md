---
icon: bolt-lightning
---

# Immediate Navigation Feedback

<table data-header-hidden><thead><tr><th width="147.0625"></th><th></th></tr></thead><tbody><tr><td><strong>Current Rating</strong></td><td><strong>B</strong> . Requires a small amount of javascript, or using a Dynamic Attributes library</td></tr><tr><td><strong>Status</strong></td><td>No proposals open</td></tr></tbody></table>

When I click a navigation link in an SPA, usually two things happen

* The element I clicked gains new styles that indicate it is now active
* The area where the content is going to load updates with some kind of loading effect to indicate new content is coming.&#x20;



## Current State

There's currently no platform native way to achieve this without additional javascript.&#x20;

## Proposal

{% hint style="info" %}
This is not an official whatwg proposal - just a personal one.
{% endhint %}

There are already a few patterns in the HTML spec that support setting an active element within a group of elements, which is what we want to do here. Radio buttons, select elements, details elements. So we have a pattern we can follow.

**Code Example**

Here we're using the `name` attribute - following the pattern to group radio buttons and checkboxes. The idea is that as soon as an `<a>` element is clicked, two things would happen.

* The browser adds the `:clicked` state to the clicked link.
* The browser removes the `:clicked` state from all other elements with the same name.

```html
<nav>
  <a href="/"      name="top-nav">Home</a>
  <a href="/about" name="top-nav">About</a>
</nav>
```

This would allow us to write CSS which would "activate" a link when clicked.

```css
#menu a.active:not(:clicked) {
  font-weight: normal
}
#menu a.active, 
#menu a:clicked {
  font-weight: bold 
}
```



## Patterns & Workarounds

This javascript works with your existing classes and in cases where you are already adding an active class (or set of active classes) when the page loads. It simply checks what classes are present on only one element but not on all others, then adds those classes to any element when clicked. You can use it by simply adding `.ui-instant-nav` to the outer element that contains the links.

**Usage**

```html
<nav class="ui-instant-nav">
  <a href="/"      class="font">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

**The Code**

```javascript
function initInstantNav() {
  document.querySelectorAll('.ui-instant-nav').forEach(element => {
    const classCounts = {};
    const elementClasses = {};
    
    // Count all classes across all children
    Array.from(element.children).forEach(child => {
      const classes = Array.from(child.classList);
      elementClasses[child] = classes;
      classes.forEach(cls => classCounts[cls] = (classCounts[cls] || 0) + 1);
    });
    
    // Find classes that appear only once
    const activeClasses = Object.keys(classCounts).filter(cls => classCounts[cls] === 1);

    // when any of the child links are clicked, remove the active classes from ALL child links
    Array.from(element.children).forEach(child => {
      child.addEventListener('click', () => {
        Array.from(element.children).forEach(sibling => {
          activeClasses.forEach(cls => sibling.classList.remove(cls));
        });
        // now add the active classes to the clicked link
        child.classList.add(...activeClasses);
      });
    });
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', initInstantNav);

// also run after htmx loads
document.addEventListener('htmx:afterSwap', initInstantNav);

// Expose globally so you can call it manually when new content loads
window.initInstantNav = initInstantNav;
```
