class BuyersController < ApplicationController
  def create
    product = Product.find params[:product_id]
    product.sold_out = true
    buyer = Buyer.new(buyer_params)
    product.buyers << buyer
    product.save

    flash[:notice] = 'Order saved'
    redirect_to '/shop'
  end

  private
    def buyer_params
      params.require(:buyer).permit(:name, :email, :url, :product_id)
    end
end
