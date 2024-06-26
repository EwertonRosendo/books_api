class AppController < ApplicationController
  
  def index
    searchGoogle = SearchGoogleApi.new(params[:title])
    list_books = searchGoogle.searchBookOnGoogle

    respond_to do |format|
      format.html
      format.json{ render json: list_books }
    end
  end
end
