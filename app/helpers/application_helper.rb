module ApplicationHelper

  def base_styles_host
    if request.base_url.include?("localhost")
      "http://docs.dietrails.localhost"
    else
      "https://html-first.com"
    end
  end 
end