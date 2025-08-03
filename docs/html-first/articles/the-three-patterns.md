---
description: Managing State in HTML First Apps.
---

# The Three Patterns

There's a common misconception that you can't build slick, polished apps without Big JS - that if you want to build rich interactive experiences, you must use a javascript meta framework.&#x20;

This was true for a while, but has become less and less so over the years. These days

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

{% tabs %}
{% tab title="Mini Js" %}
```html
<state>
  <
</state>
```
{% endtab %}

{% tab title="Alpine" %}

{% endtab %}

{% tab title="Hyperscript" %}

{% endtab %}
{% endtabs %}







### 3. Deep Frontend State

