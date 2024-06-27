class ApplicationController < ActionController::Base

  def htmx_support_modal
    if params[:modal].present?
      response.set_header('HX-Push-Url','false')
      response.set_header('HX-Retarget','#main-modal-container')
      response.set_header('HX-Reselect','#modal')
      render :layout => "modal"
    end
  end
  
  def htmx_prevent_page_load
    response.set_header('HX-Reswap', 'none')
    response.set_header('HX-Push-Url', 'false')
  end

  def htmx_prevent_url_update
    response.set_header('HX-Push-Url', 'false')
  end

  def use_bare_layout
    @use_bare_layout = true
  end
  
end