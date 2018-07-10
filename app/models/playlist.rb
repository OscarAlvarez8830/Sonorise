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
  belongs_to :user, optional: true
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks
  has_one_attached :image

  before_save :set_default_image!

  private

  def set_default_image!
    if self.image.attachment.nil?
      self.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'default-image.jpg')
    end
  end
end
