# frozen_string_literal: true

class Book < ApplicationRecord
  belongs_to :author

  has_many :reviews, class_name: "Review", dependent: :destroy

  validates :title, presence: true
  validates :author, presence: true
end
