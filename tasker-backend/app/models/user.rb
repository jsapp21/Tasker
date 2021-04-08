class User < ApplicationRecord
    has_many :notes
    validates :name, uniqueness: { case_sensitive: false }
    validates :name, uniqueness: true
    validates :name, presence: true
end
