class UserComponent < ApplicationRecord
  belongs_to :user
  belongs_to :component
end