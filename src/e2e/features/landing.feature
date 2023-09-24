Feature: Landing Page
  As a user
  I want to see the landing page
  So that I can start interacting with the page

  Scenario: User visits the landing page
    Given the user is on the landing page
    Then the user should see the title "Meeting Creator"
    And the user should see the subtitle "Create and manage meetings with ease"
    And the user should see a sign-in button

  Scenario: User gets redirected to login page via the sign-in button
    Given the user is on the landing page
    Then the user should see a sign-in button
    Then the user clicks on the sign-in button
    Then the user is redirected to login page

  Scenario: User gets redirected to login page via the Login button on navigation bar
    Given the user is on the landing page
    Then the user should see a Login button on the navigation
    Then the user clicks on the Login button
    Then the user is redirected to login page
