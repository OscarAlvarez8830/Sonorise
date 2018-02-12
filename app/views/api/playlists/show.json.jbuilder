json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
  # json.trackIds playlist.tracks.pluck(:id)
end
