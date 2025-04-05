# Modals

The modal container is loaded in the `shared/_partial_containers` file. It's based on this mini js snippet, which uses the native html dialog element, but augments it with a nicer background overlay and animation. Generally you will want to first load content into it, using htmx, and then to show it.

```
<a href="<%= general_path(modal:true) >" class="shadow bg-white rounded px-3 py-2 text-gray-900">Open Modal</a>
```

