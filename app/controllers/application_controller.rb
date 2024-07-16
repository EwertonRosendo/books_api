class ApplicationController < ActionController::Base
  include SessionsHelper
  before_action :logged?
  before_action :set_notifications, if: @logged

  def logged?
    @user = User.find_by(id: cookies[:user_id])
    @user
  end

  def set_notifications
    @notifications = Notification.where(recipient: cookies[:user_id]).newest_first.limit(9)
    puts @notifications
    puts "SDFSAFSD"
    @unread = @notifications.unread
    @read = @notifications.read
  end
end
