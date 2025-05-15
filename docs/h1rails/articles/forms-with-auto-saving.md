---
icon: circle-small
---

# Forms With Auto Saving

In the view, create a form that submits on `change` and `submit` (note the `hx-trigger` attribute).

```ruby
<%= form_with model: @session, 
    url: coach_edit_path(@session), 
    html: { 
      class: 'ui-form', 
      id: 'commitment-form',
      'hx-trigger': 'change, submit',
      'hx-patch': coach_edit_path(@session)
    } do |form| %>
```

The `hx-trigger=”change”` here basically says to htmx - whenever data in the form changes, submit the form - that can be any input inside the form - text inputs, selects etc.

{% hint style="info" %}
In most cases, when the form is submitted we don’t want the page to change at all - the server should not replace any of the html when submitted. The only exception is toasts - we do want the toasts to show.
{% endhint %}

In the controller, we do two things

* Tell htmx not to try to replace any of the page fragments ([hx-reswap](https://htmx.org/reference/) header)
* Render only the toasts.

```ruby
 if request.patch?
    if @session.update(session_params)
      flash.now[:toasts] = [
        { title: 'Form Saved', message: 'Your changes were autosaved.' }
      ]
    else
      flash.now[:toasts] = [
        { title: 'Something went wrong', message: 'Your changes were not saved.' }
      ]
    end
    response.set_header('HX-Reswap', 'none show:no-scroll')
    render partial: "shared/toasts"
  end
```
