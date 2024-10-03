class Category < ApplicationRecord
  belongs_to :user
  scope :not_draft, -> { where(is_draft: false) }
end
