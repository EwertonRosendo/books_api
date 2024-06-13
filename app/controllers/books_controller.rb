require "json"
class BooksController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_book, only: %i[show]

    def index
        return render json: Book.all
    end

    def show
        return render json: @book
    end

    def create
        unless Author.find_by(:name => params[:author])
            Author.create(
                :name => params[:author], 
                :biography => "Author without description.."
                ) 
        end

        author = Author.find_by(:name => params[:author])

        book = {
                :title => params[:title], 
                :description => params[:description], 
                :published_at => params[:published_at], 
                :publisher => params[:publisher], 
                :author => author
            }
        
        render json: Book.create(book)
            
    end

    def book_params
        params.permit(:title, :description, :published_at, :publisher, :author, :id)
    end

    def set_book
        @book = Book.find(params[:id])
    end

end
