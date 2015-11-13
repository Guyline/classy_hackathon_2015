# == Schema Information
#
# Table name: raffles
#
#  id              :integer          not null, primary key
#  campaign_id     :integer
#  user_id         :integer
#  start_time      :datetime
#  end_time        :datetime
#  price_per_entry :decimal(5, 2)
#  status          :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

require 'test_helper'

class RaffleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
