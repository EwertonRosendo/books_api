require "rails_helper"

RSpec.describe "Authors", type: :request do
  describe "request" do
    it "request a list of authors" do
      get "/Authors"
      expect(response).to have_http_status(:success)
    end
    it "request a author by id" do
      author = Author.first
      get "/Author/#{author.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
