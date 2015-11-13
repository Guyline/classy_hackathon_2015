class AddStatusToRaffles < ActiveRecord::Migration
  def change
    add_column :raffles, :status, :string, :after => :price_per_entry
  end
end
