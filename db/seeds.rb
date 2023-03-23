# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Started Seeding database..."

user1 = User.create(email: "user1@example.com", gender: "F", username: "user1", password: "password")
task1 = Task.create(name: "task1", description: "task 1 description", status: "in progress", user_id: user1.id)


puts "Done Seeding users"


