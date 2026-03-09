import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PlaywrightPage extends BasePage {
  // 1. 必須要在這裡先宣告屬性及其類型
  readonly getStartedLink: Locator;
  readonly installationHeading: Locator; // <--- 檢查這行有沒有寫

  constructor(page: Page) {
    super(page);
    
    // 2. 在 constructor 裡初始化它們
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
}