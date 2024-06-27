# Toasts

- The html responsible for toasts lives in `/views/shared/_partial_containers.html.erb` and `/views/shared/_toast.html.erb`.
- There's a small amount of custom css that lives in `public/stylesheets/styles/css` 
- The primary way we send a toast from the backend to the frontend is through Rails` Flash message functionality. 

**Trigger a toast on the currently loaded page from a controller**

```
flash.now[:toasts] = [
  { title: 'Post Created', message: 'Your post has been successfully created.', style: "success" }
]
```

<a href="/toast-demo" class="no-style shadow bg-alpha text-white rounded px-3 py-2">Add new</a>