# frozen_string_literal: true

Rails.application.routes.draw do
  root "sessions#new"

  get "/users", to: "users#index"
  get "/sign_up", to: "users#new"
  post "/users/new", to: "users#new"
  post "/users/create", to: "users#create"

  get "sign_in" => "sessions#new"
  post "sign_in" => "sessions#create"
  delete "sign_out" => "sessions#destroy"

  # route to create reviews
  resources :Books, controller: "books" do
    resources :reviews
  end

  # Controller to make comments on reviews
  resources :users do
    resources :comments
  end

  resources :reviews do
    resources :comments
  end

  get "/reviews/user/:id", to: "reviews#reviewsByUser"

  # Return a list of books from google
  get "/Googlebooks", to: "google_books#index", as: "googleBooks" # return a react-view about the book seached
  get "/Googlebooks/:title", to: "google_books#index" # return a react-view about the book seached

  # Controller for Models only return json files
  get "/Authors", to: "author#index" # return a list of authors
  get "/Author/:id", to: "author#show" # seach an author by id and return
end
