class RemoveNullConstraintForPlaylistUserId < ActiveRecord::Migration[5.2]
  def change
    change_column :playlists, :user_id, :integer, null: true
  end
end
