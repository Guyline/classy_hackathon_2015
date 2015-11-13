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

class RafflePrize < ActiveRecord::Base
  belongs_to      :raffle
  belongs_to      :prize
end
