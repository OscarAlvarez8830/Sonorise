class User < ApplicationRecord

  validates(
    :username,
    :email,
    :password_digest,
    :session_token,
    presence: true,
    uniqueness: true
  )
  validates :password, length: { minimum: 6 }, allow_nil: true
  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_email_and_pass(email, password)
    user = User.find_by(email: email)
    user && user.password_match?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def password_match?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
