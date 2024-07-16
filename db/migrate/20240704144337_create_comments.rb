class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :review_id
      t.text :content
      t.integer :likes

      t.timestamps
    end
  end
end
