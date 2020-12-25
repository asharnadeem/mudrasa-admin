class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students, {:id => false} do |t|
      t.string :student_id, primary_key: true, null: false
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
  end
end