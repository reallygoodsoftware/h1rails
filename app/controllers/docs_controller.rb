class DocsController < ApplicationController

  before_action :use_bare_layout, only: [:show]

  def show 
    @filename = params[:file] 
    if params[:file].blank?
      redirect_to docs_path(file: "readme.md") and return
    end
    # Check if the file exists
    full_path = Rails.root.join('docs', "#{params[:file]}")
    if !@filename.end_with?(".md") || !File.exist?(full_path) 
      @filename = nil
    else 
      @filename = "docs/#{params[:file]}"
    end
    htmx_support_modal
  end

  def toast_demo
    flash.now[:toasts] = [
      { title: 'Post Created', message: 'Your post has been successfully created.', style: "success", disappearing: true },
      { title: 'Welcome', message: 'Thank you for your submission.' },
      { title: 'Three', message: 'Three you for your submission.' }
    ]
    htmx_prevent_page_load
  end

end