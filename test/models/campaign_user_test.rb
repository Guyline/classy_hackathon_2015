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

require 'test_helper'

class CampaignUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
