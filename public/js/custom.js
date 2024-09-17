Dropzone.autoDiscover = false;

function reinitializeJs() { 
  Dropzone.discover();
}

document.addEventListener("DOMContentLoaded", function(event){
  reinitializeJs();
});

// add an event listener for the htmx afterRequest event
document.addEventListener("htmx:afterSettle", function(event) {
  reinitializeJs();
});
