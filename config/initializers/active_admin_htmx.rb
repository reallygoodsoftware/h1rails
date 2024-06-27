# Disabling htmx as there remain issues with it. See https://www.tonyennis.com/dev/xtDcbzZrZ-adding-htmx-to-active-admin
# ActiveAdmin.setup do |config|
#   config.register_javascript '/vendor/htmx/1.9.9.js' 
# end

# module ActiveAdmin
#   module Views
#     module Pages
#       class Base
#         alias_method :original_build_page, :build_page
#         def build_page
#           within body(class: body_classes, "hx-boost" => "true") do
#             original_build_page # Ensures that the rest of the page is built as usual
#           end
#         end
#       end
#     end
#   end
# end

# Rails.application.config.to_prepare do
#   ActiveAdmin::ResourceController.class_eval do
#     include Admin::HtmxEnable
#   end
# end