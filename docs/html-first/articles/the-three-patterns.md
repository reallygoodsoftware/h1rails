---
description: Managing State in HTML First Apps.
---

# The Three Patterns

A common response when suggesting building web apps without Big JS™️ is that users expect rich, interactive interfaces that don't need to wait on a network request. This is a fair criticism. There isn't nearly as much material online explaining how to do what you can in React, with plain html.&#x20;

### All you need

These three additions to your page are all you need to build rich web applications without an SPA framework.

```html
<head> 
  <!-- For Database Backed State -->
  <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.6/dist/htmx.min.js"></script>
  <!-- For Shallow Frontend State -->
  <script src="https://cdn.mini-js.com/1.0.20.js"></script>
  <!-- For Complex Frontend State -->
  <script type="module">
    import { html, render, useState, useEffect } from 'https://esm.sh/htm/preact/standalone';
  </script>
</head>
```



## The Three Patterns



### 1. Database + HTML over the wire

This is the first port of call for anything that should be persisted, even in a draft state. The steps are

* Hit the server with a link or a form, and create or update a record
* Respond with the updated html

If you can do this in less than 200 miliseconds, your UI will feel as fast as&#x20;

```ruby
```



### 2. Shallow Frontend State

There are multiple options for this



### 3. Deep Frontend State

