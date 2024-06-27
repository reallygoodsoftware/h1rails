# Active Admin

---
<br/>

### **Tell Active Admin to load a new stylesheet**


```ruby
# /config/initializers/active_admin.rb
config.register_stylesheet '/stylesheets/styles.css'
  
```

### **Impersonation**

```ruby
ActiveAdmin.register User do
  member_action :impersonate, method: :get do
    user = User.find(params[:id])
    if user
      # Record the sign in for audit purposes
      # AuditEvent.new(name:"impersonated",admin_user_id:current_admin_user.id,metadata:{user_id:user.id})
      sign_in(user, scope: :user)
    end
    redirect_to root_path
  end

  index do 
    column :sign_in_as do |user|
      link_to "Sign in as", impersonate_admin_user_path(user), method: :get
    end
  end
end
```

### **Use an icon in the menu**

```ruby
menu label: -> { inline_svg_tag('heroicons/academic-cap.svg',class:"w-4 h-4") + 'Message Templates' }
```


### **Default Active Admin Initializer**

These are the current out-of-the-box settings we use for Active Admin.

```ruby
ActiveAdmin.setup do |config|
  
  # config.site_title_image = "logo.png"
  # config.favicon = 'favicon.ico'
  # config.breadcrumb = false
  # config.csv_options = { col_sep: ';' }
  # config.head = ''.html_safe
  # config.footer = 'my custom footer text'

  config.authentication_method = :authenticate_admin_user!
  config.current_user_method = :current_admin_user
  config.logout_link_path = :destroy_admin_user_session_path
  config.comments = false
  config.batch_actions = true
  config.filter_attributes = [:encrypted_password, :password, :password_confirmation]
  config.localize_format = :long
  config.include_default_association_filters = false

  config.site_title = "Tonic Rails"
  config.root_to = 'users#index'

  config.register_stylesheet '/stylesheets/styles.css'
  config.register_stylesheet '/vendor/statictailwind/1.0.2.css'

  config.namespace :admin do |admin|
    admin.download_links = false
  end

end

module AdminPageLayoutOverride
  def build_page(*args)
    within super do
      render "active_admin/common/top_bar"
    end
  end
end

ActiveAdmin::Views::Pages::Base.send :prepend, AdminPageLayoutOverride
```