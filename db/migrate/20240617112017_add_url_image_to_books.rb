# frozen_string_literal: true

class AddUrlImageToBooks < ActiveRecord::Migration[7.1]
  def change
    add_column :books, :url_image, :string
  end
end
