const triggerInit = () => {
  document.dispatchEvent(new CustomEvent('page:init'));
};

// Listen for both events in one place
document.addEventListener("DOMContentLoaded", triggerInit);
document.addEventListener("htmx:afterRequest", triggerInit);