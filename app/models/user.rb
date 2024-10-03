class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  has_secure_token :auth_token
  attr_accessor :validation_set
  validates_presence_of :first_name, if: proc { |order| order.validation_set == "step1" }
  has_many :categories
  accepts_nested_attributes_for :categories
  def name 
    "#{first_name} #{last_name}"
  end
end