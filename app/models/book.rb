# frozen_string_literal: true

class Book < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :author
  validates :author, presence: true
  has_many :reviews, class_name: "Review", dependent: :destroy

  has_one_attached :cover

  validates :title, presence: true
  validates :author, presence: true

  def cover_url
    Rails.application.routes.url_helpers.url_for(cover) if cover.attached?
  end
end
