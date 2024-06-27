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
