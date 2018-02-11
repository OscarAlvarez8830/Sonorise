class Playlist < ApplicationRecord
  validates :title, presence: true
  belongs_to :user

  has_attached_file :image,
    styles: { medium: "200x200>", thumb: "50x50>" },
    default_url: 'sway.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
