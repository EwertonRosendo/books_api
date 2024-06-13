Rails.application.routes.draw do
  #resources :homes
  get "/home", to: "homes#index"
  get "/home/json", to: "homes#show"
  
  get "/books", to: "books#index"
  post "/books", to: "books#create"

  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
