---
icon: ranking-star
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

# Platform Parity

Historically, we've had to rely on external libraries, preprocessing, and transpilation to achieve many of the patterns that are common in web software. Over time, the web platform's capabilities have grown, often but not always - eliminating the need for external solutions.

For example, in the early days of the web, there was no way to create rounded border radii or box shadows natively—until CSS3 introduced these features in the spec.&#x20;

When a native implementation reaches a point where it's at least as good as using an external library, we say that pattern has achieved "Platform Parity." This represents the moment when developers can confidently use the built-in solution without sacrificing _either_ DX or UX.

## Platform Parity is Subjective

I don't believe there is an objective way to measure when a pattern becomes as-good-as-with-libraries. Everyone will have slightly different definitions about what constitutes "good enough". I am proposing the term as a way to facilitate discussion and debate.



Some of the things I think matter when evaluating Platform Parity:

* **Maintainability**: Is the vanilla solution as easy to maintain as it's library-driven equivalent.
* **Footgun Safety**: If we want to make changes, or handle scenarios where performance is important, is it possible to do this.
* **Accessibility**: Does the vanilla solution offer all of the same accessibility affordances as it's library-driven equivalent.
* **Aesthetics**: Does the vanilla solution look and feel as good as it's library-backed counterpart.



For example, it is possible _today_ to implement Modals using the `<dialog>` element. However, on the dx side, it requires a reasonable amount of boilerplate & can't be done with just html attributes, and on the _**UX**_ side, it



## UI

<table><thead><tr><th width="193.50390625">Pattern</th><th width="155.75">Parity Grade</th><th>Note</th></tr></thead><tbody><tr><td><a data-mention href="flash-of-white.md">flash-of-white.md</a></td><td>C-</td><td>Since 2019, Chrome users have a feature called <a href="https://developer.chrome.com/blog/paint-holding">Paint Holding</a>, which waits for 500ms before changing a page. But this is not officially part of the platform, so doing this well still requires libraries like htmx or turbo. View Transitions </td></tr><tr><td><a data-mention href="text-only-tooltips.md">text-only-tooltips.md</a></td><td>A-</td><td>Since 2005 there has been reliable, stylable, largely accessible way to implement plain text tooltips using CSS. A newer, cleaner method will be possible soon using html only. Read more: <a data-mention href="text-only-tooltips.md">text-only-tooltips.md</a></td></tr><tr><td><a data-mention href="icons.md">icons.md</a></td><td>B-</td><td>We've been able to do svg icons with good coverage since 2017 or so. However it's still not possible to easily change an icon's color in a reusable way (as you'd expect from an image tag).</td></tr></tbody></table>



## Organizational Features

| Methods       | Note |
| ------------- | ---- |
| Border Radius |      |
| Variables     |      |



