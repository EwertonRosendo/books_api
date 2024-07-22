require "rails_helper"

RSpec.describe "Sessions", type: :request do
  describe "request" do
    it "should return success when request an user try to sign in" do
      post "/sign_in", params: { session: { email: "luisa@gmail.com", password: "0123456" } }
      expect(response).to have_http_status(:success)
    end

    it "should return unauthorized when request sign in with wrong credentials" do
      post "/sign_in", params: { session: { email: "luisa@gmail.com", password: "6543210" } }
      expect(response).to have_http_status(401)
    end
  end
end
