class ApplicationController < ActionController::Base
  include SessionsHelper
  before_action :logged?

  def logged?
    @logged = User.find_by(id: cookies[:user_id])
  end
end
