Feature: Accounts
  In order to participate in the site
  As a user
  I want to signup, login, and edit my user account
  
  Scenario: Signup EMail Account
    Given I am on the signup page
    When I fill in the user signup form
    Then I should be on the account created page
      And I should see "Your account was created."
      And I should receive an email
    When I open the email
    Then I should see "confirm_email" in the email
    When I follow "confirm_email" in the email
    Then I should see "Your email address has been confirmed."
    
  Scenario: Signup Facebook Account

  Scenario: Signup Google Account

  Scenario: Signup Twitter Account

  Scenario: Signup LinkedIn Account

  Scenario: Login
    Given I am on the login page
      And my account has already been created
    When I fill in the user signin form
    Then I should be on my console page
      And I should see "Login successful!"

  Scenario: Login with Google Account
    Given I am on the login page
      And my account utilizes Google credentials
    When I fill in the user signin form
    Then I should be on my console page
      And I should see "Login successful!"

  Scenario: Login with Facebook Account
    Given I am on the login page
      And my account utiilizes Facebook credentials
    When I fill in the user signin form
    Then I should be on my console page
      And I should see "Login successful!"

  Scenario: Login with Twitter Account
    Given I am on the login page
      And my account use Twitter credentials
    When I fill in the user signin form
    Then I should be on my console page
      And I should see "Login successful!"

  Scenario: Login with LinkedIn Account
    Given I am on the login page
      And my account use LinkedIn credentials
    When I fill in the user signin form
    Then I should be on my console page
      And I should see "Login successful!"

