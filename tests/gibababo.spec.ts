import { test, expect } from '@playwright/test';
import { GibabaLoginPage } from '../pages/gibababoPage';

test('Gibaba 後台登入測試', async ({ page }) => {
  const loginPage = new GibabaLoginPage(page);

  // 1. 前往網站
  await loginPage.navigate('https://bo.gibaba.com/');

  // 2. 執行登入
  await loginPage.login('ariel01', 'ariel01');

  // 3. 驗證 (建議增加一個登入後的檢查，例如網址改變或看到登出按鈕)
  // await expect(page).toHaveURL(/.*dashboard/); 
});