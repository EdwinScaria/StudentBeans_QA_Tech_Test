const { assert } = require('chai')

export default class ParentPageObject {
  async isElementEqualToExpected(element, expectedText) {
    const elementText = await element.getText()
    if (elementText !== expectedText) {
      throw new Error(`Expected text "${expectedText}" but found "${elementText}"`)
    }
  }
  // Checking if a element exists 
  async isElementExisting(element){
  const elementItem = await element.isExisting()
  if (elementItem !== true) {
    throw new Error(`Element is not existing`)
  }
  }
}
