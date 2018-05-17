class InstallPgtrgm < ActiveRecord::Migration[5.1]
  def change
    execute "CREATE EXTENSION IF NOT EXISTS pg_trgm;"
  end
end
