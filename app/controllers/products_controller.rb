class ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    Product.create(product_params)
  end

  def show
    @product = Product.find params[:id]
    @buyers = @product.buyers
  end

  private
    def product_params
      params.require(:product).permit(:name, :description, :sold_out, :winner)
    end
end
