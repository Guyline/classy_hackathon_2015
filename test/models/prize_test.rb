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

require 'test_helper'

class PrizeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
