class AddExternalIdToOrganizations < ActiveRecord::Migration
  def change
    add_column :organizations, :external_id, :integer, :after => :id
  end
end
