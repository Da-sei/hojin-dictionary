# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Company.create(:corporate_number => '1234567890123', :name => 'ABC株式会社', :name_kana => 'エービーシーカブシキカイシャ', :address => '東京都〇〇区1-2-3')
Company.create(:corporate_number => '0987654321098', :name => '株式会社あいう', :name_kana => 'カブシキカイシャアイウ', :address => '東京都〇〇区3-2-1')