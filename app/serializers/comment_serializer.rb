class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :user, serializer: CommentUserSerializer
  has_one :component, serializer: CommentComponentSerializer
end
