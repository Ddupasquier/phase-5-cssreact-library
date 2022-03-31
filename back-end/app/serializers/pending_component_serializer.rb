class PendingComponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :html, :css
  has_one :user
end
