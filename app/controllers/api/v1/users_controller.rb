class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, only: [:add_device, :check_token]

  def check_token
    if current_user
      render json: { message: "Token valid!" }, status: :ok
    else
      render json: { error: "Invalid token" }, status: :unauthorized
    end
  end

  def sign_in
    user = User.find_by(email: params[:email])

    if user && user.valid_password?(params[:password])
      user.regenerate_auth_token if user.auth_token.blank?

      render json: {
        user: {
          email: user.email,
          auth_token: user.auth_token
        }
      }, status: :ok
    else
      render json: { error: "Invalid password" }, status: :unauthorized
    end
  end

  def forgot_password
    email = params[:email]

    unless valid_email?(email)
      render json: { error: "Invalid email format" }, status: :unprocessable_entity
      return
    end

    user = User.find_by(email: email)

    if user
      user.send_reset_password_instructions
    end
    render json: { message: "If an account exists, you will have received a password reset email" }, status: :ok
  end

  def add_device
    user = current_user
    existing_device = user.user_devices.find_by(expo_push_token: user_device_params[:expo_push_token])

    if existing_device
      render json: { error: 'Device push notifications already registered' }, status: :ok
      return
    end

    device = user.user_devices.new(user_device_params.merge(user_id: user.id))

    if device.save
      render json: { device: device }, status: :created
    else
      render json: { error: device.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  def logout
    user = User.find_by(email: params[:email])

    if user
      if user.update(auth_token: nil)
        render json: { message: "Logged out successfully" }, status: :ok
      else
        render json: { error: user.errors.full_messages.join(', ') }, status: :unprocessable_entity
      end
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def valid_email?(email)
    email.present? && URI::MailTo::EMAIL_REGEXP.match?(email)
  end

  def user_device_params
    params.permit(
      :brand,
      :os_name,
      :device_model_name,
      :os_version,
      :device_name,
      :manufacturer,
      :device_year_class,
      :expo_push_token
    )
  end

end
