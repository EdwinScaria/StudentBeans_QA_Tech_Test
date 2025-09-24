@register
Feature: Register Function

Scenario: As a user I want to validate the email and password error message when registering on studentbeans.com
  Given I am on the studentbeans homepage for register
  When I click the register button
  Then I enter email "test.com" and validate
  Then I enter password "tes" and validate


