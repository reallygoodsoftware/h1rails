---
icon: chart-simple-horizontal
---

# Partial Page Replacement

This was originally covered in [.](./ "mention") but I'm going to move it into it's own page. This is a placeholder for now.&#x20;



## Flash of White

"Flash Of White" refers to the momentary state that appears in a browser when a user clicks on a link or submits a form, on a web page or web app that doesn't use a frontend library. This particular behavior (or the lack thereof) has become synonymous with a web app feeling slow or unpolished.&#x20;

In 2019, Chrome added a feature called "Paint Holding" which addresses this provided the page loads in less than 500ms. However A) This method is limited to chrome users, and B) The tab bar still shows a loading spinner in place of the favicon while loading, which still doesn't _feel_ on par with SPAs to the user.

The main solution right now is to use a library like htmx&#x20;

<details>

<summary>Example</summary>

<div data-full-width="true"><figure><img src="../../../.gitbook/assets/CleanShot 2025-05-20 at 11.15.45.gif" alt=""><figcaption></figcaption></figure></div>



</details>
