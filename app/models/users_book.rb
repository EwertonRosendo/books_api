class UsersBook < ApplicationRecord
  belongs_to :user
  belongs_to :book
  enum status: {
    to_read: 0,
    reading: 1,
    read: 2
  }
  has_noticed_notifications model_name: "Notification"
  has_many :notifications, through: :user, dependent: :destroy
end
