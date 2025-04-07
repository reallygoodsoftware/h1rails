class H1rails::Demos::BaseStylesController < ApplicationController
  layout "demos"
 
  def index
    @path = params[:path] || "all"
    @md = File.read(Rails.root.join("app", "views", "h1rails", "demos", "base_styles", "#{@path}.md"))
  
    @content = Utilities.markdown_to_html(@md)
  end

end