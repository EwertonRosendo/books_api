module SessionsHelper
  def sign_in
    cookies[:user_id] = {
      value: @user.id,
      expires: 1.year.from_now
    }
  end

  def sign_out
    cookies.delete(:user_id)
  end
end
