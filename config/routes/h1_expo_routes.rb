namespace :api do
  namespace :v1 do
    post '/users/sign_in' => 'users#sign_in'
    get '/users/check_token' => 'users#check_token'
    post '/users/add_device' => 'users#add_device'
    post '/users/forgot_password' => 'users#forgot_password'
    post '/users/logout' => 'users#logout'
  end
end