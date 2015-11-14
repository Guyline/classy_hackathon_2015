json.data @raffles do |raffle|
  json.partial! 'api/v1/raffles/raffle', :raffle => raffle
  json.prizes raffle.prizes do |prize|
    json.partial! 'api/v1/prizes/prize', :prize => prize
  end
end