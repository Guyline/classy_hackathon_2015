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

require 'test_helper'

class OrganizationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
