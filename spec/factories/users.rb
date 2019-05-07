FactoryBot.define do
  factory :user do
    email { "stressful@gmail.com" }
    password { "stressful" }
    password_confirmation { "stressful" }
  end
end
