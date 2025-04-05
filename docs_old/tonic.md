
# Tonic.css

- Includes several commonly used utility styles which are not included in Tailwind.
- Includes uniform styles for tippy, dropzone, and choices.js, which rely on the same base variables.

### Forms

- By default, tonic applies clean styles to all form elements (any `<input>`, `<textarea>`, or `<select>` that's nested in a `<form />` will get them).
- On mobile, elements will lose their border and padding to not feel cramped on narrow screens.
- You can selectively disable styling on any form or element with the `.no-style` class.
- You can modify the following variables in variables.css
  - --form-input-border-color: #e5e7eb;
  - --form-input-border-color-focus: #191919;
  - --form-input-border-color-invalid: rgba(239, 68, 68);
  - --form-input-border-width: 2px;
  - --form-input-border-width-small-screens: 0 0 1px 0 ;
  - --form-input-border-radius: 0.25rem;
  - --form-input-border-radius-small-screens: 0;
  - --form-input-padding-small-screens: 0.5rem 0rem;
  - --form-input-padding: 0.75rem;
  - --form-input-height: 50px;
  - --form-input-width: 100%;
  - --form-label-font-size: 1.25rem;
  - --form-bold-font-weight: 600; 

### Shimmer