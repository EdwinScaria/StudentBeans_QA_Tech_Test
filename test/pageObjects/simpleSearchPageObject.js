import ParentPageObject from './parentPageObject'

class SimpleSearchPageObject extends ParentPageObject {
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

  async openSearchBar () {
    await this.isElementEqualToExpected($('p=Brands, items or categories'), 'Brands, items or categories')
    await $('button[data-testid="nav-search-desktop"]').click()
  }
  async searchTerm  (term) {
    await this.isElementExisting($('input[data-testid="search-input"]'))
    await $('input[data-testid="search-input"]').setValue(term)
  }
  async selectSearchResult () {

   await this.isElementExisting($('div[data-testid="grid"] a:nth-of-type(4)'))
   await $('div[data-testid="grid"] a:nth-of-type(4)').click()

  }
}


module.exports = SimpleSearchPageObject
