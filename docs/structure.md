# Structure 

- `views/layouts/application.html.erb` houses the base layout
- `views/shared/_head` loads the content for every page's `<head>` tag.
- `views/shared/_partial_containers.html.erb` loads the containers for toasts, modals, and the sidebar. It's loaded just after the opening body tag.
- `/public/stylesheets/styles.css` is the primary stylesheet for the customer screens, and is also loaded in to Active Admin, It contains the base css, including
    - Color variables
    - Some reusable utilities e.g. shimmer
    - Default styling for forms and prose text.
- `/public/js/custom.js` defines app-wide javascript behaviour, such as tippy.js for tooltips.
- `/public/vendor/...` contains any external css or js libraries.
