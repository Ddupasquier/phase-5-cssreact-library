class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :html, :css
  has_many :users, serializer: ComponentUserSerializer
  has_many :comments
end
