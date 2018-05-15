# == Schema Information
#
# Table name: tracks
#
#  id                 :bigint(8)        not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

class Track < ApplicationRecord
  validates :title, presence: true
  belongs_to :artist
  has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks

  # has_attached_file :audio, default_url: 'sway.mp3'
  # validates_attachment_content_type :audio, content_type: [
  #   'application/mp3',
  #   'application/x-mp3',
  #   'audio/mpeg',
  #   ['audio/mpeg'],
  #   'audio/mp3'
  # ]

  has_one_attached :audio
end
