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
track1 = Track.new(title: 'First Track', artist_id: artist1.id)
track1.audio.attach("https://s3.amazonaws.com/sonorise-dev/01+Down.mp3")
track1.save!

# track1 = Track.new(title: 'First Track', artist_id: artist1.id)
# track1.audio.attach(io: open("https://s3.amazonaws.com/sonorise-dev/01+Down.mp3"), filename: '01 Down.mp3')
# track1.save!

# track2 = Track.new(title: 'Second Track', artist_id: artist1.id)
# track2.audio.attach(io: "https://s3.amazonaws.com/sonorise-dev/02+Talk+to+Me.mp3", filename: '02 Talk to Me.mp3')
# track2.save!
#
# track3 = Track.new(title: 'Third Track', artist_id: artist1.id)
# track3.audio.attach(io: "https://s3.amazonaws.com/sonorise-dev/03+Wild.mp3", filename: '03 Wild.mp3')
# track3.save!
#
# track4 = Track.new(title: 'Fourth Track', artist_id: artist1.id)
# track4.audio.attach(io: "https://s3.amazonaws.com/sonorise-dev/04+Bout+You.mp3", filename: '04 Bout You.mp3')
# track4.save!
#
# track5 = Track.new(title: 'Fifth Track', artist_id: artist2.id)
# track5.audio.attach(io: "https://s3.amazonaws.com/sonorise-dev/05+Take+Your+Time.mp3", filename: '05 Take Your Time.mp3')
# track5.save!
#
# track6 = Track.new(title: 'Sixth Track', artist_id: artist2.id)
# track6.audio.attach(io: "https://s3.amazonaws.com/sonorise-dev/06+I+Know+Why.mp3", filename: '06 I Know Why.mp3')
# track6.save!

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
