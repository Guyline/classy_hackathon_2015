class CreateCampaignUsers < ActiveRecord::Migration
  def change
    create_table :campaign_users do |t|
      t.references          :campaign
      t.references          :user
      t.timestamps
    end
  end
end
