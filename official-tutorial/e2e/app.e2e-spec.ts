import { OfficialTutorialPage } from './app.po';

describe('official-tutorial App', () => {
  let page: OfficialTutorialPage;

  beforeEach(() => {
    page = new OfficialTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
