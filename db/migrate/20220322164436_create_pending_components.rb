class CreatePendingComponents < ActiveRecord::Migration[7.0]
  def change
    create_table :pending_components do |t|
      t.string :name
      t.string :html
      t.string :css
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
