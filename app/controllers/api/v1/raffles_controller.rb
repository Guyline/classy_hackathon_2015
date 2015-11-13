class Api::V1::RafflesController < Api::V1::ApplicationController
  def index
    @raffles = Raffle.all
  end

  def show
    @raffle = Raffle.find(params[:id])
  end

  def create
    campaign = Campaign.find(params[:campaign_id])
    @raffle = campaign.raffles.new(raffle_params)
    @raffle.status = "created"
    @raffle.save!

    prizes = @json["prizes"] || []
    prizes.each do |prize_hash|
      prize_id = prize_hash["prize_id"]
      prize = Prize.find(prize_id)
      raffle_prize = @raffle.raffle_prizes.create!(prize_hash)
    end
  end

  def update
  end

  private

  def raffle_params
    @json.slice("start_time", "end_time", "price_per_entry")
  end
end
