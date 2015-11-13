class AddExternalIdToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :external_id, :integer, :after => :organization_id
  end
end
