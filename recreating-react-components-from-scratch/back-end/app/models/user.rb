class User < ApplicationRecord
    has_many :comments
    has_many :user_favorites
    has_many :user_components
    has_many :components, through: :user_components
end