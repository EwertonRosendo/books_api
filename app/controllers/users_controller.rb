class UsersController < ApplicationController
  before_action :correct_user?

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    return unless @user.save

    redirect_to @user, notice: "user created"
  end

  def change
    render template: "/app/"
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
