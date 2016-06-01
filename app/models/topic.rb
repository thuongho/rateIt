class Topic < ActiveRecord::Base
  has_many :comments

  def to_s
    name
  end
end