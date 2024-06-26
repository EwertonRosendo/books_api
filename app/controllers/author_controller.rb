class AuthorController < ApplicationController
  def index
    render json: Author.all
  end

  def show
    author = Author.find(params[:id])
    render json: { name: author.name }
  end
end
