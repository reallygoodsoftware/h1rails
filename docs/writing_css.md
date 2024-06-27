
# Writing CSS

<hr class="my-2"/>

#### The Current Structure

- `/public/stylesheets` is where we put our own stylesheets. We don't have a lot of custom CSS, so we're currently only using one file - `styles.css`
- `/public/vendor` is where we put external libraries. The only external library we load by default is Tailwind Lite.

```
<link rel="stylesheet" href="/vendor/statictailwind/1.0.2.css">
<link rel="stylesheet" href="/stylesheets/styles.css<%= cache_buster %>">
```

#### Styles.css (What comes "out of the box")

- All of our css variables, which are primarily used for colors.
- Utility classes for colors.
- Default styles for forms.
- Some useful components e.g. shimmer. 

#### Heuristics

- Start with Tailwind classes
- Fall back to using inline styles (sparingly) for the rare cases that aren't covered in Tailwind Lite.
- Use CSS variables to hold colors
- Write simple custom utility classes for applying colors.
- Write simple group components to apply active, hover, focus states.

#### Examples
