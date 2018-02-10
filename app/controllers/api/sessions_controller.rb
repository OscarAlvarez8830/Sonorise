class Api::SessionsController < ApplicationController
  before_action :ensure_current_user, only: :destroy
  def create
    @user = User.find_by_email_and_pass(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login
      render 'api/users/show'
    else
      render json: { base: 'Invalid email or password' }, status: 401
    end
  end

  def destroy
    logout
    render json: {}
  end

  private
  def ensure_current_user
    if logged_in?
      render json: ['Unable to complete request'], status: 422
    end
  end
end
