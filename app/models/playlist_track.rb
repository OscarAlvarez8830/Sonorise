# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :bigint(8)        not null, primary key
#  track_id    :integer          not null
#  playlist_id :integer          not null
#

class PlaylistTrack < ApplicationRecord

  belongs_to :playlist
  belongs_to :track

end
