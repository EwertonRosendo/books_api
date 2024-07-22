require "rails_helper"

RSpec.describe "Books", type: :request do
  describe "Request" do
    it "should return success when request Books" do
      get "/Books.json"
      expect(response).to have_http_status(:success)
    end

    it "should return success when request a book by id" do
      @book = Book.first
      get "/Books/#{@book.id}"
      expect(response).to have_http_status(:success)
    end

    it "should return success when request delete book by id" do
      @book = Book.first
      delete "/Books/#{@book.id}"
      expect(response).to have_http_status(:success)
    end

    it "should return success when request try to create a new book" do
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
