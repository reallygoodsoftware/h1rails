scope "/demos" do

  get "/demos/stimulus", to: "h1rails/demos/stimulus#index"
  get "/demos/stimulus/coffee", to: "h1rails/demos/stimulus#coffee"
  post "/demos/stimulus/trigger_toast", to: "h1rails/demos/stimulus#trigger_toast"
  get '/demos/stimulus/tab/:tab',
    to: 'h1rails/demos/stimulus#tab_content',
    as: 'stimulus_demo_tab'

  get "/"          => "h1rails/demos#index", as: "demos"
  get "/coffee"  => "h1rails/demos#coffee", as: "demo_coffee"
  get "/tea"  => "h1rails/demos#tea", as: "demo_tea"
  match "/multistep"  => "h1rails/demos#multistep_start", 
    as: "demo_multistep_start", 
    via: [:get,:patch, :post]
  match "/multistep_step2"  => "h1rails/demos#multistep_step2", 
    as: "demo_multistep_step2", 
    via: [:get,:patch, :post]
  match "/has_many_form" => "h1rails/demos#has_many_form", 
    as: "demo_has_many_form", 
    via: [:get,:patch]
  get "/new_category" => "h1rails/demos#new_category", 
    as: "demo_new_category"
  delete "/:category_id" => "h1rails/demos#delete_category",
    as: "demo_delete_category"
  get "/toast"    => "h1rails/demos#toast", 
    as: "demo_toast"
  match "/update/:user_id" => "h1rails/demos#user_form", 
    as: "demo_user_form", 
    via: [:get, :patch]

  get "/stream_chat" => "streaming#stream_chat",
    as: "demo_stream_chat", defaults: { format: :json }

  get "/:partial_name" => "h1rails/demos#render_partial",
    as: "demo_partial"

end
