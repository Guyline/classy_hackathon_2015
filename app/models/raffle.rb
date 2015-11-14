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

class Raffle < ActiveRecord::Base
  has_many          :raffle_prizes
  has_many          :prizes,
    :through => :raffle_prizes

  belongs_to :campaign

  delegate :donations, :donators,
    :to => :campaign

  scope :finalized, -> { where(:finalized => true) }
  scope :completed, -> { where(:finalized => false).where("end_time < ?", Time.now) }
  scope :in_progress, -> { where(:finalized => false).where("start_time < ? AND end_time > ?", Time.now, Time.now) }
  scope :pending, -> { where(:finalized => false).where("start_time > ?", Time.now) }

  def status
    status = "pending"
    if finalized?
      status = "finalized"
    elsif ended?
      status = "completed"
    elsif started?
      status = "in_progress"
    end
    status
  end

  def started?
    start_time.present? && start_time < Time.now
  end

  def ended?
    end_time.present? && end_time < Time.now
  end

  def valid_donations
    donations.where("donations.amount > ?", price_per_entry).where("donations.created_at > ? AND donations.created_at < ?", start_time, end_time)
  end


end
