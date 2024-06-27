
# Working with Icons

The best format to use for icons is svg, as they load fast and can be scaled up and down without losing quality. In plain html, to load an svg file, we would just use a normal image tag, such as `<img src='my-icon.svg' />`. But unfortunately with this approach it's not possible to modify the icon's color. So we use the `inline_svg_tag` gem which solves this for us.

- Icons are stored in the `/app/assets/icons` directory. This repository comes pre-loaded with both heroicons and tabler icons, which are free to use, look great, and cover almost all use cases.
- You can use tailwind classes to style your icons. Use the width and height classes ("w-4 h-4") to style the size, and the text color classes ("text-blue-400") to change the color.

To render an icon, use the following snippet and swap out the name of the file and the classes as necessary.

```
<%= inline_svg_tag("/heroicons/icon-chevron-right.svg", class: "w-5 text-indigo-500" ) %>
```
