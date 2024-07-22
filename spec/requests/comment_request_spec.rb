require "rails_helper"

RSpec.describe "Comments", type: :request do
  describe "request" do
    it "create a comment" do
      post "/sign_in", params: { session: { email: "luisa@gmail.com", password: "0123456" } }
      review = Review.first
      comment = "I didn't like this book"
      post "/reviews/#{review.id}/comments", params: { comment: { content: comment, review_id: review.id, likes: 0 } }
      expect(response).to have_http_status(:success)
    end

    it "show all comments" do
      review = Review.first
      get "/reviews/#{review.id}/comments"
      expect(response).to have_http_status(:success)
    end
    it "delete a comment" do
      post "/sign_in", params: { session: { email: "luisa@gmail.com", password: "0123456" } }
      review = Review.first
      post "/reviews/#{review.id}/comments", params: { comment: { content: "I didn't like this book", review_id: review.id, likes: 0 } }
      comment = Comment.first
      delete "/reviews/#{review.id}/comments/#{comment.id}"
      expect(response).to have_http_status(:success)
    end
  end
end
