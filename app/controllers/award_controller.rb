class AwardController < ApplicationController
  def index
    @page = 'award-page'
    render :layout => 'award'
  end
end
