---
icon: g
---

# Google Sign in with Expo

**TLDR**

* The recommended package for signing in with Google (per [these docs](https://docs.expo.dev/guides/google-authentication/)) doesn't work with the Expo Go App, which slows testing speed.&#x20;
* Instead, we should use [Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/) - it technically recommends the provider-specific packages, but does what we need.&#x20;
