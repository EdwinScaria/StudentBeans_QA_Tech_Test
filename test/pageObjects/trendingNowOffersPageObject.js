import ParentPageObject from './parentPageObject'

class TrendingNowOffersPageObject extends ParentPageObject {
  async goToHomePage() {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('/uk')
  }
  async acceptCookies() {
    await this.isElementEqualToExpected($('button=Accept All Cookies'), 'Accept All Cookies')
    await $('button=Accept All Cookies').click()
  }
  async verifyHomePage() {
    await this.isElementEqualToExpected($('h2=Win a £200 schuh gift card'), 'Win a £200 schuh gift card')
  }
  async clickOnTrendingNow() {
    await this.isElementEqualToExpected($('a[data-testid=nav-category-trending-now]'), 'Trending Now')
    await $('a[data-testid=nav-category-trending-now]').click()
  }
  async selectDiscount() {
    // existing element is used to check whether that the element exists rahter than checking for a phrase, as the name of the offer can change. 
    await this.isElementExisting($('div[data-testid="grid"] article:nth-of-type(6)'))
    await $('div[data-testid="grid"] article:nth-of-type(6)').click()

  }

}

module.exports = TrendingNowOffersPageObject
