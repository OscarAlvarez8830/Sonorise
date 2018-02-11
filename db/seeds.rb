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
