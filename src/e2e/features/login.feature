Feature: Login
  As a user
  I want to be able to log in
  So that I can access my account

  Scenario: User in on the login page
    Given the user is on the login page
    Then the user should see input fields for username and password
    Then the user should see a submit button with label "Login"
    Then the user is redirected to login page

  Scenario: User cannot login with invalid credentials
    Given the user is on the login page
    Then the user should enter "invalid" to the field "username"
    Then the user should enter "invalid" to the field "password"
    Then the user clicks on "Login" button
    Then the user should see an alert with text "Invalid credentials"

  Scenario: User logs in with username and password
    Given the user is on the login page
    Then the user should enter "admin" to the field "username"
    Then the user should enter "admin" to the field "password"
    Then the user clicks on "Login" button
    Then the user is redirected to dashboard page


