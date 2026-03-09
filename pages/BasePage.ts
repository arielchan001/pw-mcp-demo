import { Page } from '@playwright/test';

export class BasePage {
  // constructor 必須接收 page 並存起來
  constructor(protected page: Page) {}

  // 確保這個方法名稱拼寫正確
  async navigate(url: string) {
    await this.page.goto(url);
  }
}