class Buyer < ActiveRecord::Base
  validates :name, :email, :url, presence: true
  belongs_to :product
end
