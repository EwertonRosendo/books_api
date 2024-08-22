class Review < ApplicationRecord
  belongs_to :user
  belongs_to :book
  validates :rating, presence: true
  validates :status, presence: true
  validates :book_opinion, presence: true
  enum status: {
    to_read: 0,
    reading: 1,
    read: 2
  }
end
