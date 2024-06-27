class MessageTemplate < ApplicationRecord
  validates_presence_of :identifier, :body
end
