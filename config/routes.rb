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
    resources :reviews, controller: "users_book"
  end

  # Controller to make comments on reviews
  resources :users do
    resources :comments
  end

  resources :reviews, controller: "users_book" do
    resources :comments
  end

  # Return a list of books from google
  get "/GoogleBooks", to: "google_books#index", as: "googleBooks" # return a react-view about the book seached
  get "/GoogleBooks/:title", to: "google_books#index" # return a react-view about the book seached

  # Controller for Models only return json files
  get "/Authors", to: "author#index" # return a list of authors
  get "/Author/:id", to: "author#show" # seach an author by id and return

  # Controller for Models only return json files
  get "/Books", to: "books#index"
  get "/Books/:id", to: "books#show"
  delete "/Book/:id", to: "books#destroy"
  put "/Book/:id", to: "books#edit"
  post "/Book/create", to: "books#create"
end
