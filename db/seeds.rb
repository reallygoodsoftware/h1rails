
if Rails.env.development?
  admin_user = AdminUser.find_or_initialize_by(email: 'me@example.com')

  if !admin_user.persisted?
    admin_user.assign_attributes(
      first_name: 'Joe',
      last_name: 'Bloggs',
      password: 'password'
    )
    admin_user.save
  end

  user = User.find_or_initialize_by(email: 'user@example.com')
  if !user.persisted?
    user.assign_attributes(
      first_name: 'Test',
      last_name: 'User',
      password: 'password'
    )
    user.save
  end
end
