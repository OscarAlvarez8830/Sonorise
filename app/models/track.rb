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
  has_one_attached :audio
end
