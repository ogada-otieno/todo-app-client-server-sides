class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :email, format: {with: URI::Mailto::EMAIL_REGEXP}
    validates :username, presence: true, uniqueness: true
    validates :password, presence:, true, length: {:within => 6..40}, if: -> { new_record? || !password.nil}
end
