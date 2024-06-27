class AddAuthTokenToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :auth_token, :string
    add_index :users, :auth_token, unique: true
  end
end
