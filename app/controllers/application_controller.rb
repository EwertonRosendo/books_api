class ApplicationController < ActionController::Base
  include SessionsHelper

  def correct_user?
    @user = User.find_by(id: params[:id])
    return if current_user == @user

    redirect_to users_path
  end

  def authorize
    return if logged_in?

    redirect_to root_url
  end
end
