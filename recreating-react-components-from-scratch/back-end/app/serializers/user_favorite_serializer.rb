class UserFavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, serializer: UserFavoritesUserInfoSerializer
  has_one :component
end
