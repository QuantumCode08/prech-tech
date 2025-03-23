Feature: Homepage Navigation

Scenario: User can navigate to the homepage
  Given I am on the homepage
  Then I should see the main content
  And I should see the full list of products

Scenario Outline: View details for product <productId>
  Given I am on the homepage
  When I click "View Details" for product "<productId>"
  Then the product detail page should show product "<productId>" with correct info

  Examples:
    | productId |
    | 1         |
    | 2         |
    | 3         |
