class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  has_secure_token :auth_token
  attr_accessor :validation_set
  
  validates_presence_of :first_name, if: proc { |order| order.validation_set == "step1" }
  validates :email, presence: true, uniqueness: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP, message: 'must be a valid email address' }
  validate :email_validity

  has_many :categories
  accepts_nested_attributes_for :categories
  has_many :user_devices, dependent: :destroy
  has_many :notifications, dependent: :destroy
  
  def name 
    "#{first_name} #{last_name}"
  end

  def email_validity
    return if email =~ URI::MailTo::EMAIL_REGEXP

    errors.add(:email, 'must be a valid email address')
  end

end