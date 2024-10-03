module H1Rails
  extend ActiveSupport::Concern

  included do
    after_action :htmx_support_modal

    def htmx_support_modal
      if @renders_in_modal 
        response.set_header('HX-Push-Url','false')
        response.set_header('HX-Retarget','#modal-container')
        response.set_header('HX-Reselect','#modal-container')
        response.set_header('HX-Reswap','outerHTML show:no-scroll transition:true')
      end
    end
    
    def renders_in_modal 
      @renders_in_modal = true
    end

    def set_modal_size(size)
      @modal_size = size
    end

    def set_view_transition_style(style)
      @view_transition_style = "ui-view-transition --#{style}"
    end
    
    def htmx_prevent_page_load
      response.set_header('HX-Reswap', 'none show:no-scroll')
      response.set_header('HX-Push-Url', 'false')
    end

    def htmx_prevent_url_update
      response.set_header('HX-Push-Url', 'false')
    end

    def use_bare_layout
      @use_bare_layout = true
    end
  end

end
