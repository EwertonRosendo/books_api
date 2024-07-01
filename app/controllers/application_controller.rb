class ApplicationController < ActionController::Base
  include SessionsHelper
  before_action :logged?

  def logged?
    User.find(cookies[:user_id]) ? @logged = true : @logged = false
  end
end
