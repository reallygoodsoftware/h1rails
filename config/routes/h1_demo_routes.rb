get "/demos"          => "h1rails/demos#index", 
  as: "demos"

get "/demos/coffee"  => "h1rails/demos#coffee", 
  as: "demo_coffee"

match "/demos/multistep"  => "h1rails/demos#multistep_start", 
  as: "demo_multistep_start", 
  via: [:get,:patch]
match "/demos/multistep_step2"  => "h1rails/demos#multistep_step2", 
  as: "demo_multistep_step2", 
  via: [:get,:patch]

match "/demos/has_many_form" => "h1rails/demos#has_many_form", 
  as: "demo_has_many_form", 
  via: [:get,:patch]

get "/demos/new_category" => "h1rails/demos#new_category", 
  as: "demo_new_category"

delete "/demos/:category_id" => "h1rails/demos#delete_category",
  as: "demo_delete_category"

get "/demos/toast"    => "h1rails/demos#toast", 
  as: "demo_toast"

match "/demos/update/:user_id" => "h1rails/demos#user_form", 
  as: "demo_user_form", 
  via: [:get, :patch]