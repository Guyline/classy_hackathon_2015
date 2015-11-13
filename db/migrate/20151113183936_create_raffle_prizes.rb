class CreateRafflePrizes < ActiveRecord::Migration
  def change
    create_table :raffle_prizes do |t|
      t.references          :raffle
      t.references          :prize
      t.integer             :tier
      t.integer             :amount
      t.timestamps
    end
  end
end
