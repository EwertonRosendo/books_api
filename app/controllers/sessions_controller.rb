class SessionsController < ApplicationController
  skip_before_action :logged?
  def create
    @user = User.find_by(email: params[:session][:email].downcase)
    if @user && @user.authenticate(params[:session][:password])
      sign_in
    else
      render json: { message: "deu ruim" }
    end
  end

  def destroy
    sign_out
    redirect_to root_url
  end
end
