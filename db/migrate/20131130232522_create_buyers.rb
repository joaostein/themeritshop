class CreateBuyers < ActiveRecord::Migration
  def change
    create_table :buyers do |t|
      t.string :name
      t.string :email
      t.string :instagram
      t.string :url
      t.belongs_to :product

      t.timestamps
    end
  end
end
