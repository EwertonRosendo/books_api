require 'rails_helper'

RSpec.describe "GoogleBooks", type: :request do
  describe "request" do
    it "should return success when request a list of books from GoogleBooks" do
      get "/GoogleBooks/ruby.json"
      expect(response).to have_http_status(:success)
    end
  end
end
