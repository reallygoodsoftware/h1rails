ActiveAdmin.register User do
  permit_params :email, :password, :password_confirmation, :first_name, :last_name

  menu label: -> { inline_svg_tag('heroicons/users.svg',class:"w-4 h-4 mr-1") + 'Users' }
  index do
    selectable_column
    id_column
    column :name
    column :email
    actions
  end

  filter :email

  form do |f|
    f.inputs do
      f.input :email
      f.input :first_name, as: :string
      f.input :last_name, as: :select, collection: [['Admin', 'admin'], ['User', 'user']]
      if f.object.new_record?
        f.input :password
        f.input :password_confirmation
      end
    end
    f.actions
  end

  controller do
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

end
