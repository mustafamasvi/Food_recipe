import { FoodRecipeDemoPage } from './app.po';

describe('food-recipe-demo App', () => {
  let page: FoodRecipeDemoPage;

  beforeEach(() => {
    page = new FoodRecipeDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
