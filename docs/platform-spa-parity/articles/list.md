---
icon: circle-small
---

# List

{% hint style="info" %}
**Work In Progress**
{% endhint %}



<details>

<summary>Snappy Page Transitions</summary>

* Covers Flash Of White, Partial Page Replacement,&#x20;
* TLDR:&#x20;
*

</details>



<table data-full-width="true"><thead><tr><th width="220.68359375">Aspect</th><th width="683.609375">Note</th><th>Workarounds</th></tr></thead><tbody><tr><td><a data-mention href="../patterns-and-progress/snappy-page-transitions/">snappy-page-transitions</a></td><td><a href="https://developer.chrome.com/blog/paint-holding">Chrome Paint Holding</a> &#x26; <a href="https://developer.chrome.com/docs/web-platform/view-transitions/cross-document">Multi Document View Transitions</a> make some headway, but for an SPA level experience, more is needed. The <a href="https://alexanderpetros.com/triptych/">Triptych Proposals</a> is a set of 3 proposals which if accepted, would reach parity.</td><td><a href="http://htmx.org/">HTMX</a>, <a href="https://turbo.hotwired.dev/">Turbo</a></td></tr><tr><td>Loading states for forms and buttons</td><td>There's no html first way to show a user a loading state when they submit a form. The best solution to this would be to add a  <code>submitted</code> attribute to a form when submitted. Until then, this pattern can also be trivially achieved with the Dynamic Attributes pattern.</td><td><a href="https://htmx.org/attributes/hx-indicator/">HTMX Indicators</a></td></tr><tr><td>HTML Only SVG Icons</td><td>It's not currently possible to reuse svg icons in a useful way. Using <code>&#x3C;svg></code> requires including the entire contents (rather than referencing them), and using <code>&#x3C;img /></code> omits important properties like fill color. </td><td><a href="https://github.com/jamesmartin/inline_svg">Inline SVG Gem</a></td></tr><tr><td>Tooltips</td><td>Still relying on the CSS ::after hack and limited to only plain text tooltips with no smart repositioning. Waiting on updates to dialog and interesttarget. </td><td><a href="https://base-styles.com/">Base Styles</a> &#x26; <a href="https://mini-js.com/">Mini JS</a></td></tr><tr><td>Modals</td><td>Nearly at Parity with Dialogs, but currently needs js to do cleanly. WIP. </td><td>Modals.js (Base Styles &#x26; Preact Standalone)</td></tr><tr><td>Styleable Selects</td><td>Recently added to Chrome for testing. Part of <a data-mention href="css-form-control-styling.md">css-form-control-styling.md</a>. To research the UX. </td><td><a href="https://base-styles.com/">Base Styles</a> &#x26; <a href="broken-reference">Preact Standalone</a> </td></tr><tr><td>Datalists</td><td></td><td></td></tr><tr><td>Toasts</td><td>WIP. </td><td>Toasts.js (Base Styles &#x26; Preact Standalone).</td></tr><tr><td>Style-able Date Time Pickers</td><td>Also covered in <a data-mention href="css-form-control-styling.md">css-form-control-styling.md</a></td><td><a href="broken-reference">Preact Standalone</a> &#x26; <a href="https://base-styles.com/">Base Styles</a></td></tr><tr><td><strong>Pattern</strong>: Reusing groups of attributes in CSS</td><td>Aka the @apply function</td><td></td></tr><tr><td><strong>Pattern</strong>: Live Properties</td><td>See <a data-mention href="a-missing-pattern-dynamic-attributes.md">a-missing-pattern-dynamic-attributes.md</a></td><td><a href="https://mini-js.com/">Mini Js</a></td></tr><tr><td><strong>Pattern</strong>: Templating &#x26; bundling complex interactive UI components </td><td>See <a data-mention href="../../html-first/articles/jsx-vs-web-components.md">jsx-vs-web-components.md</a></td><td></td></tr></tbody></table>

