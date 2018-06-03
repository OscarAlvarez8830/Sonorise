json.extract! track, :id, :title
# json.audio track.audio.url
json.audio url_for(track.audio)
json.artistId track.artist.id
json.albumArt asset_path('sway.jpg')
