class Api::TracksController < ApplicationController
  def index
    @tracks = Track.where('title ILIKE ?', "%#{params[:query]}%").includes(:artist)
  end
end
