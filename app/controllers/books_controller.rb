require "json"
require "net/http"

class BooksController < ApplicationController
    protect_from_forgery with: :null_session
    before_action :set_book, only: %i[show destroy edit]

    def index
        
    end

    def index_json
        return render json: Book.all
    end

    def show
        return render json: @book
    end

    def destroy
        @book.destroy
        render json: Book.all
    end

    def edit
        
        #fruit = Fruit.find(params[:id])
        #fruit.update_attributes(fruit_params)
        #render json: fruit
        
        if @book
            @book[:title] = params[:title]
            @book[:description] = params[:description]
            @book[:published_at] = params[:published_at]
            @book[:publisher] = params[:publisher]
            @book[:updated_at] = Time.current
            @book.save
            render json: @book
        end
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

    private

    def book_params
        params.permit(:title, :description, :published_at, :publisher, :author, :id)
    end

    def set_book
        @book = Book.find(params[:id])
    end

end
