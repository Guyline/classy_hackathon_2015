class Api::V1::RafflesController < Api::V1::ApplicationController
  def index
    @raffles = Raffle.all
  end

  def show
    @raffle = Raffle.find(params[:id])
  end

  def create
  end

  def update
  end
end
