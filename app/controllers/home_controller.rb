class HomeController < ApplicationController
  def index
  end

  def example
    respond_to do |format|
      format.html
      format.turbo_stream
    end
  end

  def terms
  end

  def privacy
  end
end
