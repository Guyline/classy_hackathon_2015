# == Schema Information
#
# Table name: donators
#
#  id         :integer          not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Donator < ActiveRecord::Base
  has_many        :donations
  has_many        :campaigns,
    :through => :donations
end
