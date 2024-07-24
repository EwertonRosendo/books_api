class ReviewsController < ApplicationController
  before_action :set_user_book, except: %i[create index new]
  before_action :params_hash, except: %i[index create show destroy new]

  def index
    respond_to do |format|
      format.html
      format.json { render json: Review.all.to_json(include: [:book, :user]) }
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json { render json: Review.find(params[:id]).to_json(include: [:book, :user]) }
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
      format.json { render json: Review.create!(params_hash) }
    end
  end

  def destroy
    @review.destroy
    render json: { message: "review deleted" }
  end

  private

  def user_book_params
    params.require(:review).permit(:id, :user_id, :book_id, :book_opinion, :rating, :status)
  end

  def set_user_book
    @review = Review.find(params[:id])
  end

  def params_hash
    @params_hash = user_book_params.to_h
    @params_hash[:user] = User.find(cookies[:user_id])
    @params_hash[:book] = Book.find(params[:book][:id])
    @params_hash
  end
end
