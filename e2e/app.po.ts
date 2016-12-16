import { browser, element, by } from 'protractor';

export class UkeleokePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kw-root h1')).getText();
  }
}
