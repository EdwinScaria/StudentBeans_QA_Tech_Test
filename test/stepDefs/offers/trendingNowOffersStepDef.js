const { Given, Then } = require('@cucumber/cucumber')
const TrendingNowOffersPageObject = require('../../pageObjects/trendingNowOffersPageObject')
const trendingNowOffersPageObject = new TrendingNowOffersPageObject()

// Method to go into the homepage, accept the cookie and verify that you are in the correct page 
Given('I am on the studentbeans homepage for trending', async () => {
  await trendingNowOffersPageObject.goToHomePage()
  await trendingNowOffersPageObject.acceptCookies()
  await trendingNowOffersPageObject.verifyHomePage()

})
// Method to click on the trending now tab 
Then('I click the trending now masthead', async () => {
  await trendingNowOffersPageObject.clickOnTrendingNow()

})
//Method to click on the 6th discount within the trending offer
Then('I should select the 6th discount within the trending now offers list', async () => {
  await trendingNowOffersPageObject.selectDiscount()
})