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

  resources :users do
    resources :reviews, controller: "users_book"
  end

  # Return a list of books from google
  resources :GoogleBooks, only: %i[index], controller: "google_books"

  # Controller for Models only return json files
  resources :authors, only: %i[index show]

  # Controller for Models only return json files
  resources :Books, controller: "books"
end
