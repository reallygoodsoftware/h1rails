---
icon: browsers
---

# Modals

H1 Rails uses Modals.js by Base Styles to power modals. For more info, read the [Modals.js docs](../../js-components/modals.js.md).

#### 1. With Pre Loaded Content

```html
<button onclick="launchModal({
  selector: '#myhiddenmodal'
})"></button>

<div class="hidden" id="myhiddenmodal">
  Content Here
</div>
```

#### 2. With Content from URL

```html
<button onclick="launchModal({
  url: '/modal-content'})">
</button>
```

#### 4. Modal with Specific Content from URL

```html
<button onclick="launchModal({
  url: '/full-page',
  remoteSelector: '.modal-content',
  size: 'md'
})"></button>
```

**5. Close a modal**&#x20;

```html
<button onclick="launchModal({
  id: 'account-modal'
  url: '/account'
})"></button>

<script>
  closeModal('account-modal');
</script>
```

### Modal Sizes

The system supports three modal sizes:

* `'sm'`: Small modal (narrow width)
* `'md'`: Medium modal (default, standard width)
* `'lg'`: Large modal (wide width)
