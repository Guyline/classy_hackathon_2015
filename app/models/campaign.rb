# == Schema Information
#
# Table name: campaigns
#
#  id                :integer          not null, primary key
#  name              :string(255)
#  organization_name :string(255)
#  created_at        :datetime
#  updated_at        :datetime
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
end
