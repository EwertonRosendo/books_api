class BooksController < ApplicationController
  before_action :set_book, only: %i[show destroy update]

  def index
    respond_to do |format|
      format.html
      format.json { render json: CoverSerializer.new(Book.all).serializable_hash[:data] }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json do
        book = Book.find(params[:id])
        average_rating = Review.where(book: book).average(:rating)
        render json: {
          book: book.as_json(include: :author),
          cover: CoverSerializer.new(book).serializable_hash[:data][:attributes],
          average_rating: average_rating
        }
      end
    end
  end

  def destroy
    @book.destroy
    render json: { message: "Book deleted successfully" }
  end

  def edit
  end

  def update
    author = Author.where(name: params[:book][:author]).first_or_create!
    if @book.update(book_params.merge(author: author))
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def create
    author_names = params[:book][:author]
    author_name = author_names.is_a?(Array) ? author_names.join(" & ") : author_names || "No author"
    author = Author.where(name: author_name).first_or_create!
    @book = Book.new(book_params.merge(author: author))
    @book.errors.full_messages
    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  private

  def book_params
    params.require(:book).permit(:id, :title, :description, :published_at, :publisher, :url_image, :author, :cover)
  end

  def set_book
    @book = Book.find(params[:id])
  end
end
