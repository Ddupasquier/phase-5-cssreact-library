class PendingContributorSerializer < ActiveModel::Serializer
  attributes :id, :is_contributor
  has_one :user
end
