ActiveAdmin.register AdminUser do
  permit_params :email, :password, :password_confirmation, :first_name, :last_name, :avatar
  menu label: -> { inline_svg_tag('heroicons/user-group.svg',class:"w-4 h-4 mr-1") + 'Admin Users' }

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
      f.input :last_name, as: :string
      if f.object.avatar.attached?
        image_tag f.object.avatar.variant(resize: "100x100")
      end
      f.input :avatar, as: :file
      if f.object.new_record?
        f.input :password
        f.input :password_confirmation
      end
    end
    f.actions
  end

end
