# frozen_string_literal: true

class Author < ApplicationRecord
  has_many :books

  def self.find_or_create_author(name)
    unless Author.find_by(name:)
      Author.create(
        name:,
        biography: 'Author without description..'
      )
    end

    Author.find_by(name:)
  end
end
