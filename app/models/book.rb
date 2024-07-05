# frozen_string_literal: true

class Book < ApplicationRecord
  belongs_to :author

  has_many :reviews, class_name: "UsersBook"

  validates :title, presence: true
  validates :author, presence: true
end
