# frozen_string_literal: true

Rails.application.routes.draw do

  root 'sessions#new'

  #resources :users
  get "/users/new", to: "users#new"
  post "/users/new", to: "users#new"
  get "/users/change/page", to: "users#change"
  post "/users/create", to: "users#create"

  get "sign_in" => "sessions#new"
  post "sign_in" => "sessions#create"
  delete "sign_out" => "sessions#destroy"

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"

  # Return a list of books from google api
  get '/app', to: 'app#index' # return a react-view about the book seached

  # Controller for Models only return json files
  get '/Author', to: 'author#index' # return a list of authors
  get '/Author/:id', to: 'author#show' # seach an author by id and return

  # Controller for Models only return json files
  get '/Books', to: 'books#index'
  get '/Book/:id', to: 'books#show'
  delete '/Book/:id', to: 'books#destroy'
  put '/Book/:id', to: 'books#edit'
  post '/Books', to: 'books#create'
end
