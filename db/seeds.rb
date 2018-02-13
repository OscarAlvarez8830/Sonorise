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

Artist.destroy_all
artist1 = Artist.create!(
  name: 'Oscar'
)

artist2 = Artist.create!(
  name: 'Kathleen'
)

Track.destroy_all
track1 = Track.create!(
  title: 'First Track',
  artist_id: artist1.id
)

track2 = Track.create!(
  title: 'Second Track',
  artist_id: artist1.id
)

track3 = Track.create!(
  title: 'Third Track',
  artist_id: artist1.id
)

track4 = Track.create!(
  title: 'Fourth Track',
  artist_id: artist1.id
)

track5 = Track.create!(
  title: 'Fifth Track',
  artist_id: artist2.id
)

track6 = Track.create!(
  title: 'Sixth Track',
  artist_id: artist2.id
)

PlaylistTrack.destroy_all
playlist_track1 = PlaylistTrack.create!(
  track_id: track1.id,
  playlist_id: playlist1.id
)

playlist_track2 = PlaylistTrack.create!(
  track_id: track2.id,
  playlist_id: playlist1.id
)

playlist_track3 = PlaylistTrack.create!(
  track_id: track3.id,
  playlist_id: playlist1.id
)

playlist_track4 = PlaylistTrack.create!(
  track_id: track4.id,
  playlist_id: playlist1.id
)

playlist_track5 = PlaylistTrack.create!(
  track_id: track5.id,
  playlist_id: playlist1.id
)

playlist_track6 = PlaylistTrack.create!(
  track_id: track6.id,
  playlist_id: playlist1.id
)

playlist_track7 = PlaylistTrack.create!(
  track_id: track2.id,
  playlist_id: playlist2.id
)

playlist_track8 = PlaylistTrack.create!(
  track_id: track6.id,
  playlist_id: playlist2.id
)
