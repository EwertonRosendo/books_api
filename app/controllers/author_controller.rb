require "json"
class AuthorController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        return render json: Author.all
    end

    def show
        author = Author.find_by(:id => params[:id])
        return render json: {:name => author.name} 
    end
end
