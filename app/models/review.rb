class Review < ApplicationRecord
  belongs_to :user
  belongs_to :book
  enum status: {
    to_read: 0,
    reading: 1,
    read: 2
  }
end
