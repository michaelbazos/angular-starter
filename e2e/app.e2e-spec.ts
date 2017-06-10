import { AngularStarterPage } from './app.po';

describe('angular-starter App', () => {
  let page: AngularStarterPage;

  beforeEach(() => {
    page = new AngularStarterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
