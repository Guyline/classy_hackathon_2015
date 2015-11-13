# == Schema Information
#
# Table name: campaign_users
#
#  id          :integer          not null, primary key
#  campaign_id :integer
#  user_id     :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class CampaignUser < ActiveRecord::Base
  belongs_to        :campaign
  belongs_to        :user
end
