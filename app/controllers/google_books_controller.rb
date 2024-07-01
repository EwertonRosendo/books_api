# Controller to return the data from google api and render a react view
class GoogleBooksController < ApplicationController
  skip_before_action :logged?
  def index
    search_google = SearchGoogleApi.new(params[:title])
    list_books = search_google.searchBookOnGoogle

    respond_to do |format|
      format.html
      format.json { render json: list_books }
    end
  end
end
