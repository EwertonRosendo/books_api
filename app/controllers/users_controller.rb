class UsersController < ApplicationController
  skip_before_action :logged?
  wrap_parameters :user, include: %i[name email password password_confirmation]

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
    @user = User.new(user_params)
    if @user.save
      redirect_to "http://localhost:3000"
    end
    redirect_to "http://localhost:3000"
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
