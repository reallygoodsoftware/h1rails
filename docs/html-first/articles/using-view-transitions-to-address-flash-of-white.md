---
icon: circle-small
---

# Using View Transitions to address "Flash of White"

{% hint style="info" %}
This is a placeholder
{% endhint %}



### he Problem: Flash of White in Traditional Web Navigation

Traditional multi-page applications (MPAs) suffer from a jarring flash of white during page navigation. This poor user experience was a major reason why developers turned to single-page application (SPA) frameworks, despite their complexity and overhead.

### Two Solutions from Browser Vendors

#### 1. Paint Holding (Automatic)

Chrome (since 2019) and Safari implemented Paint Holding, an automatic browser optimization that:

* Keeps the previous page visible until the new page is ready
* Applies automatically to same-origin navigations
* Has a timeout of approximately 500ms
* Works without any developer intervention

#### 2. View Transitions API (Developer-Controlled)

The View Transitions API takes this concept further by giving developers control over transitions:

* Requires explicit opt-in via CSS/JavaScript
* Creates animated transitions between page states
* Works for both same-document (SPA) and cross-document (MPA) scenarios
* Offers customizable animations via CSS

### Creating SPA-like Experiences with Minimal Code

The most exciting development is cross-document View Transitions (Chrome 126+), which allow traditional MPAs to feel like SPAs with just a few lines of CSS:

```css
css/* Basic implementation - just this one line! */@view-transition {}
```

That's all you need for the default cross-fade between pages when navigating via links or form submissions on the same origin!

For more customization:

```css
css/* Customize transition timing */::view-transition-old(root),::view-transition-new(root) {  animation-duration: 0.3s;  animation-timing-function: ease;}
```

### Why This Matters

1. **Regular Links and Forms Feel Smooth**: Users experience smooth transitions rather than jarring page reloads.
2. **Near-Zero Development Effort**: Unlike SPAs that require complex routing and state management, you just add a few lines of CSS.
3. **Best of Both Worlds**: You get:
   * SPA-like UX without SPA complexity
   * Standard HTML forms work smoothly
   * Regular server rendering (better SEO)
   * Smaller page weight (no framework)

### Current Limitations

* Cross-document View Transitions are currently only in Chrome 126+
* Safari implementation is coming soon
* Firefox implementation timeline is uncertain

### Conclusion

The View Transitions API represents one of the most significant advancements for the web platform in years. It removes a major reason why developers turned to complex SPA frameworks in the first place, allowing for seamless, animated transitions between pages with minimal code and complexity.

For developers building websites today, this means potentially simpler codebases, better performance, and improved user experiences - all with just a few lines of code.
