class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_comment, only: :destroy

  def index
    render json: Comment.where(review_id: params[:review_id]).to_json(include: [:user])
  end

  def create
    Comment.create(hash_params)
    render json: Comment.where(review_id: params[:review_id])
  end

  def destroy
    if @comment.user.id.to_i == cookies[:user_id].to_i || Review.find(params[:review_id]).user.id.to_i == cookies[:user_id].to_i
      @comment.destroy
      render json: { message: "comment deleted" }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :user_id, :review_id, :content, :likes)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def hash_params
    params_hash = comment_params.to_h
    params_hash[:user] = User.find(cookies[:user_id])
    params_hash
  end
end
