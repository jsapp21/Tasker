class AddCompleteToNotes < ActiveRecord::Migration[6.1]
  def change
    add_column :notes, :complete, :boolean, default: false
  end
end
