class UserComponentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, serializer: UserComponentContributorSerializer
  has_one :component
end
