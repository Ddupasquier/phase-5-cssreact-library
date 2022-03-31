class CreatePendingContributors < ActiveRecord::Migration[7.0]
  def change
    create_table :pending_contributors do |t|
      t.boolean :is_contributor
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
