class UserComponentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :component
end
