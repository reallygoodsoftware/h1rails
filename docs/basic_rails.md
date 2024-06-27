## Adding a Screen

**To add a new screen to your application...**

Add a new line to `config/routes.rb`

```ruby
get "/home" => "site#home", as: "home"
```
Create a new view file with the html content you want to show when a visitor visits this route. For example, for the above route, we'd create a file called `/app/views/site/home.html.erb`. Note that it must end with .erb. You can now add whatever html you like into this file, and it will be rendered when a user visits `/home`.
