class UsersBookController < ApplicationController
  skip_before_action :logged?
  skip_before_action :verify_authenticity_token

  def index
    user = User.find(params[:id])
    render json: UsersBook.where(user_id: user)
  end

  def create
    user = User.find(params[:user])
    book = Book.find(params[:book])
    params_hash = user_book_params.to_h
    params_hash[:user] = user
    params_hash[:book] = book

    render json: UsersBook.create!(params_hash)
  end

  def user_book_params
    params.permit(:user, :book, :book_opinion, :rating, :status)
  end
end
