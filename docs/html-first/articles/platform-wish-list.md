---
icon: circle-small
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: false
  pagination:
    visible: true
---

# Platform Wish List

{% hint style="info" %}
This is a placeholder page which will be fleshed out as my thoughts develop.
{% endhint %}



What's left to get us to Web App Parity?

<table><thead><tr><th width="220.68359375">Aspect</th><th width="377.546875">Note</th><th>Workarounds</th></tr></thead><tbody><tr><td>A solution to "Flash Of white" for links and forms</td><td>Should be addressed by <a href="https://alexanderpetros.com/triptych/">triptych</a> and view transitions.</td><td><a href="http://htmx.org/">HTMX</a>, <a href="https://turbo.hotwired.dev/">Turbo</a></td></tr><tr><td>HTML Only Icons</td><td>The ability to pass <code>fill</code> attribute from the &#x3C;img> tag to the referenced svg. See <a data-mention href="../platform-parity/icons.md">icons.md</a></td><td><a href="https://github.com/jamesmartin/inline_svg">Inline SVG Gem</a></td></tr><tr><td>Tooltips</td><td>Nearly at Parity. Dialog popover=hint plus anchor targets get us there. See <a data-mention href="../platform-parity/text-only-tooltips.md">text-only-tooltips.md</a></td><td><a href="https://base-styles.com/">Base Styles</a> &#x26; <a href="https://mini-js.com/">Mini JS</a></td></tr><tr><td>Modals</td><td>Nearly at Parity with Dialogs, but currently needs js to do cleanly. To research further</td><td>Modals.js (Base Styles &#x26; Preact Standalone)</td></tr><tr><td>Toasts</td><td>To research further.</td><td>Toasts.js (Base Styles &#x26; Preact Standalone).</td></tr><tr><td>Styleable Selects</td><td>Recently added to Chrome for testing. Part of <a data-mention href="css-form-control-styling.md">css-form-control-styling.md</a>. To research the UX. </td><td><a href="https://base-styles.com/">Base Styles</a> &#x26; <a href="preact-standalone.md">Preact Standalone</a> </td></tr><tr><td>Style-able Date Time Pickers</td><td>Also covered in <a data-mention href="css-form-control-styling.md">css-form-control-styling.md</a></td><td><a href="preact-standalone.md">Preact Standalone</a> &#x26; <a href="https://base-styles.com/">Base Styles</a></td></tr><tr><td>Rich text editor</td><td>Still a long way to go. To research.</td><td></td></tr><tr><td><strong>Pattern</strong>: Reusing groups of attributes in CSS</td><td>Aka the @apply function</td><td></td></tr><tr><td><strong>Pattern</strong>: Live Properties</td><td>See <a data-mention href="duss-dom-updates-based-on-simple-state.md">duss-dom-updates-based-on-simple-state.md</a></td><td><a href="https://mini-js.com/">Mini Js</a></td></tr><tr><td><strong>Pattern</strong>: Templating &#x26; bundling complex interactive UI components </td><td>See <a data-mention href="jsx-vs-web-components.md">jsx-vs-web-components.md</a></td><td></td></tr></tbody></table>

