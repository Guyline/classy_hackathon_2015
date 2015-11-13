class CreateRaffles < ActiveRecord::Migration
  def change
    create_table :raffles do |t|
      t.references        :campaign
      t.references        :user
      t.datetime          :start_time
      t.datetime          :end_time
      t.decimal           :price_per_entry,
        :precision => 5,
        :scale => 2
      t.timestamps
    end
  end
end
