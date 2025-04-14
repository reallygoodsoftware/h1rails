// Listen for messages from the iframe
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'resize' && event.data.height) {
    // Find all iframes and resize the one that sent the message
    const iframes = document.querySelectorAll('iframe');
    for (const iframe of iframes) {
      iframe.style.height = event.data.height + 'px';
      iframe.style.width = '100%';   
    }
  }
}, false);