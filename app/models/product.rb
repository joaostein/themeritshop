class Product < ActiveRecord::Base
  validates :name, :description, presence: true
  has_many :buyers
end
