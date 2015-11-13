class AddStatusToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :status, :string, :after => :name
  end
end
