class UsersBook < ApplicationRecord
  belongs_to :user
  belongs_to :book

  has_many :comments

  enum status: {
    to_read: 0,
    reading: 1,
    read: 2
  }
end
