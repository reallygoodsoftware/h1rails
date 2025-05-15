---
icon: train-tunnel
---

# Using Pgsync

{% hint style="info" %}
[PG Sync](https://github.com/ankane/pgsync) makes it easy to safely import data from production to development.
{% endhint %}

## **Install**

```ruby
# Gemfile
gem 'pgsync'
```

**In your terminal**

```bash
bundle install
pgsync --init 
```

**Add .pgsync.yml to .gitignore**&#x20;

Never check your `.pgsync.yml` file in to version control, as you may accidentally commit sensitive data. If you're joining a team, ask an existing developer to safely send you their copy.

```gitignore
# .gitignore
.pgsync.yml
```

### Pgsync.yml&#x20;

Here's an example of a .pgsync.yml file

```yaml
# source database URL
from: postgresql://user:pw@1.1.1.1:5432/db_name

# destination database URL
to: postgres://user:pw@localhost:5432/db_name_development

# exclude tables
exclude:
  - ar_internal_metadata
  - schema_migrations
  - admin_users

# protect sensitive information
data_rules:
  email: unique_email
  phone: unique_phone
  last_name: random_letter
  birthday: random_date
  encrypted_*: unique_secret
```

### Syncing Data

To sync data, simply run this in your terminal

```
pgsync --defer-constraints 
```

### Troubleshooting

Sometimes database constraints prevent the data from syncing smoothly. There are several flags you can pass in - defined [here](https://github.com/ankane/pgsync?tab=readme-ov-file#foreign-keys).

