class Track < ApplicationRecord
  validates :title, presence: true
  belongs_to :artist

  has_attached_file :audio, default_url: 'sway.mp3'
  validates_attachment_content_type :audio, content_type: ['application/mp3', 'application/x-mp3', 'audio/mpeg', ['audio/mpeg'], 'audio/mp3']
end
