class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :name
      t.string :category
      t.text :description
      t.timestamps
    end
  end
end
