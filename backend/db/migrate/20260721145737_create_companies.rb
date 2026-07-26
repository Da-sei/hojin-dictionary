class CreateCompanies < ActiveRecord::Migration[7.2]
  def change
    create_table :companies do |t|
      t.integer :corporate_number
      t.string :name
      t.string :name_kana
      t.string :address

      t.timestamps
    end
  end
end
