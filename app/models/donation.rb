# == Schema Information
#
# Table name: donations
#
#  id          :integer          not null, primary key
#  external_id :integer
#  campaign_id :integer
#  donator_id  :integer
#  amount      :decimal(5, 2)
#  created_at  :datetime
#  updated_at  :datetime
#

class Donation < ActiveRecord::Base
  belongs_to      :campaign
  belongs_to      :donator
end
