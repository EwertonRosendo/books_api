require "rails_helper"

RSpec.describe "Books", type: :request do
  describe "Return success status from Books#action" do
    it "returns http success from Books#index" do
      get "/Books.json"
      expect(response).to have_http_status(:success)
    end

    it "return http success from Books#show" do
      @book = Book.first
      get "/Books/#{@book.id}.json"
      expect(response).to have_http_status(:success)
    end

    it "return http success from Books#show" do
      @book = Book.first
      delete "/Books/#{@book.id}"
      expect(response).to have_http_status(:success)
    end

    it "return http success from Books#create" do
      @book = {
        title: "rails spec",
        description: "very funny",
        published_at: Time.now,
        publisher: "saraiva",
        author: "rails"
      }
      post "/Books", params: { book: @book }
      expect(response).to have_http_status(:success)
    end
  end
end
