import { Ng2ModalPage } from './app.po';

describe('ng2-modal App', () => {
  let page: Ng2ModalPage;

  beforeEach(() => {
    page = new Ng2ModalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
