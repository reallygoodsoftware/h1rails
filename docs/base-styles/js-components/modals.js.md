---
icon: rectangle-history
---

# Modals.js

A lightweight modal system that supports dynamic content loading and multiple content sources.

### Features

* **Multiple Content Sources**: Load content from URLs, DOM selectors, or inline HTML
* **Script Execution**: Automatically executes scripts in loaded content
* **Multiple Sizes**: Configurable modal sizes (sm, md, lg)
* **Smooth Animations**: Built-in show/hide animations
* **Accessibility**: Proper ARIA attributes and keyboard support
* **Auto-initialization**: Automatically sets up when the module loads
* **HTMX Integration**: Automatic HTMX processing of loaded content

### Installation

The modal system auto-initializes when the module is loaded. Simply include the script in your HTML:

{% tabs %}
{% tab title="Stable Version" %}
```html
<script src="https://cdn.base-styles.com/components/modals-0.0.1.js" type="module" ></script>
```
{% endtab %}

{% tab title="Edge" %}
```
<script src="https://cdn.base-styles.com/components/modals-0.0.1.js" type="module" ></script>
```
{% endtab %}
{% endtabs %}

## Usage

Modals.js exposes a global `launchModal` function that you can use anywhere in your code

#### 1. With Pre Loaded Content

```html
<button onclick="launchModal({
  selector: '#myhiddenmodal'
})></button>

<div class="hidden" id="myhiddenmodal">
  Content Here
</div>
```

#### 2. With Content from URL

```html
<button onclick="launchModal({
  url: '/api/modal-content'})">
</button>
```

#### 4. Modal with Specific Content from URL

```javascript
// Load a page but only show a specific element
launchModal({
  url: '/full-page',
  remoteSelector: '.modal-content',
  size: 'md'
});
```

### Modal Sizes

The system supports three modal sizes:

* `'sm'`: Small modal (narrow width)
* `'md'`: Medium modal (default, standard width)
* `'lg'`: Large modal (wide width)

### Content Loading Behavior

#### URL Loading

When using the `url` option:

1. Modal appears immediately with "Loading content..." message
2. Content is fetched asynchronously from the specified URL
3. If `remoteSelector` is provided, only the matching element is extracted
4. Content is updated once loaded

#### Selector Loading

When using the `selector` option:

1. Content is immediately extracted from the DOM
2. Modal appears with the extracted content
3. If selector doesn't match, an error message is shown

#### Inline Content

When using the `content` option:

1. Modal appears immediately with the provided HTML
2. No additional loading occurs



### API Reference

#### Global Functions

The system creates two global functions: `launchModal()` and `closeModal()`.

**`launchModal(options)`**

Launches a new modal with the specified options.

**Parameters:**

* `options` (Object): Configuration object with the following properties:
  * `id` (String, optional): Custom modal ID. If not provided, a unique ID will be generated
  * `content` (String, optional): Initial HTML content
  * `url` (String, optional): URL to fetch content from
  * `selector` (String, optional): CSS selector to get content from existing DOM elements
  * `remoteSelector` (String, optional): CSS selector to extract specific content from URL response
  * `size` (String, optional): Modal size. Options: `'sm'`, `'md'`, `'lg'`. Default: `'md'`

**Returns:** Promise that resolves to the modal ID

**`closeModal(modalId)`**

Closes a specific modal by ID.

**Parameters:**

* `modalId` (String): The ID of the modal to close

### HTMX Integration

The modal system automatically integrates with HTMX:

* When content is loaded, `htmx.process()` is called on the modal container
* This enables all HTMX attributes (`hx-get`, `hx-post`, etc.) to work within modals
* Forms and interactive elements work seamlessly

### Script Execution

The system automatically executes scripts found in loaded content:

* **Inline scripts**: `<script>console.log('Hello');</script>`
* **External scripts**: `<script src="/path/to/script.js"></script>`
* Scripts are properly recreated to ensure they execute in the modal context

### Accessibility Features

* Proper `role="dialog"` attribute
* `aria-modal` attribute set correctly
* Close button with proper accessibility
* Overlay click to close functionality

### Error Handling

The system includes robust error handling:

* Network errors when loading URLs show user-friendly error messages
* Invalid selectors display helpful error text
* Failed content loading doesn't break the modal system

### Browser Compatibility

* Modern browsers with ES6+ support
* Requires `fetch` API support
* Works with or without HTMX (graceful degradation)

### Performance Considerations

* Modals are created on-demand and removed after closing
* Content is cached only during modal lifetime
* Scripts are executed only when needed
* Smooth animations with CSS transitions

### Troubleshooting

#### Modal Not Appearing

* Check browser console for JavaScript errors
* Ensure the script is loaded as a module
* Verify the `#modals` container exists in the DOM

#### Content Not Loading

* Check network tab for failed requests
* Verify URLs are accessible
* Ensure selectors match existing elements

#### HTMX Not Working

* Confirm HTMX is loaded before the modal system
* Check that `window.htmx` is available
* Verify HTMX attributes are properly formatted

#### Scripts Not Executing

* Check browser console for script errors
* Ensure scripts don't have syntax errors
* Verify external script URLs are accessible



