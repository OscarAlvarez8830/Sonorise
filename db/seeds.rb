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
