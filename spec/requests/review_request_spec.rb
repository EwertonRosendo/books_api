require "rails_helper"

RSpec.describe "Review", type: :request do
  describe "Return success status from Review#action" do
    book = Book.first
    user = User.first
    it "create a new review" do
      user = User.first
      book = Book.first
      post "/Books/#{user.id}/reviews",
            params:
            {
              user_id: user.id,
              book: book.id,
              status: :read,
              book_opinion: "it's a good book to spend many nights reading",
              rating: 5
            }
      puts response.body
      expect(response).to have_http_status(:success)
    end

    it "get all reviews" do
      get "/reviews.json"
      expect(response).to have_http_status(:success)
    end

    it "get review by id" do
      review = Review.first
      get "/reviews/#{review.id}.json"
      expect(response).to have_http_status(:success)
    end

    it "delete review by id" do
      review = Review.first
      delete "/reviews/#{review.id}.json"
      expect(response).to have_http_status(:success)
    end
  end
end
