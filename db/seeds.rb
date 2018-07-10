puts 'destroying all users'
User.destroy_all

puts 'destroying all playlists'
Playlist.destroy_all

puts 'destroying all artists'
Artist.destroy_all

puts 'destroying all tracks'
Track.destroy_all

puts 'destroying all playlist tracks'
PlaylistTrack.destroy_all


puts 'creating users'
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


puts 'creating playlists'
playlist1 = Playlist.create!(
  title: 'Marian Hill',
  user_id: guest.id
)
playlist1.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist1.save!

playlist2 = Playlist.create!(
  title: 'Jammin',
  user_id: guest.id
)
playlist2.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist2.save!

playlist3 = Playlist.create!(
  title: 'Get Your Groove On',
  user_id: guest.id
)
playlist3.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist3.save!

playlist4 = Playlist.create!(
  title: 'Cool Stuff',
  user_id: guest.id
)
playlist4.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist4.save!

playlist5 = Playlist.create!(
  title: 'Live Your Best Life'
)
playlist5.image.attach(io: File.open('app/assets/images/sway.jpg'), filename: 'sway.jpg')
playlist5.save!

playlist6 = Playlist.create!(
  title: 'Treat Yo Self'
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


puts 'creating artists'
Artist.destroy_all
artist1 = Artist.create!(
  name: 'Marian Hill'
)

artist2 = Artist.create!(
  name: 'Charlie Puth'
)

artist3 = Artist.create!(
  name: 'Portugal The Man'
)


puts 'creating tracks'
track1 = Track.new(title: 'Down', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/01+Down.mp3')
track1.audio.attach(io: file, filename: '01_Down.mp3')
track1.save!

track2 = Track.new(title: 'Talk To me', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/02+Talk+to+Me.mp3')
track2.audio.attach(io: file, filename: '02_Talk_to_Me.mp3')
track2.save!

track3 = Track.new(title: 'Wild', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/03+Wild.mp3')
track3.audio.attach(io: file, filename: '03_Wild.mp3')
track3.save!

track4 = Track.new(title: 'Bout You', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/04+Bout+You.mp3')
track4.audio.attach(io: file, filename: '04_Bout_You.mp3')
track4.save!

track5 = Track.new(title: 'Take Your Time', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/05+Take+Your+Time.mp3')
track5.audio.attach(io: file, filename: '05_Take_Your_Time.mp3')
track5.save!

track6 = Track.new(title: 'I Know Why', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/06+I+Know+Why.mp3')
track6.audio.attach(io: file, filename: '06_I_Know_Why.mp3')
track6.save!

track7 = Track.new(title: 'How Long', artist_id: artist2.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/01+How+Long+(Jerry+Folk+Remix).mp3')
track7.audio.attach(io: file, filename: 'How_Long.mp3')
track7.save!

track8 = Track.new(title: 'Subtle Thing', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/01+Subtle+Thing.mp3')
track8.audio.attach(io: file, filename: 'Subtle_Thing.mp3')
track8.save!

track9 = Track.new(title: 'Differently', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/02+Differently.mp3')
track9.audio.attach(io: file, filename: 'Differently.mp3')
track9.save!

track10 = Track.new(title: 'All Night Long', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/03+All+Night+Long+(feat.+Steve+Davit).mp3')
track10.audio.attach(io: file, filename: 'All Night Long.mp3')
track10.save!

track11 = Track.new(title: "Don't Miss You", artist_id: artist1.id)
file = EzDownload.open("https://s3.amazonaws.com/sonorise-dev/04+Don't+Miss+You.mp3")
track11.audio.attach(io: file, filename: 'Dont_Miss_You.mp3')
track11.save!

track12 = Track.new(title: 'Wish You Would', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/05+Wish+You+Would.mp3')
track12.audio.attach(io: file, filename: 'Wish_You_Would.mp3')
track12.save!

track13 = Track.new(title: "Don't Do It", artist_id: artist1.id)
file = EzDownload.open("https://s3.amazonaws.com/sonorise-dev/06+Don't+Do+It.mp3")
track13.audio.attach(io: file, filename: 'Dont_Do_It.mp3')
track13.save!

track14 = Track.new(title: 'Sideways', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/07+Sideways.mp3')
track14.audio.attach(io: file, filename: 'Sideways.mp3')
track14.save!

track15 = Track.new(title: 'No Hesitation', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/08+No+Hesitation.mp3')
track15.audio.attach(io: file, filename: 'No_Hesitation.mp3')
track15.save!

track16 = Track.new(title: 'Listening', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/09+Listening+(feat.+Steve+Davit).mp3')
track16.audio.attach(io: file, filename: 'Listening.mp3')
track16.save!

track17 = Track.new(title: 'Go Quietly', artist_id: artist1.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/10+Go+Quietly.mp3')
track17.audio.attach(io: file, filename: 'Go_Quietly.mp3')
track17.save!

track18 = Track.new(title: 'Feel It Still', artist_id: artist3.id)
file = EzDownload.open('https://s3.amazonaws.com/sonorise-dev/04+Feel+It+Still.mp3')
track18.audio.attach(io: file, filename: 'Feel_It_Still.mp3')
track18.save!


puts 'creating playlist tracks'
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

Track.all.each do |track|
  PlaylistTrack.create!(track_id: track.id, playlist_id: playlist4.id)
end
