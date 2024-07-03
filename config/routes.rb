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

  get ":user_id/reviews", to: "users_book#index" # show all the users' reviews
  get ":id/review", to: "users_book#show" # show a review by its id
  post ":user_id/reviews", to: "users_book#create" # create a new review
  put ":id/review", to: "users_book#edit" # update from a specific userBook
  delete ":id/review", to: "users_book#destroy" # delete a book review by id

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
