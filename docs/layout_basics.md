# Layout Basics

---
<br/>

### **Include content in the `<head>`, but only on certain pages**

```html
<% content_for :head do %>
  <script src="/vendor/highlight/languages/erb.min.js" ></script>
<% end %>
```

### **Load a page's content without the usual surrounding divs**

```ruby
class MyController < ApplicationController
  before_action :use_bare_layout

end
```

Have a peek at the application layout, application helper, and application controller to see how this works, or look at the Registration controller to see it used.

### **Set a page title**

Just set the `@page_title` variable in your controller.

```ruby
class MyController < ApplicationController

  def profile 
    @page_title = "My Profile"
  end

end
```
