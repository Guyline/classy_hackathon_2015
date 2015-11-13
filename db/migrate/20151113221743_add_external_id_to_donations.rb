class AddExternalIdToDonations < ActiveRecord::Migration
  def change
    add_column :donations, :external_id, :integer, :after => :id
  end
end
