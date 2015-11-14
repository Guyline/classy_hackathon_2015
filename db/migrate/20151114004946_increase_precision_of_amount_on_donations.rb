class IncreasePrecisionOfAmountOnDonations < ActiveRecord::Migration
  def change
    change_column :donations, :amount, :decimal, :precision => 10, :scale => 2
  end
end
