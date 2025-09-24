@offers
Feature: Trending Now Offers

Scenario: As a user I want to click on the trending now discounts on studentbeans.com so that I can see what discoounts are available
  Given I am on the studentbeans homepage for trending
  Then I click the trending now masthead
  Then I should select the 6th discount within the trending now offers list

