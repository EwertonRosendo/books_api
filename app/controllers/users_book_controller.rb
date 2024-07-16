class UsersBookController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user_book, except: %i[create index]
  before_action :params_hash, except: %i[index create show destroy]

  def index
    user = User.find(params[:user_id])
    respond_to do |format|
      format.html
      format.json { render json: UsersBook.where(user_id: user.id) }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: @user_book }
    end
  end

  def create
    respond_to do |format|
      format.html
      format.json { render json: UsersBook.create!(params_hash) }
    end
  end

  def edit
    @user_book.update!(params_hash)
    respond_to do |format|
      format.html
      format.json { render json: @user_book }
    end
  end

  def destroy
    @user_book.destroy
  end

  private

  def user_book_params
    params.require(:users_book).permit(:id, :user_id, :book_id, :book_opinion, :rating, :status)
  end

  def set_user_book
    @user_book = UsersBook.find(params[:id])
  end

  def params_hash
    @params_hash = user_book_params.to_h
    @params_hash[:user] = User.find(params[:user_id])
    @params_hash[:book] = Book.find(params[:book_id])
    @params_hash
  end
end
