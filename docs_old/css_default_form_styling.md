
### Default Form Styling

To apply styling to form elements, just make sure they're inside a form tag.

```html
<form>
  <input type="text" name="first_name" placeholder="Enter your first name">
</form>
```

#### Removing default form styling

To remove default styles from the entire form, add the `.no-style` class to the form.

```html
<form class="no-style">
  <input type="text" name="first_name" placeholder="Enter your first name">
</form>
```

To remove styles from individual elements, add the `.no-style` class to the element.

```html
<form>
  <input class="no-style" type="text" name="first_name" placeholder="Enter your first name">
</form>
```

#### Tweaking Variables

All of the variables that control the default form styling can be found at the top of styles.css

```css
  /* For form styling */

  --bg-primary: var(--color-alpha);
  --bg-primary-dark: var(--color-alpha-dark);
  --form-input-border-color-focus: var(--color-alpha);

  --form-input-border-color: #e5e7eb;
  --form-input-border-color-invalid: rgba(239, 68, 68);

  --form-input-border-width: 2px;
  --form-input-border-width-small-screens: 0 0 1px 0;

  --form-input-border-radius: .3rem;
  --form-input-border-radius-small-screens: 0;

  --form-input-padding-small-screens: 0.5rem 0rem;
  --form-input-padding: 0.7rem;

  --form-input-height: 3rem;
  --form-select-line-height: 1.2rem; 
  --form-input-width: 100%;

  --form-label-font-size: 1rem;
  --form-bold-font-weight: 600;
```