# 🏁 Getting Started

{% stepper %}
{% step %}
## Add The CSS File to your app

{% tabs %}
{% tab title="CDN" %}
```html
<link href="https://cdn.base-styles.com/versions/0.0.10.css" rel="stylesheet">
```
{% endtab %}

{% tab title="Vanilla HTML" %}
* Download the most recent version from [**here**](https://github.com/reallygoodsoftware/base-styles/tree/main/versions).
* Load it into your page or app

```
<link href="/base-styles/0.0.1.css" rel="stylesheet">
```
{% endtab %}
{% endtabs %}
{% endstep %}

{% step %}
## Add Your Variables

Create a separate CSS file or use an existing one. Set your font, borders and colors.&#x20;

```css
/* styles.css */
body {
  --ui-shared-font-family: "Plus Jakarta Sans";
  --ui-shared-font-family-headings: "Plus Jakarta Sans";
  --ui-shared-element-border-radius: 7px;
  --ui-button-border-width: 2px;
  --ui-input-border-width: 2px;
    
  /* Colors */
  --ui-shared-color-alpha: #0090ff; /* Your primary color */
  --ui-shared-color-alpha-darkened-20: #0073cc; /* Primary color hover */
  --ui-shared-color-alpha-foreground: #ffffff; 
}
```
{% endstep %}

{% step %}
## Build UI to your heart's content

* See the full list of components you can use at [components](../components/ "mention")
{% endstep %}
{% endstepper %}
