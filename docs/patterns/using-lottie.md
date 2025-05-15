---
icon: circle-small
---

# Using Lottie

## Code

```html
<div data-bodymovin-path="assets/lottie/b.json" 
     data-bodymovin-loop="true" 
     data-bodymovin-autoplay="true"> 
</div>

<script src="vendor/bodymovin/5.12.2.js"></script> 

<script>

  function applyLottie(page) {
    elements = page.querySelectorAll('[data-bodymovin-path]')
    elements.forEach(element => {
      // check if element's already initialized
      if (element.dataset.bodymovinInitialized) {
        return
      } else {
        element.dataset.bodymovinInitialized = true
      }
      var animation = bodymovin.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: element.dataset.bodymovinLoop === 'true',
        autoplay: element.dataset.bodymovinAutoplay === 'true',
        path: element.dataset.bodymovinPath
      })
    })  
  }

  applyLottie(document.body)
</script>
```

## Demo

{% embed url="https://codepen.io/tonye145/project/live/ZPRaqO" %}
