# == Schema Information
#
# Table name: campaigns
#
#  id              :integer          not null, primary key
#  organization_id :integer
#  external_id     :integer
#  name            :string(255)
#  status          :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

require 'test_helper'

class CampaignTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
