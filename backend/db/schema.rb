# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_22_070207) do

  create_table "students", primary_key: "student_id", id: :string, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "english_name"
    t.string "urdu_name"
    t.datetime "date_of_birth"
    t.string "contact_number"
    t.string "fathers_english_name"
    t.string "fathers_urdu_name"
    t.string "guardians_id"
    t.string "current_address"
    t.string "permanent_address"
    t.string "previous_institute"
    t.string "previous_education"
    t.string "school_education"
    t.string "admission_type"
    t.string "admission_date"
    t.string "admission_evaluator"
    t.string "admission_notes"
    t.string "evaluator_recommendation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
