---
icon: circle-small
---

# Active Admin 4 Notes

**Context:** We've been using Active Admin for forever (over 10 years) because it's just so robust and can do most things you need, and it has remained maintained for all that time. The two biggest drawbacks were that A) The UI was very dated, and B) It wasn't very modifiable at the UI level. But they've been working a v4 which addresses both of these things. The downside is that this new version uses a build step, which had a few non-obvious gotchas. We have 10+ rails repos running Active Admin so this blog post should document the upgrade process for them when we need to.=

<sub>**Note**</sub><sub>: The official upgrading guide is</sub> [<sub>here</sub>](https://github.com/activeadmin/activeadmin/blob/tailwind-v4-css-configuration/UPGRADING.md#fromHistory)<sub>.</sub>



### How it _**should**_ work:

1. Bump the gem version
2. Update the initializer to remove old methods
3. Pull in the new asset files and view files
4. Generate the CSS by running a CSS build command



Steps 1 to 3 were super straightforward, step 4 was a pain in the ass, because there are several ways to use the tailwindcss cli - through rubygems, using npm, or using `npx ...` . None of these approaches would actually compile all of the necessary classes.&#x20;



## The Basics

Add the gem and run bundle install

```ruby
# Gemfile
gem 'activeadmin', "~> 4.0.0.beta16"
gem 'importmap-rails' # This may already be added
```

Then generate the assets and the views

```
rails generate active_admin:assets
rails generate active_admin:views
```

Remove any lines from the old initializer that are no longer needed

```ruby
# Remove These Lines
config.meta_tags ...
config.register_stylesheet ...
```



## What Worked For Compiling CSS

> TLDR: Make sure we're using **tailwind 3**, not tailwind 4.&#x20;

1. Update the default `active_admin.css` file using the instructions at[#updating-for-compatibility-with-other-libraries](active-admin-4-notes.md#updating-for-compatibility-with-other-libraries "mention")
2. Add a `package.json` to the base of the app with the following content&#x20;

```javascript
{
  "devDependencies": {
    "tailwindcss": "^3.4.13"
  },
  "dependencies": {
    "@activeadmin/activeadmin": "^4.0.0-beta16"
  },
  "scripts": {
    "build:activeadmin": "./node_modules/.bin/tailwindcss -c ./tailwind-active_admin.config.js -i ./app/assets/stylesheets/active_admin.css -o ./public/stylesheets/active_admin.css --minify"
  }
}

```

2. Build the CSS

```
npm install
npm run build:activeadmin 
```

<sub>You'll notice the build command outputs to the</sub> <sub></sub><sub>`/public`</sub> <sub></sub><sub>folder here, not the builds folder which is the default. That's because we prefer to circumvent the asset pipeline, but you can set this to builds if you prefer.</sub>

3. Disable the asset pipeline for CSS

**Replace this line in `_html_head.html.erb` ...**

```erb
<%= stylesheet_link_tag "active_admin" %>
```

**With this...**

<pre class="language-html"><code class="lang-html">&#x3C;!-- Place this in the page *before* importing any other CSS libraries -->
&#x3C;style>
  @layer base, active_admin, components, utilities;
&#x3C;/style>
<strong>&#x3C;link rel="stylesheet" href="/stylesheets/active_admin.css&#x3C;%= cache_buster %>">
</strong></code></pre>



## Updating For Compatibility With Other Libraries

We use Base Styles and Litewind in most of our codebases. Both of these use [CSS layers](https://css-tricks.com/css-cascade-layers/). But, the default `active_admin.css` file doesn't wrap any of the reset or utility classes in a layer (when compiled with Tailwind v3), so they all end up overriding the imported base styles and litewind file (because non-layered CSS always takes precedence of layered CSS).&#x20;

The fix for this ended up being pretty straightforward: We just wrap the normal `active_admin.css` in a layer declaration and compile it as normal.

{% columns %}
{% column %}
### Before

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
{% endcolumn %}

{% column %}
### After

```css
@layer active_admin {
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
}
```
{% endcolumn %}
{% endcolumns %}



## (Re)-Building the CSS

Once we've built active\_admin.css once, we shouldn't need to build it again - we don't need any additional gems like cssbundling-rails, and we don't need to run any `watch` commands while developing. The only time we should need to do this again is if Active Admin releases a new version with new styles and we want to upgrade. This simply uses the tailwind 3 cli to read from the tailwind config file and active\_admin.css, to output a compiled CSS file to `/public/stylesheets`.&#x20;

```bash
npm install
npm run build:activeadmin 
```



