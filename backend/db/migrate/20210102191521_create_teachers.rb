class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers, {:id => false} do |t|
      t.integer :teacher_id, primary_key: true, null: false
      t.string :name
      t.string :government_id
      t.string :phone_number
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end

    reversible do |dir|
      dir.up { execute "ALTER TABLE teachers AUTO_INCREMENT = 1000" }
    end
  end
end
