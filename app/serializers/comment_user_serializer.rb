class CommentUserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :is_contributor
end
