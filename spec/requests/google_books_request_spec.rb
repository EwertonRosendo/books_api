require 'rails_helper'

RSpec.describe "GoogleBooks", type: :request do
  describe "Return success status from Review#action" do
    it "return anything from google books" do
      get "/GoogleBooks/ruby.json"
      expect(response).to have_http_status(:success)
    end
  end
end
