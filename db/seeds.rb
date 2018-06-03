User.destroy_all
Playlist.destroy_all
Track.destroy_all
PlaylistTrack.destroy_all

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

playlist1 = Playlist.create!(
  title: 'First Playlist',
  user_id: guest.id
)
playlist1.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist1.save!

playlist2 = Playlist.create!(
  title: 'Second Playlist',
  user_id: guest.id
)
playlist2.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist2.save!

playlist3 = Playlist.create!(
  title: 'Third Playlist',
  user_id: guest.id
)
playlist3.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist3.save!


playlist4 = Playlist.create!(
  title: 'Fourth Playlist',
  user_id: guest.id
)
playlist4.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist4.save!


playlist5 = Playlist.create!(
  title: 'Fifth Playlist',
  user_id: guest.id
)
playlist5.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist5.save!


playlist6 = Playlist.create!(
  title: 'Sixth Playlist',
  user_id: guest.id
)
playlist6.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist6.save!


playlist7 = Playlist.create!(
  title: 'Seventh Playlist',
  user_id: guest.id
)
playlist7.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist7.save!


playlist8 = Playlist.create!(
  title: 'Eighth Playlist',
  user_id: guest.id
)
playlist8.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist8.save!


playlist9 = Playlist.create!(
  title: 'Ninth Playlist',
  user_id: guest.id
)
playlist9.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist9.save!


playlist10 = Playlist.create!(
  title: 'Tenth Playlist',
  user_id: guest.id
)
playlist10.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist10.save!


Artist.destroy_all
artist1 = Artist.create!(
  name: 'Oscar'
)

artist2 = Artist.create!(
  name: 'Kathleen'
)

track1 = Track.new(title: 'First Track', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/01+Down.mp3')
track1.audio.attach(io: file, filename: '01_Down.mp3')
track1.save!

track2 = Track.new(title: 'Second Track', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/02+Talk+to+Me.mp3')
track2.audio.attach(io: file, filename: '02_Talk_to_Me.mp3')
track2.save!
#
track3 = Track.new(title: 'Third Track', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/03+Wild.mp3')
track3.audio.attach(io: file, filename: '03_Wild.mp3')
track3.save!
#
track4 = Track.new(title: 'Fourth Track', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/04+Bout+You.mp3')
track4.audio.attach(io: file, filename: '04_Bout_You.mp3')
track4.save!
#
track5 = Track.new(title: 'Fifth Track', artist_id: artist2.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/05+Take+Your+Time.mp3')
track5.audio.attach(io: file, filename: '05_Take_Your_Time.mp3')
track5.save!
#
track6 = Track.new(title: 'Sixth Track', artist_id: artist2.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/06+I+Know+Why.mp3')
track6.audio.attach(io: file, filename: '06_I_Know_Why.mp3')
track6.save!

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
