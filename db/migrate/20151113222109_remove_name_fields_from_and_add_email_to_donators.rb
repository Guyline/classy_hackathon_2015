class RemoveNameFieldsFromAndAddEmailToDonators < ActiveRecord::Migration
  def change
    remove_column :donators, :first_name, :string
    remove_column :donators, :last_name, :string
    add_column :donators, :name, :string, :after => :id
    add_column :donators, :email, :string, :after => :name
  end
end
