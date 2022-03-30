class User < ApplicationRecord
    has_secure_password
    has_many :comments
    has_many :user_favorites
    has_many :components
    has_many :favorited_components, through: :user_favorites, source: :component 
    
    validates :email, uniqueness: true
    validates :email, :password, presence: true
end
