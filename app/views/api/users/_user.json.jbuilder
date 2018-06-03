json.user do
  json.extract! user, :id, :email, :username
  json.avatar url_for(user.avatar)
  json.playlistIds user.playlists.pluck(:id)
end

json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'api/playlists/playlist.json', playlist: playlist
      json.trackIds []
    end
  end
end
