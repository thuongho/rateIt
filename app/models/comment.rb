class Comment < ActiveRecord::Base
  belongs_to :topic
  validates :topic, presence: true
  has_ancestry
end