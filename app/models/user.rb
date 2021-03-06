# == Schema Information
#
# Table name: users
#
#  id                  :bigint(8)        not null, primary key
#  username            :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

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

  has_one_attached :avatar
  has_many :playlists

  after_initialize :ensure_session_token
  before_save :set_default_avatar!

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

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def set_default_avatar!
    if self.avatar.attachment.nil?
      self.avatar.attach(io: File.open('app/assets/images/default-user-avatar.png'), filename: 'default-user-avatar.png')
    end
  end
end
