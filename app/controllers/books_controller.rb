class BooksController < ApplicationController
  before_action :set_book, only: %i[show destroy edit]

  def index
    respond_to do |format|
      format.html
      format.json { render json: Book.all.order(published_at: :desc) }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @book }
    end
  end

  def destroy
    @book.destroy
    render json: Book.all
  end

  def edit
    author = Author.where(name: params[:author]).first_or_create!
    params_hash = book_params.to_h
    params_hash[:author] = author
    @book.update!(params_hash)
  end

  def create
    @name = params[:author]
    if params[:author].class != String
      @name = params[:author] ? params[:author].join(" & ") : "No author"
    end
    params_hash = book_params.to_h
    params_hash[:author] = Author.where(name: @name).first_or_create!
    render json: Book.create!(params_hash)
  end

  private

  def book_params
    params.require(:book).permit(:title, :description, :published_at, :publisher, :author, :id, :url_image)
  end

  def set_book
    @book = Book.find(params[:id])
  end
end
