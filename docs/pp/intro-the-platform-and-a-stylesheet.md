---
icon: circle-small
---

# Intro: The Platform And a Stylesheet

> Platform <> SPA Parity refers to the point at which _**The Platform**_ catches up with _**Javascript Frameworks**_, such that the **User Experience** and the **Developer Experience** are at least on par with each other for building straightforward web applications.

**Definitions**

* **"The Platform"**: The range of things that can be performed natively with html, css and javascript.
* **Javascript Frameworks**: In this case we're referring to Reactive Frameworks like Vue and React, and Meta Frameworks like Next.js.
* **SPA (Single Page Application)**: A web application that loads only a single web document, and then updates the body content of that single document via JavaScript APIs.

### Background

The browser was originally created to display **documents**. As the internet grew, the browser became the delivery mechanism for **web** **applications**, which have different user expectations. But the primitives available to developers via the web's languages (html, css, and javascript), were not good enough to build fast, smooth web applications. So, people built Libraries and Frameworks. Libraries and frameworks could provided additional functionality to developers to let them more easily build the kinds of applications users wanted. Sweet!

### **The Web Evolves**

We mentioned that in the early days, the web's primitives were not good enough for building web applications. But with every year that passes, this becomes less true. This is because every year, web browsers - and they languages they can handle, become quietly capable of doing more and more things. &#x20;

This means that the most popular li

## Isn't This Subjective?

Yes. There is no objective way to measure when a vanilla pattern becomes as-good-as-with-libraries. Everyone will have slightly different definitions about what constitutes "good enough". However, the term is still useful as shared language to facilitate discussions.

Some of the things I think matter:

* **Maintainability**: Is the vanilla solution as easy to maintain as it's library-driven equivalent.
* **Footgun Safety**: If we want to make changes, or handle scenarios where performance is important, is it possible to do this.
* **Accessibility**: Does the vanilla solution offer all of the same accessibility affordances as it's library-driven equivalent.
* **Aesthetics**: Does the vanilla solution look and feel as good as it's library-backed counterpart.



For example, it is possible _today_ to implement Modals using the `<dialog>` element. However, on the dx side, it requires a reasonable amount of boilerplate & can't be done with just html attributes.





