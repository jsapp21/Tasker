class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :user_id, :due_date, :priority, :complete
  belongs_to :user
end
