Rails.application.routes.draw do
  resources :tasks
  resources :users

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login' to, 'users#login'
end
