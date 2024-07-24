require "rails_helper"

RSpec.describe "Sessions", type: :request do
  describe "GET /new" do
    it "sign in on app" do
      post "/sign_in", params: { session: { email: "luisa@gmail.com", password: "0123456" } }
      expect(response).to have_http_status(:success)
    end

    it "sign in on app with wrong credentials" do
      post "/sign_in", params: { session: { email: "luisa@gmail.com", password: "6543210" } }
      expect(response).to have_http_status(401)
    end

    it "sing out on app" do
      post "/sign_in", params: { session: { email: "luisa@gmail.com", password: "0123456" } }
      delete "/sign_out"
      expect(response).to have_http_status(201)
    end
  end
end
