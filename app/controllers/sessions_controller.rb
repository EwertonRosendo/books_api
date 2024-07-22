class SessionsController < ApplicationController
  include SessionsHelper
  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    if @user && @user.authenticate(params[:session][:password])
      cookies[:user_id] = @user.id
      render json: @user
    else
      render json: { message: "wrong password or email" }, status: 401
    end
  end

  def destroy
    sign_out
    unless cookies[:user_id]
      render json: { message: "logout done" }, status: 201
    end
  end
end
