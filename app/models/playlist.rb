# == Schema Information
#
# Table name: playlists
#
#  id                 :bigint(8)        not null, primary key
#  title              :string           default("Untitled"), not null
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Playlist < ApplicationRecord
  validates :title, presence: true
  belongs_to :user
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks

  has_one_attached :image

  # has_attached_file :image,
  #   styles: { medium: "200x200>", thumb: "50x50>" },
  #   default_url: 'sway.jpg'
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
