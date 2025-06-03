---
icon: circle-small
---

# The Hybrid Approach

Most mobile apps today are written mostly in Swift, Flutter, or React Native. At Really Good Software we've taken a different approach. We use Webviews (the mobile equivalent to iFrames), served as html from a Ruby on Rails application, as the primary mechanism for building mobile app screens.&#x20;

### Drawbacks of a Webview Driven Approach

<table><thead><tr><th width="572.75">Issue</th><th>Solution?</th></tr></thead><tbody><tr><td>Can have nasty bugs based on syncing logged-in-status</td><td>✅ Yes</td></tr><tr><td>Webviews can't do "Mobile Native" UX like stacks and modals</td><td>✅ Yes</td></tr><tr><td>Links and forms in webviews don't have "slide-over" transition effects</td><td>✅ Yes</td></tr><tr><td>Device-level features are harder to access</td><td>Somewhat</td></tr><tr><td>Users with slow connections have a somewhat degraded experience</td><td>❌ No</td></tr></tbody></table>



### Benefits of a Webview Driven Approach

<table><thead><tr><th width="578.8046875">Benefit</th></tr></thead><tbody><tr><td>Faster development speed</td></tr><tr><td>Faster feedback loops during testing (pull to refresh, open in browser)</td></tr><tr><td>Get a web app "for free"</td></tr></tbody></table>



## How Our Approach Works

* We have a component called `<WebViewStack />` which takes an initial url. Usually we have one per each tab in the app.&#x20;
* When a link is clicked, it is intercepted by `onShouldStartLoadWithRequest` and we check a few things.
  * Should we create a whole new Stack Context for the next page?&#x20;
  * Should we execute any native functions?
* Then, an entirely new webview is instantiated, with the next url, and depending on the parameters in the url, appears from the right, as a modal, or as a full screen modal.&#x20;



### A note on Top Navigation (The Header)





