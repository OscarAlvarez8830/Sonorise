json.extract! track, :id, :title
json.audio track.audio.url
json.artistId track.artist.id
json.albumArt asset_path('sway.jpg')
