require 'rails_helper'

RSpec.describe "Googlebooks", type: :request do
  describe "Return success status from Review#action" do
    it "return anything from google books" do
      get "/Googlebooks/ruby.json"
      expect(response).to have_http_status(:success)
    end
  end
end
