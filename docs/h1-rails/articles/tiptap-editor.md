---
icon: circle-small
---

# TipTap Editor

## Usage

We can instantiate a Tiptap editor with the following code. There's a hidden field which holds the output value in markdown, and the Tiptap div references that hidden input. When the page is loaded, we'll scan for any div with `data-tiptap-input` and replace it with the Tiptap component.

```html
<div data-tiptap-input 
     data-tiptap-input-id="task_task_content" 
     class="ui-styled-text">
</div>
<%= form.hidden_field :task_content %>
```

## Full Code

```html

<div class="ui-container max-w-lg mx-auto py-8">
  <h1 class="ui-title --xl mb-6">New Task</h1>

  <%= form_with(model: @task, local: true, class: "ui-form space-y-6") do |form| %>
    <div  data-tiptap-input 
          data-tiptap-input-id="task_task_content" 
          class="ui-styled-text">
    </div>

    <%= form.hidden_field :task_content %>
    <%= form.submit "Create Task", class: "ui-button --solid --motion-forward w-full" %>
  <% end %>
</div> 

<script type="module">
  import { html, render, useState, useEffect } from 'https://esm.sh/htm/preact/standalone';
  import { Editor } from 'https://esm.sh/@tiptap/core';
  import StarterKit from 'https://esm.sh/@tiptap/starter-kit';
  import TurndownService from 'https://esm.sh/turndown';

  const turndownService = new TurndownService();

  const Tiptap = ({ element }) => {
    const [editor, setEditor] = useState(null);
    const [editorElement, setEditorElement] = useState(null);

    const targetInputId = element.getAttribute('data-tiptap-input-id');

    useEffect(() => {
      if (!editorElement) return;

      const editorInstance = new Editor({
        element: editorElement,
        extensions: [StarterKit],
        content: '',
        autofocus: 'end',
        onUpdate: ({ editor }) => {
          const hiddenField = document.getElementById(targetInputId);
          if (hiddenField) {
            const markdown = turndownService.turndown(editor.getHTML());
            hiddenField.value = markdown;
          }
        },
      });

      setEditor(editorInstance);

      return () => {
        editorInstance.destroy();
      };
    }, [editorElement]);

    return html`
      <div ref=${setEditorElement}></div>
    `;
  };

  document.querySelectorAll('[data-tiptap-input]').forEach(input => {
    render(html`<${Tiptap} element=${input} />`, input);
  });

</script>
```
