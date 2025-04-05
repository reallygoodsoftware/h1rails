# Welcome to Hypertext Rails

Hypertext Rails is a Ruby on Rails Boilerplate that follows [HTML First](https://html-first.com/) principles. 

Hypertext Rails is...

- A set of patterns that make building new Rails applications very fast, and a set of guidelines on how to use these patterns.
- An alternative to the [Hotwire](https://hotwired.dev/) defaults, which follows the same philosophy (HTML over the wire) but uses different, simpler abstractions.

### Additional Libraries
By default, Hypertext Rails uses the following libraries:

- [HTMX](https://htmx.org/) which makes html handle links and forms better. (This replaces the Rails default [Turbo](https://turbo.hotwired.dev/)).
- [Mini](https://mini-js.com/) which makes html handle interactivity better. (This replaces the Rails default [Stimulus](https://stimulus.hotwired.dev/)).
- [Tailwind Lite](https://tailwind-lite.com/) which makes CSS easier to manage.

### Gems

- **User Accounts** 
  - We use [devise](https://github.com/heartcombo/devise) for supporting sign in, sign up, forgot password, and other account related functionality.
  - We've "ejected" the views, which you'll find in `/app/views/users`
  - Our initializer sets `config.sign_out_via` to `:get` and `config.sign_out_all_scopes` to `false`.
  - Devise also powers our header-based token authentication. 
- **Admin** - We use Active Admin. It's one of the older admin gems, but it has incredible documentation, is still actively supported, and can very rarely not do what's needed.
- **Background Jobs** - We use the [delayed](https://github.com/Betterment/delayed) gem. 
- **Storing Files** - We use ActiveStorage, with Digital Ocean spaces as the default adapter. 
- **Versioning** - We use Paper Trail
- **API** - The repo includes the endpoints for an API to complement Tonic Expo - our React Native codebase.
