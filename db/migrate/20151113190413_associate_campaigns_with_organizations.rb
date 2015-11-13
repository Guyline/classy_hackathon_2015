class AssociateCampaignsWithOrganizations < ActiveRecord::Migration
  def change
    add_column :campaigns, :organization_id, :integer, :after => :id
    remove_column :campaigns, :organization_name, :string
  end
end
