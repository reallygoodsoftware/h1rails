# Making It Slick

We have chosen to write our apps using primarily HTML, instead of using a declarative javascript library like react.
While this approach is conceptually simpler, one of the downsides is that we have to be a little bit more intentional about making the UI feel smooth. This is because many javascript-eco-system libraries bring this behaviour out of the box.


### Make Links & Forms Asynchronous

The default behaviour of a web browser when clicking a link or submitting a form, is to very briefly show a blank page, and show a loading spinner on the tab in the browser. These are small things that make the experience feel more like a web site and less like a web app. 

To avoid this, we use a library that enhances the default behaviour of the browser to fetch content, and submit forms, asynchronously. There a few libraries that do this - the one we use is called [HTMX](https://htmx.org/).

```html
<body hx-boost='true' hx-target='#main-content' hx-select='#main-content'>
  <div id="main-content">
    <a href="/about">About</a>
    <a href="/team">Team</a>
  </div>
</div>
```

In the above example, when any of the links are clicked, the library will fetch the requested web page in the background, pull out just the html content of the `#main-content` div, and place that content into the `#main-content` div on the current page. It will do that without showing any indication that the page is loading. The thing that turns on this behaviour is adding the `hx-boost` attribute to the body of the page.

### Use CSS animations and transitions

This is a pretty broad directive and generally it's best to consult the designer when adding interactivity to elements. Here are some examples of places where you can make the UI feel much nicer with very small tweaks.

#### Animate background color on hover


<div class="flex gap-x-3 pb-5">
  <button class="border-2 border-gray-300 px-3 py-2 font-bold rounded">Button with no hover</button>
  <button class="border-2 border-gray-300 px-3 py-2 font-bold rounded hover:bg-gray-200 transition-all">Button With Hover</button>
</div>


```
<button class="border-2 border-gray-300 px-3 py-2 font-bold rounded">No Hover</button>
<button class="border-2 border-gray-300 px-3 py-2 font-bold rounded hover:bg-gray-200 transition-all">Button With Hover</button>
```


<hr class="my-3"/>

#### Use the `.transition-all` class to animate background colors.

<div class="flex gap-x-3 pb-5">
  <button class="bg-indigo-300 hover:bg-indigo-600 text-white rounded px-4">Without Transition</button>
  <button class="bg-indigo-300 hover:bg-indigo-600 text-white rounded px-4 transition-all duration-500">With Transition</button>
</div>

```
<button class="bg-indigo-300 hover:bg-indigo-600 text-white rounded px-4">Without Transition</button>
<button class="bg-indigo-300 hover:bg-indigo-600 text-white rounded px-4 transition-all">With Transition</button>
```

### Ensure clickable elements respond instantly when clicked

Immediately in this case doesn't mean "show some feedback once the request sends to the backend", it means "show feedback on the frontend even before the response comes back from the server"


#### Add active link styling when a link is clicked

```erb
<div class="group-odin" :load="applyOptimisticNavigationToChildrenOf(this)">
  <a href="/link-one" class="active">Link One</a>
  <a href="/link-two">Link Two</a>
  <a href="/link-two">Link Three</a>
</div>
```

<div class="group-odin space-x-2" :load="applyOptimisticNavigationToChildrenOf(this)">
  <a href="javascript:void(0)" class="active">Link One</a>
  <a href="javascript:void(0)">Link Two</a>
  <a href="javascript:void(0)">Link Three</a>
</div>

Note: This currently uses minijs and vanilla js. This method is fine but at some point I'd like to update it to being a simple Web Component.


#### Show loading text and spinners on buttons and forms

HTMX gives us the primitives to handle this smoothly. Whenever a link is clicked, htmx will add the `.htmx-request` class to the element. This allows us to target elements inside it with CSS. We can use the `.htmx-indicator` class to show hidden elements when the link is clicked, and the `.htmx-collapse` class to hide elements when the link is clicked.

```erb
<a href="/delayed-response" class="no-style inline-flex items-center justify-center bg-alpha px-4 py-1 font-semibold text-white transition-all rounded-full">
  <div class="htmx-collapse">
    Start
  </div>
  <div class="htmx-indicator">
    Loading...
  </div>
  <svg viewBox="0 0 50 50" class="htmx-indicator">
    <path fill="white" d="M43.935,25.146c0-10.355-8.396-18.75-18.75-18.75c-10.355,0-18.75,8.396-18.75,18.75h4.068     c0-8.115,6.567-14.682,14.682-14.682s14.682,6.567,14.682,14.682H43.935z">
      <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"></animateTransform>
    </path>
  </svg>
</a>
```


**A note on form field validation**

In the spirit of giving users immediate feedback, a logical conclusion would be to apply the same approach to form field validation too (show users validation errors before sending the request to the server). Given that there are dozens of field types and hundreds of potential error states, applying the exact same validations on both the server and client is (in my experience) too complex to warrant the benefit. So to avoid confusion, our recommended approach is to do all validation on the server and have the user wait until the response is returned to see what those errors are. 

### Speed

It's really important that the app responds quickly. Some things, like the user's connection speed, are out of our control. But we can usually tune the app to respond in a time that feels almost instant on good connections. As a general rule, **pages should load in 300 miliseconds or less** on a good connection.

**Remove N+1 Queries**

- Set Rails [verbose query logging](https://guides.rubyonrails.org/debugging_rails_applications.html#verbose-query-logs) to `true` - this will now add the exact line of code that called the database, to your logs.

``` ruby
# environments/development.rb
Rails.application.configure do
  config.active_record.verbose_query_logs = true
end
```

- Add the [Bullet](https://github.com/flyerhzm/bullet) gem 

```ruby
# Gemfile
gem 'bullet', group: 'development'
```

```ruby
# environments/development.rb
config.after_initialize do
  Bullet.enable = true
  Bullet.rails_logger = true
  Bullet.alert = true # This can be toggled when doing debugging but is probably best left turned off
end
```

- Use `.includes` when fetching data in the controller, to avoid triggering an n+1 in your view.


**Load slow sections asynchronously**

Sometimes there are things that a page has to do, that take time that and are outside of our control. Htmx helps again here, by letting us load the page and then fetch a frame of data asynchronously after it's loaded.

```ruby
# config/routes.rb
 get "/my-charts" => "charts#widget", :as => :chart_widget
```

```erb
<div hx-get="<%= chart_widget_path %>" hx-trigger="load" hx-target="this">
  Loading...
</div>
```


**Put your database in the same location as your application**

This is something I regularly see people get tripped up on. If a page has to run 30 sql queries to display it, and it takes 30 miliseconds for that query to travel from where the app is hosted, to the database and back, that page is going to get very slow, very quickly. The same location simply means the same data center. If your app is hosted in Amazon's East Virginia data center, make sure your database is hosted there too.
