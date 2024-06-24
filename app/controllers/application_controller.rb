# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  #protect_from_forgery with: :exception
  include SessionsHelper

  def correct_user?
    @user = User.find_by(id: params[:id])
    unless current_user == @user
      redirect_to users_path
    end
  end

  def authorize
    unless logged_in?
      redirect_to root_url
    end
  end
end
