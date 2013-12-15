class Buyer < ActiveRecord::Base
  validates :name, :email, :instagram, :url, presence: true
  belongs_to :product
end
