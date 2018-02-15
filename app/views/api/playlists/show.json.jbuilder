json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
  json.trackIds @playlist.tracks.pluck(:id)
end

json.playlistIds @playlist.user.playlists.pluck(:id)

artists = []

json.tracks do
  @tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
    artists << track.artist
  end
end

json.artists do
  artists.each do |artist|
    json.set! artist.id do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end
