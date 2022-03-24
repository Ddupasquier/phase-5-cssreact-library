class UserFavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :component_id
  has_one :user, serializer: UserFavoritesUserInfoSerializer
  has_one :component
end
