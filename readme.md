# Welcome to Tonic Rails

Tonic Rails is our boilerplate for building simple, maintainable Rails applications. It's designed to optimize for 1. Developer Momentum and 2. Contributor Friendliness.

### Additions and Subtractions

- We don't use the Rails Asset Pipeline (sprockets, importmaps etc). Instead we place css and javascript files in the `/public` folder.

```
<!-- Include a css file -->
<link rel="stylesheet" href="/stylesheets/styles.css">
```
- We don't use Turbo. Instead we use HTMX. It's turned on by default. See [How We Use HTMX](/docs?file=htmx.md) and HTMX Cheat Sheet.

```html
<!-- Load content after the page loads (equivalent of a Turbo Frame) -->
<div hx-get="<%= dashboard_chart_path %>" hx-trigger="load"></div>
```

- We don't use Stimulus. Instead we use [Mini.js](https://vm.mini-js.com/) for moderate frontend interactivity.

```html
<!-- Monitor the value of an input and put it into a div -->
<input type="text" :change="firstName=this.value" />
<span :text="`Your first name is: ` + firstName">
```
- We use [Tailwind Lite](https://tailwind-lite.com/) which lets use utility styling classes to our html.

```
<div class="p-10 flex justify-center">
  Content Here
</div>
```

---
<br/>

### Other Stuff

- **User Accounts** 
  - We use [devise](https://github.com/heartcombo/devise) for supporting sign in, sign up, forgot password, and other account related functionality.
  - We've "ejected" the views, which you'll find in `/app/views/users`
  - Our initializer sets `config.sign_out_via` to `:get` and `config.sign_out_all_scopes` to `false`.
  - Devise also powers our header-based token authentication. 
- **Admin** - We use Active Admin. It's one of the older admin gems, but it has incredible documentation, is still actively supported, and can very rarely not do what's needed.
- **Background Jobs** - We use the delayed gem. See also #[[How We Do Delayed Jobs]] and #[[Scheduling using Delayed Jobs]]
- **Storing Files** - We use ActiveStorage, with Digital Ocean spaces as the default adapter. 
- **Versioning** - We use Paper Trail
- **API** - The repo includes the endpoints for an API to complement Tonic Expo - our React Native codebase.
