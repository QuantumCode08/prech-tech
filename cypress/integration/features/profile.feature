Feature: Profile Page

  As a user
  I want to view my profile information and order history
  So that I can manage my account and start shopping

  Background:
    Given I am on the profile page

  Scenario: View personal information
    Then the profile name should be "John Doe"
    And the profile email should be "john.doe@example.com"

  Scenario: See empty order history
    Then I should see a message that no orders have been placed
    And the "Start Shopping" button should be visible

  Scenario: Navigate back to home
    When I click "Back to Home"
    Then I should be on the home page
