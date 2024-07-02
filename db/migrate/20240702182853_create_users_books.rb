class CreateUsersBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :users_books do |t|
      t.references :user, null: false, foreign_key: true
      t.references :book, null: false, foreign_key: true
      t.text :book_opinion
      t.integer :rating
      t.integer :status

      t.timestamps
    end
  end
end
