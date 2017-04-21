import { NgPinewoodDerbyPage } from './app.po';

describe('ng-pinewood-derby App', () => {
  let page: NgPinewoodDerbyPage;

  beforeEach(() => {
    page = new NgPinewoodDerbyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
