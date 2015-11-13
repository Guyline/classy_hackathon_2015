class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.references          :campaign
      t.references          :donator
      t.decimal             :amount,
        :precision => 5,
        :scale => 2
      t.timestamps
    end
  end
end
