import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class GibabaLoginPage extends BasePage {
  readonly accountInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    // 從你的錄製內容中提取的定位器
    this.accountInput = page.getByRole('textbox', { name: '請輸入帳號' });
    this.passwordInput = page.getByRole('textbox', { name: '請輸入密碼' });
    this.loginButton = page.getByRole('button', { name: '登入' });
  }

  // 封裝成一個行為 (Action)
  async login(username: string, pass: string) {
    await this.accountInput.fill(username);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}