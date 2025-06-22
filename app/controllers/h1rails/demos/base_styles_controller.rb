class H1rails::Demos::BaseStylesController < ApplicationController
  layout "demos"

  before_action :allow_iframe
 
  def index
    get_file
  end

  def show 
    get_file
  end

  def get_file 
    doc = params[:file] || "basestyles"
    url = "https://cdn.base-styles.com/docs/#{doc}.md"
    response = HTTParty.get(url)
    @md = response.body
    @content = Utilities.markdown_to_html(@md)
  end

end