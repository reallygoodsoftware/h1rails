---
icon: chart-simple-horizontal
---

# Partial Page Replacement

<table data-header-hidden><thead><tr><th width="147.0625"></th><th></th></tr></thead><tbody><tr><td><strong>Current Rating</strong></td><td><strong>B</strong> . Requires using a third party library like htmx</td></tr><tr><td><strong>Status</strong></td><td>Multiple Proposals Open. <a href="https://alexanderpetros.com/triptych/">Triptych</a> is a set of 3 that address the same idea.</td></tr></tbody></table>

TODO: Transfer notes in here & clean up



**A Note on Flash of White**

"Flash Of White" refers to the momentary state that appears in a browser when a user clicks on a link or submits a form, on a web page or web app that doesn't use a frontend library. This particular behavior (or the lack thereof) has become synonymous with a web app feeling slow or unpolished.&#x20;

In 2019, Chrome added a feature called "Paint Holding" which addresses this provided the page loads in less than 500ms. However A) This method is limited to chrome users, and B) The tab bar still shows a loading spinner in place of the favicon while loading, which still doesn't _feel_ on par with SPAs to the user.

The main solution right now is to use a library like htmx&#x20;

<details>

<summary>Example</summary>

<div data-full-width="true"><figure><img src="../../.gitbook/assets/CleanShot 2025-05-20 at 11.15.45.gif" alt=""><figcaption></figcaption></figure></div>



</details>
