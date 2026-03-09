import { test, expect } from '@playwright/test';
import { PlaywrightPage } from '../pages/PlaywrightPage';

test('應該能成功進入安裝指南頁面', async ({ page }) => {
  const pwPage = new PlaywrightPage(page);

  // 1. 前往頁面
  await pwPage.navigate('https://playwright.dev/');

  // 2. 執行點擊
  await pwPage.clickGetStarted();

  // 3. 驗證標題
  await expect(pwPage.installationHeading).toBeVisible();
}); // <--- 檢查這裡的括號是否正確閉合