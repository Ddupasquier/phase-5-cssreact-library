class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone, :password, :is_contributor, :img
  has_many :components, serializer: UserBuiltSerializer
  has_many :user_favorites
end
