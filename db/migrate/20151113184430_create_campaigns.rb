class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string            :name
      t.string            :organization_name
      t.timestamps
    end
  end
end
