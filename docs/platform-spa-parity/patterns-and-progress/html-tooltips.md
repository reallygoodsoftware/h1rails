---
icon: lightbulb-on
---

# HTML Tooltips

## TLDR

* Some recent APIs (the popover element with anchor positioning) have gotten us closer, but we're still not fully there.
* Some planned APIs seem like they will get us all the way there. What [Una Kravets' talk on Hover Cards](https://youtu.be/VTCIStB6y8s?si=Cczep_xM3Lttgtaw) at Google IO 2025.



## Where we're at

<table><thead><tr><th width="272.8515625">Facet</th><th width="395.09765625">Comment</th></tr></thead><tbody><tr><td>Activates on hover</td><td>Not currently possible without JS</td></tr><tr><td>Supports CSS-transform based animate-in and animate-out</td><td>Only animate-out supported</td></tr><tr><td>Tooltip stays open while interacting with</td><td>✅</td></tr><tr><td>Tooltip repositions in response to window resizing</td><td>✅</td></tr></tbody></table>

### Example

This shows a limited example of using anchor positioning which in this case only responds to click, not hover.

{% embed url="https://codepen.io/una/pen/YzgOoLb" %}

## Where we're heading

Skip to 37:52 where Una talks about interesttarget - what she is referring to as "Hover Cards" is what we're referring to as HTML Tooltips.

{% embed url="https://youtu.be/VTCIStB6y8s?si=Cczep_xM3Lttgtaw" %}





