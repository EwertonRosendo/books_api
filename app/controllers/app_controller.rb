class AppController < ApplicationController
  
  def index
    title = params[:title] ? params[:title] : "rails"
    searchGoogle = SearchGoogleApi.new(title)
    list_books = searchGoogle.searchBookOnGoogle(params[:title])

    respond_to do |format|
      format.html
      format.json{ render json: list_books }
    end
  end
end
