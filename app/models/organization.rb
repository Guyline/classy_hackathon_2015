# == Schema Information
#
# Table name: organizations
#
#  id          :integer          not null, primary key
#  external_id :integer
#  name        :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Organization < ActiveRecord::Base
  has_many          :prizes
  has_many          :campaigns
end
