module GenerateSlug
  extend ActiveSupport::Concern

  included do
    before_validation :generate_slug

    def generate_slug
      return if self.slug.present?
      loop do
        string = SecureRandom.alphanumeric(5).downcase
        self.slug = string
        break string unless self.class.where(slug: string).first
      end
    end
  end

end