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

    def authenticate_user!

      # Clear any session based auth if there's an auth header present
      if request.headers["Authorization"].present?
        session.clear
      end
    
      current_user = warden.authenticate(scope: :user, strategy: :auth_token)

      # If neither authentication method succeeds, force the user to log in
      unless current_user
        redirect_to new_user_session_path, alert: 'Please log in to continue', status: :unauthorized
      end
    end
  end

end
