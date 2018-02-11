json.extract! user, :id, :email, :username
json.avatarMedium asset_path(user.avatar.url(:medium))
json.avatarThumb asset_path(user.avatar.url(:thumb))
