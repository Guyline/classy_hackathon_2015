class RemoveStatusFromRaffles < ActiveRecord::Migration
  def change
    remove_column :raffles, :status, :string
  end
end
