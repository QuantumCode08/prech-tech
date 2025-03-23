Feature: End-to-End Checkout Flow

  As a user
  I want to add a product to my cart, complete the checkout
  And verify the order appears in my profile

  Scenario: Complete purchase and verify order in profile
    Given I am on the home page
    When I add product "1" to the cart with quantity "1"
    And I proceed to checkout
    And I enter valid address information
    And I continue to payment
    And I enter valid payment information
    And I place the order
    Then I should see the order success message
    When I visit the profile page
    Then I should see the order in my order history
