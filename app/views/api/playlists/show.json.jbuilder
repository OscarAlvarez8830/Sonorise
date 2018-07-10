json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

json.playlistIds []

if @playlist.user_id
  json.playlistIds @playlist.user.playlists.ids
end

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
