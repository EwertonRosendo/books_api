require "rails_helper"

RSpec.describe "Users", type: :request do
  describe "request" do
    it "returns http success on register" do
      post "/users/create", params: {
        user: {
          name: "luisa2",
          email: "luisa2@gmail.com",
          password: "0123456",
          password_confirmation: "0123456"
        }
      }
      expect(response).to have_http_status(:success)
    end

    it "return http success on login" do
      get "/users"
      expect(response).to have_http_status(:success)
    end

    it "return http success on find first user" do
      first_user_id = User.first.id
      get "/users/#{first_user_id}"
      expect(response).to have_http_status(:success)
    end

    it "return http not found on find user with id=500" do
      get "/users/500"
      expect(response).to have_http_status(:not_found)
    end
  end
end
