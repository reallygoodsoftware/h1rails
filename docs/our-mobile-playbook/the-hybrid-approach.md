---
icon: circle-small
---

# The Hybrid Approach

Most mobile apps today are written mostly in Swift, Flutter, or React Native. At Really Good Software we've taken a different approach. We use Webviews (the mobile equivalent to iFrames), served as html from a Ruby on Rails application, as the primary mechanism for building mobile app screens.&#x20;

## Benefits of a Webview Driven Approach

<table><thead><tr><th width="578.8046875">Benefit</th></tr></thead><tbody><tr><td>Faster development speed</td></tr><tr><td>Faster feedback loops during testing (pull to refresh, open in browser)</td></tr><tr><td>Get a web app "for free"</td></tr><tr><td>Add extensive features without waiting for App Store Release</td></tr><tr><td>Fix bugs quickly without waiting for App Store Release</td></tr></tbody></table>

## Drawbacks of a Webview Driven Approach

<table><thead><tr><th width="572.75">Issue</th><th>Solution?</th></tr></thead><tbody><tr><td>Can have nasty bugs based on syncing logged-in-status</td><td>✅ Yes</td></tr><tr><td>Webviews can't do "Mobile Native" UX like stacks and modals</td><td>✅ Yes</td></tr><tr><td>Links and forms in webviews don't have "slide-over" transition effects</td><td>✅ Yes</td></tr><tr><td>Device-level features are harder to access</td><td>Somewhat</td></tr><tr><td>Users with slow connections have a somewhat degraded experience</td><td>❌ No</td></tr></tbody></table>



## How Our Approach Works

* We have a component called `<WebViewStack />` which takes an initial url. Usually we have one per each tab in the app.&#x20;
* When a link is clicked, it is intercepted by `onShouldStartLoadWithRequest` and we check a few things.
  * Should we create a whole new Stack Context for the next page?&#x20;
  * Should we execute any native functions?
* Then, an entirely new webview is instantiated, with the next url, and depending on the parameters in the url, appears from the right, as a modal, or as a full screen modal.&#x20;



## Gotchas & Weird Stuff

### A note on Top Navigation (The Header)

The "standard" way to do a top header on mobile is to use the one Apple or Android gives us. This means that there is a single Top Bar component that is used on every page, and it's behaviour changes depending on the screen the user is on. But in practical usage, we came across so many edge cases that our recommendation now is to ditch the Native Header, and build the header behaviour into the webviews themselves. This means we lose the transition behaviour where the back button appears on the left side.

Some of the challenges we had:

* Conditionally showing & hiding the header - we can of course pass this from our webview to our header component, but we got into issues of timing (the header either appears too early or too late), and finding a nice UX here was very hard.
* Defining consistent back navigation: When an app screen has a carousel in it  - which we do often - navigating to the next slide doesn't trigger a navigation event in the router. This means the user can get several slides in, and when they hit the back button, it takes them back to outside the carousel, which from their perspective is several steps backward and bad UX. Of course we can wire this up so that the back button on the top bar is aware of the carousel steps, but the code starts to get super complex and difficult to read and update.



