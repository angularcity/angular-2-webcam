import { CodePage } from './app.po';

describe('code App', () => {
  let page: CodePage;

  beforeEach(() => {
    page = new CodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
