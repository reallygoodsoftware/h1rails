class CreateMessageTemplates < ActiveRecord::Migration[7.0]
  def change
    create_table :message_templates do |t|
      t.text :identifier
      t.text :subject
      t.text :body

      t.timestamps
    end
  end
end
