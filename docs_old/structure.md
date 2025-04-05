# Structure 

- `views/layouts/application.html.erb` houses the base layout
- `views/shared/_head` loads the content for every page's `<head>` tag.
- `views/shared/_partial_containers.html.erb` loads the containers for toasts, modals, and the sidebar. It's loaded just after the opening body tag.


## Assets

- We don't use the Rails Asset Pipeline (sprockets, importmaps etc). Instead we place css and javascript files in the `/public` folder.

```
<!-- Include a css file -->
<link rel="stylesheet" href="/stylesheets/styles.css">
```

- `/public/stylesheets` is where we put our own stylesheets. We don't have a lot of custom CSS, so we're currently only using one file - `styles.css` which is the primary stylesheet for the customer screens, and is also loaded in to Active Admin, It contains the base css, including
    - Color variables
    - Some reusable utilities

- `/public/js/custom.js` defines app-wide javascript behaviour, such as tippy.js for tooltips.
- `/public/vendor` is where we put external libraries. The only external library we load by default is Tailwind Lite.

```
<link rel="stylesheet" href="/vendor/tailwind-lite/1.0.2.css">
<link rel="stylesheet" href="/stylesheets/styles.css<%= cache_buster %>">
```
