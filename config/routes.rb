Rails.application.routes.draw do
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: "app#index"

  get "/search", to: "h1rails/demos#search"

  draw :h1_demo_routes
  draw :h1_expo_routes 

  devise_for :users, controllers: {
    sessions:       'users/sessions',
    registrations:  'users/registrations',
    passwords:      'users/passwords',
  }

end
