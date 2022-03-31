class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :html, :css
  belongs_to :user, serializer: ComponentUserSerializer
  has_many :comments
end
