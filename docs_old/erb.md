
ERB stands for "Embedded Ruby". It's a way to embed Ruby code into text documents. In the context of web development, it's commonly used to embed Ruby code into HTML documents to create dynamic web pages.


## Basic ERB Syntax

ERB uses two main sets of delimiters to differentiate between Ruby code and regular text:

1. `<% %>`: Executes the Ruby code inside but doesn't print the result.
2. `<%= %>`: Executes the Ruby code inside and prints the result.

### Examples:

**Without output**:

```erb
  <% variable = "Hello, World!" %>
```

**With output**:

```
<%= variable %>
```

### Common ERB Use Cases

**Looping through Arrays:**

If you have an array of items and you want to display each item:

```erb
<% items = ["apple", "banana", "cherry"] %>
<ul>
  <% items.each do |item| %>
    <li><%= item %></li>
  <% end %>
</ul>
```


**Conditionals:**

Display content based on conditions:

```erb
<% user_logged_in = true %>

<% if user_logged_in %>
  <p>Welcome back, user!</p>
<% else %>
  <p>Please log in.</p>
<% end %>
```