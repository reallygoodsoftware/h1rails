class Admin::CustomController < ActiveAdmin::BaseController
  include ActiveAdmin::BaseController::Authorization

  def restrict_format_access!
    unless request.format.html? || request.format.to_s == '*/*'
      presenter = active_admin_config.get_page_presenter(:index)
      download_formats = (presenter || {}).fetch(:download_links, active_admin_config.namespace.download_links)

      unless build_download_formats(download_formats).include?(request.format.symbol)
        raise ActiveAdmin::AccessDenied.new(current_active_admin_user, :index)
      end
    end
  end
end