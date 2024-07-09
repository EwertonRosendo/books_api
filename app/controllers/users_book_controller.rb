class UsersBookController < ApplicationController
  skip_before_action :logged?
  skip_before_action :verify_authenticity_token
  before_action :set_user_book, except: %i[create index new]
  before_action :params_hash, except: %i[index create show destroy new]

  def index
    respond_to do |format|
      format.html
      format.json { render json: UsersBook.all.to_json(include: [:book, :user]) }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: UsersBook.find(params[:id]).to_json(include: [:book, :user]) }
    end
  end

  def new
    respond_to do |format|
      format.html
    end
  end

  def create
    respond_to do |format|
      format.html
      format.json { render json: UsersBook.create!(params_hash) }
    end
  end

  def update
    @user_book.update!(params_hash)
    respond_to do |format|
      format.html
      format.json { render json: @user_book }
    end
  end

  def destroy
    @user_book.destroy
    render json: { message: "review deleted" }
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
    @params_hash[:user] = User.find(cookies[:user_id])
    @params_hash[:book] = Book.find(params[:book][:id])
    @params_hash
  end
end
