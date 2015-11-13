# == Schema Information
#
# Table name: donations
#
#  id          :integer          not null, primary key
#  campaign_id :integer
#  donator_id  :integer
#  amount      :decimal(5, 2)
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class DonationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
