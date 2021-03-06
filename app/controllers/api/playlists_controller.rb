class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: nil).limit(4)
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    @tracks = @playlist.tracks.includes(:artist)
  end

  def update
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors, status: 422
    end
  end

  def destroy
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.destroy
      render json: {}
    else
      render json: @playlist.errors, status: 422
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
