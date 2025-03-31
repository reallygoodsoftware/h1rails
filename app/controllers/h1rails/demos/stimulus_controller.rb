class H1rails::Demos::StimulusController < ApplicationController
  layout "stimulus"
  def index
  end

  def coffee
  end

  def trigger_toast
    if params[:success]
      flash[:success] = "Success Flash Example"
    else
      flash[:error] = "Failed Flash Example"
    end

    render turbo_stream: [
      turbo_stream.replace("toast_container", partial: "h1rails/demos/stimulus/partials/toast")
    ]
  end

  def tab_content
    @tab = params[:tab]
    render partial: "h1rails/demos/stimulus/partials/tab_contents/tab#{@tab}"
  end

end