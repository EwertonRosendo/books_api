class BooksController < ApplicationController
  before_action :set_book, only: %i[show destroy update]

  def index
    respond_to do |format|
      format.html
      format.json { render json: Book.all.order(published_at: :desc) }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: Book.find(params[:id]).to_json(include: [:author]) }
    end
  end

  def destroy
    @book.destroy
    render json: { message: "Book deleted successfully" }
  end

  def edit
  end

  def update
    author = Author.where(name: params[:author]).first_or_create!
    if @book.update(book_params.merge(author: author))
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def create
    author_names = params[:author]
    author_name = author_names.is_a?(Array) ? author_names.join(" & ") : author_names || "No author"
    author = Author.where(name: author_name).first_or_create!
    params_hash = book_params.to_h
    params_hash[:author] = author
    @book = Book.new(params_hash)
    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  private

  def book_params
    params.require(:book).permit(:id, :title, :description, :published_at, :publisher, :url_image, :author)
  end

  def set_book
    @book = Book.find(params[:id])
  end
end
