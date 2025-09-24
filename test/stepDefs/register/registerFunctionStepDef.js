const { Given, When, Then } = require('@cucumber/cucumber')
const RegisterFunctionPageObject = require('../../pageObjects/registerFunctionPageObject')
const registerFunctionPageObject = new RegisterFunctionPageObject()

// Method to go into the homepage, accept the cookie and verify that you are in the correct page 
Given('I am on the studentbeans homepage for register', async () => {
  await registerFunctionPageObject.goToHomePage()
  await registerFunctionPageObject.acceptCookies()
  await registerFunctionPageObject.verifyHomePage()
})

// Method to click the register button
When('I click the register button', async () => {
  await registerFunctionPageObject.clickRegisterButton()
})
// Method to enter the email and validate the error message 
Then('I enter email "test.com" and validate', async () => {
  await registerFunctionPageObject.enterEmail('test.com')
})
// Method to enter the password and validate the error message 
Then('I enter password "tes" and validate', async () => {
  await registerFunctionPageObject.enterPassword('tes')
})


