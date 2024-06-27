
### Pre Setup

- Ensure your system has a ruby version manager and ruby 3.1.2.
- Ensure your system has libvips - [instructions](https://www.libvips.org/install.html). 

### Setup

- `bundle install`
- `rails db:create`
- `rails db:migrate`
- `rails db:seed`
- Set the app name `config/application.rb` and `/app/helpers/application_helper.rb`
- Update the favicon.
- Set the default colors in `/public/stylesheets/styles.css`
- Rename `/config/application.sample.yml` to `/config/application.yml`
- Optionally, add your API credentials for Postmark, Digital Ocean, and Sentry 