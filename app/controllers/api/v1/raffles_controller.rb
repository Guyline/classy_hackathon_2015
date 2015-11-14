class Api::V1::RafflesController < Api::V1::ApplicationController
  def index
    @raffles = Raffle.includes(:prizes).all
  end

  def show
    @raffle = Raffle.includes(:prizes).find(params[:id])
  end

  def create
    campaign = Campaign.find(params[:campaign_id])
    @raffle = campaign.raffles.create!(raffle_params)

    prizes = @json["prizes"] || []
    prizes.each do |prize_hash|
      prize_id = prize_hash["prize_id"]
      prize = Prize.find(prize_id)
      raffle_prize = @raffle.raffle_prizes.create!(prize_hash)
    end
  end

  def update
    @raffle = Raffle.find(params[:id])
    @raffle.update(raffle_params)
    prizes = @json["prizes"] || []
    prizes.each do |prize_hash|
      prize_id = prize_hash["prize_id"]
      prize = Prize.find(prize_id)
      raffle_prize = @raffle.raffle_prizes.create!(prize_hash)
    end
  end

  private

  def raffle_params
    @json.slice("start_time", "end_time", "price_per_entry", "finalized")
  end
end
