class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    @url  = 'http://exemple.com/login'
    mail(to: @user.mail, suject: 'Welcome to My Site')
  end
end
