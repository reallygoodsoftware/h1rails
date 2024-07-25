//= require active_admin/base

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('htmx:afterSwap', function(event) {
    setTimeout(function() {
      var scriptSrcPattern = '/assets/active_admin.debug-';
      var scriptTags = document.querySelectorAll('script[src*="' + scriptSrcPattern + '"]');
      
      scriptTags.forEach(function(scriptTag) {
        console.log('1')
          if (scriptTag && scriptTag.parentNode) {
            console.log('2')
              scriptTag.parentNode.removeChild(scriptTag);
              console.log('Removed:', scriptTag.src); // Optional: for debugging
          }
      });

      const oldScript = document.getElementById('application-js');
      if (oldScript) {
        console.log(oldScript)
          oldScript.parentNode.removeChild(oldScript);
      }

      // Remove existing script tag if needed
      // Create a new script tag
      const script = document.createElement('script');
      script.id = 'application-js';
      script.src = '/assets/active_admin.js?' + new Date().getTime(); // Cache-busting
      document.head.appendChild(script);
    }, 0); 
  });
});

$(document).on('click', '#tabs .has_nested', function (e) {
  e.stopPropagation()
  $(this).toggleClass('open')
})