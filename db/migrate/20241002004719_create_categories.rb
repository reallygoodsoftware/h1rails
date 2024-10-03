class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.text :title
      t.text :description
      t.integer :user_id
      t.boolean :is_draft

      t.timestamps
    end
  end
end
