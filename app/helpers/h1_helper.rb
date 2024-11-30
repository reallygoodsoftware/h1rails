module H1Helper

  def page_title
    @page_title ||= "H1 Rails"
  end

  def page_description
    "The greatest app on the internet"
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
    @body_background_class ||= "bg-gray-100"
  end

  def current_url_with(params)
    url_for(request.query_parameters.merge(params))
  end

  def current_params_with(params)
    request.query_parameters.merge(params)
  end

  def modal_size_class
    if params[:modal_size] && params[:modal_size].is_a?(String)
      "--#{params[:modal_size]}"
    elsif @modal_size
      "--#{@modal_size}"
    else 
      ""
    end
  end

  def modal_visible_class
    if @renders_in_modal || params[:modal].present? || content_for?(:modal_content) 
      '--visible'
    else
      ''
    end
  end

  def renders_in_modal? 
    params[:modal] || @renders_in_modal
  end

  def view_transition_class
    @view_transition_style
  end

  def htmx_body_attributes
    disable = request.headers["Disable-Body-Htmx"]
    return "" if from_h1_expo?
    return "" if disable == "true"
    return "hx-boost='true' hx-target='#main-content' hx-select='#main-content'".html_safe
  end

  def from_h1_expo?
    true if request.headers['X-Source'] == "h1expo"
  end
end