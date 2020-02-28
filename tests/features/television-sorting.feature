Feature: For television page
  Scenario: Sort By Price
    Given Customer go to "https://www.which.co.uk/reviews/televisions"
    When  Page title is "Television reviews - Which?"
    Then  Sort by pricing
