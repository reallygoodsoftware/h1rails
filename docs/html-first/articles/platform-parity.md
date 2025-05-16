---
icon: ranking-star
---

# "Platform Parity"

Historically, we've had to rely on external libraries, preprocessing, and transpilation to achieve many of the patterns that are common in web software. Over time, the web platform's capabilities have grown, often but not always, eliminating the need for external solutions.

For example, in the early days of the web, there was no way to create rounded border radii or box shadows natively—until CSS3 introduced these features in the spec.&#x20;

When a native implementation reaches a point where it's at least as good as using an external library, we say that pattern has achieved "Platform Parity." This represents the moment when developers can confidently use the built-in solution without sacrificing on any of the following.

## Platform Parity is subjective

I don't believe there is an objective way to measure when a pattern becomes as-good-as-with-libraries. Everyone will have slightly different definitions about what constitutes "good enough". I do think the term is still useful to facilitate discussion and debate.



Some of the things I think should be taken into consideration when evaluating Platform Parity:

* **Maintainability**: Is the vanilla solution as easy to maintain as it's library-driven equivalent.
* **Footgun Safety**: If we want to make changes, or handle scenarios where performance is important, is it possible to do this
* **Accessibility**: Does the vanilla solution offer all of the same accessibility affordances as it's library-driven equivalent.
* **Aesthetics**: Does the vanilla solution look and feel as good as it's library-backed counterpart.
