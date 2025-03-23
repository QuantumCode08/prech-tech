Feature: Address Page

  As a user
  I want to provide my delivery address
  So that I can proceed to payment

  Background:
    Given I am on the address page

  Scenario: Form fields are visible
    Then all address input fields should be visible

  Scenario: User fills in valid address details
    When I enter valid address information
    And I click "Continue to Payment"
    Then I should be on the payment page

