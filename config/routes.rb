# frozen_string_literal: true

Rails.application.routes.draw do
  get '/app', to: 'app#index' # return a react-view about the book seached
  get '/app/json', to: 'app#index_json' # return the data from google books api
  get '/app/json/:title', to: 'app#index_json' # return the data from google books api
  get '/app/Books', to: 'app#books' # return the data from the model Book
  get '/app/Books/:id', to: 'app#books_by_id'

  # Controller for Models only return json files
  get '/Author', to: 'author#index' # return a list of authors
  get '/Author/:id', to: 'author#show' # seach an author by id and return

  # Controller for Models only return json files
  get '/Book', to: 'books#index'
  get '/Book/:id', to: 'books#show'
  delete '/Book/:id', to: 'books#destroy'
  put '/Book/:id', to: 'books#edit'
  post '/Books', to: 'books#create'

  # Defines the root path route ("/")
  # root "posts#index"
end
