function applyOptimisticNavigationToChildrenOf(element, options={}) {
  const links          = element.querySelectorAll("a");
  const activeClass    = options.activeClass || "active";
  links.forEach(function(linkElement) {
    linkElement.addEventListener("click", function(event) {
      links.forEach(function(linkItem) {
        linkItem.classList.remove(activeClass);
      });
      linkElement.classList.add(activeClass);
    });
  });
}

Dropzone.autoDiscover = false;

function reinitializeJs() { 
  // add event listener 
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
  Dropzone.discover();
}

document.addEventListener("DOMContentLoaded", function(event){
  reinitializeJs();
});

// add an event listener for the htmx afterRequest event
document.addEventListener("htmx:afterSettle", function(event) {
  reinitializeJs();
});
