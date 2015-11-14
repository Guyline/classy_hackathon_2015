class AddFinalizedToRaffles < ActiveRecord::Migration
  def change
    add_column :raffles, :finalized, :boolean, :after => :price_per_entry
  end
end
