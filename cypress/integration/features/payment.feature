Feature: Payment Page

  As a user
  I want to enter my payment information
  So that I can complete my purchase

  Background:
    Given I am on the payment page

  Scenario: All payment input fields are visible
    Then all payment input fields should be visible

  Scenario: User enters valid payment info and places order
    When I enter valid payment details
    And I click "Place Order"
    Then the order should be completed successfully
