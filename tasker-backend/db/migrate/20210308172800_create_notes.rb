class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :content
      t.integer :user_id
      t.string :due_date
      t.string :priority

      t.timestamps
    end
  end
end
