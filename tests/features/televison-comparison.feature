Feature: Compare between two or more televisions
  Scenario: Compare between two televisions
    Given The user go to "https://www.which.co.uk/reviews/televisions"
    When User selects "television1" and "television2" for comparisons"
    Then The user clicks on compare button

