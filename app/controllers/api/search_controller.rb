class Api::SearchController < ApplicationController
  def search
    @tracks = PgSearch.multisearch(params[:query])
      .where(searchable_type: 'Track')
      .includes(:searchable)
      .map(&:searchable)
    @artists = PgSearch.multisearch(params[:query])
      .where(searchable_type: 'Artist')
      .includes(:searchable)
      .map(&:searchable)
  end
end
