module ApplicationHelper

  def page_title
    @page_title ||= "Tonic Rails"
  end

  def page_description
    "App description"
  end

  def cache_buster 
    if Rails.env.production?
      ""
    else
      "?stamp=#{DateTime.now.to_s}"
    end
  end

  def disable_left_menu 
    @disable_left_menu ||= false
  end

  def use_bare_layout?
    @use_bare_layout ||= false
  end

  def body_background_class 
    @body_background_class ||= "bg-gray-1"
  end

  def current_url_with(params)
    url_for(request.query_parameters.merge(params))
  end

  def current_params_with(params)
    request.query_parameters.merge(params)
  end

  def htmx_body_attributes
    disable = request.headers["Disable-Body-Htmx"]
    return "" if disable == "true"
    return "hx-boost='true' hx-target='#main-content' hx-select='#main-content'".html_safe
  end

end
