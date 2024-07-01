module SessionsHelper
  def sign_in
    cookies[:user_id] = {
       :value => @user.id,
       :expires => 1.year.from_now,
    }
  end

  def current_user
    @current_user ||= User.find_by(id: cookies[:user_id])
  end

  def block_access
    if current_user.present?
      redirect_to users_path
    end
  end

  def logged_in?
    !current_user.nil?
  end

  def sign_out
    cookies.delete(:user_id)
  end
end
