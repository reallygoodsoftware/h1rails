Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: "app#index"

  devise_for :users, controllers: {
    sessions:       'users/sessions',
    registrations:  'users/registrations',
    passwords:      'users/passwords',
  }

  get "/docs"             => "docs#show", :as => "docs"
  get "/toast-demo"       => "docs#toast_demo", :as => "toast_demo"

end
