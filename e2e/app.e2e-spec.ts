import { BmEmailSignaturePage } from './app.po';

describe('bm-email-signature App', () => {
  let page: BmEmailSignaturePage;

  beforeEach(() => {
    page = new BmEmailSignaturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
