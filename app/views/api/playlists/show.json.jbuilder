json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
  json.trackIds @playlist.tracks.pluck(:id)
end

json.playlistIds @playlist.user.playlists.pluck(:id)

json.tracks do
  @playlist.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
