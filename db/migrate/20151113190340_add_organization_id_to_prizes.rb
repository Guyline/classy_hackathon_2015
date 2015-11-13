class AddOrganizationIdToPrizes < ActiveRecord::Migration
  def change
    add_column :prizes, :organization_id, :integer, :after => :id
  end
end
