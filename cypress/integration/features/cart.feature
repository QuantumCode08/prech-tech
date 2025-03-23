Feature: Cart Page

  As a user
  I want to manage products in my cart
  So that I can finalize my purchase

  Background:
    Given I am on the home page

  Scenario: User adds a product and removes it
    When I click on "View Details" for product "1"
    And I change the quantity to "1"
    And I click the "Add to Cart" button
    Then I should be on the cart page
    And the cart should contain 1 product
    When I remove product "1" from the cart
    Then the cart should contain 0 products

  Scenario: User adds product and proceeds to checkout
    When I click on "View Details" for product "2"
    And I change the quantity to "1"
    And I click the "Add to Cart" button
    Then I should be on the cart page
    And the cart should contain 1 product
    When I click the "Proceed to Checkout" button
    Then I should be on the address page
