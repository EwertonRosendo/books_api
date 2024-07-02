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

  get ":id/books", to: "users_book#index"
  post ":id/books", to: "users_book#create"

  # Return a list of books from google
  get "/GoogleBooks", to: "google_books#index", as: "googleBooks" # return a react-view about the book seached
  get "/GoogleBooks/:title", to: "google_books#index" # return a react-view about the book seached

  # Controller for Models only return json files
  get "/Authors", to: "author#index" # return a list of authors
  get "/Author/:id", to: "author#show" # seach an author by id and return

  # Controller for Models only return json files
  get "/Books", to: "books#index"
  get "/Book/:id", to: "books#show"
  delete "/Book/:id", to: "books#destroy"
  put "/Book/:id", to: "books#edit"
  post "/Book/create", to: "books#create"
end
