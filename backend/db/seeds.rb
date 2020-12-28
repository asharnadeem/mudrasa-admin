# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Student.create!([
    { 
      student_id: 'FO50212',
      english_name: "Ashar Nadeem",
      urdu_name: "اشعر ندیم",
      date_of_birth: Date.current,
      contact_number: "4435839571",
      fathers_english_name: "Muhammad Nadeem",
      fathers_urdu_name: "محمد ندیم",
      guardians_id: "123456789",
      current_address: "8337 Governor Run, Ellicott City MD 21043",
      permanent_address: "8337 Governor Run, Ellicott City MD 21043",
      previous_institute: "Masjid Fatima",
      previous_education: "Completed Quran",
      school_education: "University",
      admission_type: "Quran",
      admission_date: Date.current,
      admission_evaluator: "Muhammad Nadeem",
      admission_notes: "Starting daily classes",
      evaluator_recommendation: "Adult Class"
    },
])

User.create(
  email: 'asharnadeemc@gmail.com', 
  username: 'asharnadeem', 
  first_name: 'Ashar', 
  last_name: 'Nadeem', 
  password: 'password'
)