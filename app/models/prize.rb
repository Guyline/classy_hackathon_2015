# == Schema Information
#
# Table name: prizes
#
#  id              :integer          not null, primary key
#  organization_id :integer
#  name            :string(255)
#  description     :string(255)
#  image_url       :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class Prize < ActiveRecord::Base
  has_many      :raffle_prizes
  has_many      :raffles,
    :through => :raffle_prizes

  validates :name,
    :presence => true,
    :uniqueness => {
      :scope => :organization_id
    }
end
