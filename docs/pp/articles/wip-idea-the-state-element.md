---
icon: circle-small
---

# \[WIP] Idea: The State Element

{% hint style="info" %}
These are assorted notes and are very early stage - leaving them here so I don't lose track of them&#x20;
{% endhint %}

**Core Idea One**: HTML's simplicity is it's greatest asset. Simple concepts and ideas are limited in their power, but HTML is barely scratching the surface in terms of the power it _**can**_ grant.&#x20;

**Core Idea Two**: We regularly need to apply minor state changes to frontend elements, but we also need to be able to scope that state to a particular set of dom elements.

### Simple Usage

```html
<state activeTab="intro">
  <button on-click="{{activeTab='steps'}}">Steps</button>
  <button on-click="{{activeTab='intro'}}">Intro</button>
  <div class="{{activeTab == 'intro' ? 'show' : 'hide'}}">
    Intro
  </div>
  <div class="{{activeTab == 'steps' ? 'show' : 'hide'}}">
    Steps
  </div>
</state>
```



## Extend For More Complex Components

```html
<!-- Browser natively understands these -->
<state component="countdown" count="100">
  <button on-click="me.start()">Start</button>
  <span>{{count}}</span>
</state>

<template for="item in items">
  <div>{{item.name}}</div>
</template>
```



```javascript
class Countdown extends Component {
  start() {
    this.timer = setInterval(() => {
      if (this.state.count > 0) {
        this.state.count--; // Browser automatically updates DOM
      }
    }, 1000);
  }
}
```

&#x20;

