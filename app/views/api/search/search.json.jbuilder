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
  artists.concat(@artists).each do |artist|
    json.set! artist.id do
      json.partial! 'api/artists/artist', artist: artist
    end
  end
end

json.trackIds @tracks.map(&:id)
json.artistIds @artists.map(&:id)
