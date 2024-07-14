class UsersController < ApplicationController
  skip_before_action :logged?

  def index
    render json: User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    User.create!(user_params)
    render json: { message: "tried to create an user" }
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
