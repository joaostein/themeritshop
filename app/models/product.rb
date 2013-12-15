class Product < ActiveRecord::Base
  validates :name, :description, presence: true
  mount_uploader :image, PostImageUploader
  has_many :buyers
end
