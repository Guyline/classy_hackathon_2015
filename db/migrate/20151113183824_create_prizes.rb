class CreatePrizes < ActiveRecord::Migration
  def change
    create_table :prizes do |t|
      t.string              :name
      t.string              :description
      t.string              :image_url
      t.timestamps
    end
  end
end
