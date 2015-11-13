# == Schema Information
#
# Table name: raffle_prizes
#
#  id         :integer          not null, primary key
#  raffle_id  :integer
#  prize_id   :integer
#  tier       :integer
#  amount     :integer
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class RafflePrizeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
