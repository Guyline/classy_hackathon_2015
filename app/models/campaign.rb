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

class Campaign < ActiveRecord::Base
  has_many        :campaign_users
  has_many        :users,
    :through => :campaign_users

  has_many        :donations
  has_many        :donators,
    :through => :donations

  has_many        :raffles
  has_many        :prizes,
    :through => :raffles

  belongs_to      :organization

  delegate :prizes,
    :to => :organization,
    :prefix => true
end
