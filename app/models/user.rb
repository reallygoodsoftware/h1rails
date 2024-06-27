class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  validates_presence_of :first_name, :last_name
  has_secure_token :auth_token
  def name 
    "#{first_name} #{last_name}"
  end
end