User.destroy_all
user1 = User.create!(
  email: 'oscar@gmail.com',
  username: 'Oscar',
  password: 'password'
)

guest = User.create!(
  email: 'guest@gmail.com',
  username: 'Guest',
  password: 'password'
)

Playlist.destroy_all
playlist1 = Playlist.create!(
  title: 'First Playlist',
  user_id: guest.id
)

playlist2 = Playlist.create!(
  title: 'Second Playlist',
  user_id: guest.id
)

playlist3 = Playlist.create!(
  title: 'Third Playlist',
  user_id: guest.id
)

playlist4 = Playlist.create!(
  title: 'Fourth Playlist',
  user_id: guest.id
)
playlist5 = Playlist.create!(
  title: 'Fifth Playlist',
  user_id: guest.id
)

playlist6 = Playlist.create!(
  title: 'Sixth Playlist',
  user_id: guest.id
)

playlist7 = Playlist.create!(
  title: 'Seventh Playlist',
  user_id: guest.id
)

playlist8 = Playlist.create!(
  title: 'Eighth Playlist',
  user_id: guest.id
)

playlist9 = Playlist.create!(
  title: 'Ninth Playlist',
  user_id: guest.id
)

playlist10 = Playlist.create!(
  title: 'Tenth Playlist',
  user_id: guest.id
)
