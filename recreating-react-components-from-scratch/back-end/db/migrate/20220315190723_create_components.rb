class CreateComponents < ActiveRecord::Migration[7.0]
  def change
    create_table :components do |t|
      t.string :name
      t.text :html
      t.text :css
      t.integer :user_id

      t.timestamps
    end
  end
end
