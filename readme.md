
# Hypertext Rails

Hypertext Rails is a Ruby on Rails Boilerplate that follows [HTML First](https://html-first.com/) principles. It is...

- A set of patterns that make building new Rails applications very fast, and a set of guidelines on how to use these patterns.
- An alternative to the [Hotwire](https://hotwire.dev/) defaults, which follows the same philosophy (HTML over the wire) but uses different, simpler abstractions.

## How It Works

1. Uses [htmx's](https://htmx.org/) `hx-boost` tag to make forms and links load asynchronously. 
    - Works out of the box. Just use links and forms as normal.
    - One page cheat sheet for edge cases - [link](https://hypergist.io/tony/malign-down)
2. Uses htmx's `hx-indicator` pattern to show loading spinners on buttons.
    - One page cheat sheet - [link](https://hypergist.io/tony/malign-down)
3. Three places to store state
    - In the url - [Gist: Rails link helpers x3](https://mini-js.com/)
    - In the database - [Article: Multi Step Form Flows with Rails](https://tonic-rails.toniclabs.ltd/docs?file=server_for_state.md)
    - In the UI - [Mini JS Cheat Sheet](https://mini-js.com/)
4. CSS
    - Tailwind Lite for layout. 
    - See Hypertext Rails CSS Guidelines
5. Non-standard UI elements - dropdowns etc.
    - [Mini.js Snippets](https://hypergist.io/tony/malign-down)
