class CreatePlaylistTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :playlist_tracks do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false
    end

    add_index :playlist_tracks, [:track_id, :playlist_id], unique: true
    add_index :playlist_tracks, :playlist_id
  end
end
