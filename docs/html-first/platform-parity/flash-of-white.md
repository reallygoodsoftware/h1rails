---
icon: circle-small
---

# Flash Of White

"Flash Of White" refers to the momentary state that appears in a browser when a user clicks on a link or submits a form, on a web page or web app that doesn't use a frontend library. This particular behavior (or the lack thereof) has become synonymous with a web app feeling slow or unpolished.&#x20;

In 2025, there is still no robust platform native solution to this issue and workarounds are still required.

<div data-full-width="true"><figure><img src="../../.gitbook/assets/CleanShot 2025-05-20 at 11.15.45.gif" alt=""><figcaption></figcaption></figure></div>

## Progress

* Before 2016, there was an artificial 200ms delay on link clicks on mobile - this wasn't a "flash of white" but caused a similar feeling of jankiness. This was fixed in iOS 9.3, providing the page had `<meta name="viewport" value="width=device-width" />` tag.
* In 2019, Chrome added a feature called "Paint Holding" which addresses this provided the page loads in less than 500ms. However A) This method is limited to chrome users, and B) The tab bar still shows a loading spinner in place of the favicon while loading, which still doesn't _feel_ (subjectively) fully polished to the user.
* There are a set of proposals open, and being taken seriously by the standards authorities, to add features which would address this - led by Alex Petros & Carson Gross - called [Triptych Proposals.](https://alexanderpetros.com/triptych/)





## Transition States
