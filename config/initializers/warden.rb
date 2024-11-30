class AuthTokenStrategy < Warden::Strategies::Base
  def valid?
    auth_token.present?
  end

  def authenticate!
    user = User.find_by(auth_token: auth_token)

    if user
      # Reset the session to ensure no old session data persists
      env['rack.session'].clear
      success!(user)
    else
      fail!('strategies.auth_token.fail')
    end
  end

  private

  def auth_token
    env['HTTP_AUTHORIZATION'].to_s.remove('Bearer ')
  end
end

Warden::Strategies.add(:auth_token, AuthTokenStrategy)