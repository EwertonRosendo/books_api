require "rails_helper"

RSpec.describe "Review", type: :request do
  describe "request" do
    book = Book.first
    user = User.first
    it "should return success when request  try to create a new review" do
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

    it "should return success when request all reviews" do
      get "/reviews"
      expect(response).to have_http_status(:success)
    end

    it "should return success when request a review by id" do
      review = Review.first
      get "/reviews/#{review.id}"
      expect(response).to have_http_status(:success)
    end

    it "should return success when request to delete a review by id" do
      review = Review.first
      delete "/reviews/#{review.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
