require "json"
class BooksController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        books = Book.all

        return render json: books
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
        #return render json: book
        render json: Book.create(book)
            
        
    end

end
