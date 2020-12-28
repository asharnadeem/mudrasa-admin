class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students, {:id => false} do |t|
      t.integer :student_id, primary_key: true, null: false
      t.string :english_name
      t.string :urdu_name
      t.datetime :date_of_birth
      t.string :contact_number
      t.string :fathers_english_name
      t.string :fathers_urdu_name
      t.string :guardians_id
      t.string :current_address
      t.string :permanent_address
      t.string :previous_institute
      t.string :previous_education
      t.string :school_education
      t.string :admission_type
      t.string :admission_date
      t.string :admission_evaluator
      t.string :admission_notes
      t.string :evaluator_recommendation

      t.timestamps
    end

    reversible do |dir|
      dir.up { execute "ALTER TABLE students AUTO_INCREMENT = 1000" }
    end
  end
end