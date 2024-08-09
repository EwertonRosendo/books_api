class AddCoverUrlToReviews < ActiveRecord::Migration[7.1]
  def change
    add_column :reviews, :cover_url, :string
  end
end
