const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../../pageObjects/simpleSearchPageObject')
const simpleSearchPageObject = new SimpleSearchPageObject()

// Method to go into the homepage, accept the cookie and verify that you are in the correct page 
Given('I am on the studentbeans homepage for search', async () => {
  console.log('Step: Go to homepage');
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.acceptCookies()
  await simpleSearchPageObject.verifyHomePage()
})
// Method to click on the search bar 
When('I click the search bar', async () => {
  await simpleSearchPageObject.openSearchBar()
})
// Method to enter samsung as the search term
When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.searchTerm('Samsung')
})
// Method to click on the 4th element within the samsung search term
Then('I should select the 4th "Samsung" search listing', async () => {
  await simpleSearchPageObject.selectSearchResult(4)
})