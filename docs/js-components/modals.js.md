# Modals.js

Modals.js is a drop-in javascript file that lets you use modals on your page, provided you've also included base-styles.css for the styling. It's written in jsx, enabled by&#x20;

To trigger a modal, simply call the `launchModal()` function from an onclick event or elsewhere.

**Arguments**

* `url` (optional): The page to load your modal content from.
* `selector` (optional): The id of the div to use for the modal content.
* `id` (optional): Give your modal an identifier if you need to manually call `closeModal()` later in the cycle.
* `size`: The size of the modal. Defaults to `md`
  * Options: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`



### Trigger a modal from a div on the page



```
<div id='modal-content' hidden> Content in Here </div>
<button class="ui-button" onclick="
  launchModal({ selector: '#modal-content'})">
</button>
```

