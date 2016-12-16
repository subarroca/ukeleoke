import { UkeleokePage } from './app.po';

describe('ukeleoke App', function() {
  let page: UkeleokePage;

  beforeEach(() => {
    page = new UkeleokePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('kw works!');
  });
});
