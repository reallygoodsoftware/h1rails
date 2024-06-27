# Rails Basics



## Other Useful Snippets

**Avoid verbosity when constructing urls from the current page parameters**

```
<% url = url_for( 
  params.permit(:origin,:destination)
        .merge(departure_date:"2024-01-01"))
%>
<a href="<%= url %>">Link</a>
```