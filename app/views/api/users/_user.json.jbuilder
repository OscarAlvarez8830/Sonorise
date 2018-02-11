json.user do
  json.extract! user, :id, :email, :username
  json.avatarMedium asset_path(user.avatar.url(:medium))
  json.avatarThumb asset_path(user.avatar.url(:thumb))
  json.playlistIds user.playlists.pluck(:id)
end

json.playlists do
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! 'api/playlists/playlist.json', playlist: playlist
    end
  end
end
