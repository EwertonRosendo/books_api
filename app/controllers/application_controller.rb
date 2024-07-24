class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def logged?
    @user = User.find_by(id: cookies[:user_id])
    @user
  end
end
