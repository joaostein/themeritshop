class BuyersController < ApplicationController
  def create
    product = Product.find params[:product_id]
    buyer = Buyer.new(buyer_params)
    product.buyers << buyer
    product.save

    flash[:notice] = 'Order saved'
    redirect_to products_path()
  end

  private
    def buyer_params
      params.require(:buyer).permit(:name, :email, :instagram, :url, :product_id)
    end
end