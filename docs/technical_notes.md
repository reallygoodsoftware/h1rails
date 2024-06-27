# About this codebase

As well as housing html-first.com, this codebase also serves as our default rails starter codebase that we use here at Tonic.

### How we use Rails

We use Rails for the things that  HTML can't do - defining routes, communicating with a database, converting data from one format to other, communicating with APIs, and a few other things. But we intentionally don't use several of the patterns and libraries that Rails includes and recommends, usually where the additional complexity and learning curve isn't worth it. 

Although this is a Rails codebase, it's designed to be as accessible as possible to people with limited Rails experience.

### What's Included

- The gems we find ourselves installing with every new app we build.
- Functionality for identity using Devise.
- HTML-attribute-based libraries for styling (tailwind), and behaviour (htmx, minijs).
- Tonic.css - a collection of utilities for making things look nice by default (forms, common interface patterns external libraries).



# Technical Notes


### **Setup**

- `bundle install`
- `rails db:create`
- `rails db:migrate`
- `rails s`

---

<br/>

#### Tailwind Support

"Eradicate Build Steps" is one of the principles of HTML First, so by default we use dumb-tailwind for our tailwind styling, which has 90% of the most used tailwind classes but doesn't require a compile step. This file is 750kb in size which may affect performance in some cases. If you would prefer to ship less CSS to production, you can use the steps below.

**Install NPM**

- `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
- `nvm install --lts`

**Install Tailwind**

- `npm install -D tailwindcss`

**Refresh the purged CSS**

- `npx tailwindcss -o ./public/stylesheets/tailwind-trimmed.css`