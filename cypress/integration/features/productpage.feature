Feature: Product Page

  As a user
  I want to view product details
  So that I can learn more and add them to my cart

  Background:
    Given I am on the home page
    When I click on "View Details" for product "1"

  Scenario: Product details are displayed correctly
    Then the product detail page should show product "1" with correct info

  Scenario: Quantity selector is present and defaulted to 1
    Then the quantity selector should be visible
    And the quantity should be set to "1"

  Scenario: User can change the quantity
    When I change the quantity to "3"
    Then the quantity should be set to "3"

  Scenario: "Add to Cart" button is visible and enabled
    Then the "Add to Cart" button should be visible
    And the "Add to Cart" button should be enabled

  Scenario: User adds product to cart
    When I change the quantity to "2"
    And I click the "Add to Cart" button
    Then the product "1" should have quantity "2"

Scenario: User adds two different products to cart
    And I change the quantity to "1"
    And I click the "Add to Cart" button
    And I click the "Continue Shopping" button
    And I click on "View Details" for product "2"
    And I change the quantity to "2"
    And I click the "Add to Cart" button
    Then the cart should contain 2 products
    And the product "1" should have quantity "1"
    And the product "2" should have quantity "2"