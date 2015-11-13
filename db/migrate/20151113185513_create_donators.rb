class CreateDonators < ActiveRecord::Migration
  def change
    create_table :donators do |t|
      t.string            :first_name
      t.string            :last_name
      t.timestamps
    end
  end
end
