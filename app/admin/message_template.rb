ActiveAdmin.register MessageTemplate do
  scope :all, default: true

  menu label: -> { inline_svg_tag('heroicons/document-text.svg',class:"w-4 h-4 mr-1") + 'Message Templates' }

  permit_params :identifier, :subject, :body  # Permitting attributes for mass assignment

  index do
    selectable_column
    column :identifier
    column :subject
    column :body
    column :hey do |message_template|
      inline_svg_tag('heroicons/academic-cap.svg', width: 24, height: 24)
    end
    actions
  end

  form do |f|
    f.inputs "Message Template Details" do
      f.input :identifier, :as => :string
      f.input :subject, :as => :string
      f.input :body, as: :text, input_html: { class: 'px-3 py-2 text-sm' }
    end
    f.actions
  end
end
