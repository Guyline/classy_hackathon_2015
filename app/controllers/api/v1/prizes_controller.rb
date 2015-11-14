class Api::V1::PrizesController < Api::V1::ApplicationController
  def index
    @prizes = Prize.all
  end

  def create
    organization = Organization.find(params[:organization_id])
    @prize = organization.prizes.create!(prize_params)
  end

  private

  def prize_params
    @json.slice("name", "description", "image_url")
  end
end