Feature: Search for specific type of televison
  Scenario: filter by televison sizes
    Given The user go to "https://www.which.co.uk/reviews/televisions"
    When  The user uses screen size to filter for "size"
    And   User add screen type "type"
    Then  The user clicks on done button
