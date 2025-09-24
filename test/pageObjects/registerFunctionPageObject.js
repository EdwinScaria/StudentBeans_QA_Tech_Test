import ParentPageObject from './parentPageObject'
import { Key } from 'webdriverio'

class RegisterFunctionPageObject extends ParentPageObject {
  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('/uk')
  }

  async acceptCookies () {
    await this.isElementEqualToExpected($('button=Accept All Cookies'), 'Accept All Cookies')
    await $('button=Accept All Cookies').click()
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Win a £200 schuh gift card'), 'Win a £200 schuh gift card')
  }

  async clickRegisterButton() {
    await this.isElementEqualToExpected($('a=Register'), 'Register')
    await $('a=Register').click();
  }
  async enterEmail(email) {
    // existing element is used to check whether that the element exists rahter than checking for a phrase, as the name of the offer can change. 
    await this.isElementExisting($('#email'))
    await $('#email').setValue(email)
    await browser.keys(Key.Tab);
    await this.isElementExisting($('div[data-testid="input-alert"]'))
    await this.isElementEqualToExpected($('div[data-testid="input-alert"] p'), 'The email is invalid. ')
    browser.refresh();  
    // This will clear an error to that next set of validation can be done
   
  }
  async enterPassword(password) {
    await this.isElementExisting($('#password'))
    await $('#password').setValue(password)
    await browser.keys(Key.Tab);
    await this.isElementExisting($('div[data-testid="input-alert"]'))
    await this.isElementEqualToExpected($('div[data-testid="input-alert"]'), 'Your password must be at least 8 characters ')
  }

}

module.exports = RegisterFunctionPageObject
