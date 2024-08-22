# frozen_string_literal: true

class Book < ApplicationRecord
  default_scope { order('created_at DESC') }
  include Rails.application.routes.url_helpers
  belongs_to :author
  has_many :reviews, class_name: "Review", dependent: :destroy

  has_one_attached :cover

  validates :title, presence: true
  validates :author, presence: true
  validates :url_image, presence: true

  def cover_url
    Rails.application.routes.url_helpers.url_for(cover) if cover.attached?
  end
end
