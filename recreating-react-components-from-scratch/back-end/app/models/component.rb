class Component < ApplicationRecord
    has_many :comments
    has_many :user_favorites
    belongs_to :user
end
