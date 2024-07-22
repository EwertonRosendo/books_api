require 'rails_helper'

RSpec.describe Review, type: :model do
  context "Model Test" do
    user = User.first
    book = Book.first
    Review.destroy_all
    review = {
      user_id: user.id,
      book_id: book.id,
      status: :read,
      book_opinion: "it's a good book to spend many nights reading",
      rating: 5
    }
    review = Review.create!(review)
    it "create a new review" do
      expect(Review.first).to eq(review)
    end

    it "verify number of reviews" do
      expect(Review.count).to eq 1
    end

    it "verify review attributes" do
      expect(Review.new).to respond_to(:rating, :status, :book_opinion)
    end

    it "verify rating = 5" do
      expect(Review.first.rating).to eq(review.rating)
    end

    it "verify status = read" do
      expect(Review.first.status).to eq(review.status)
    end

    it "verify status = read" do
      expect(Review.first.book_opinion).to eq(review.book_opinion)
    end

    it "verify if can delete a review" do
      Review.delete_all
      expect(Review.count).to eq(0)
    end
  end
end
