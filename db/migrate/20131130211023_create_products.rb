class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.boolean :sold_out
      t.string :winner

      t.timestamps
    end
  end
end
