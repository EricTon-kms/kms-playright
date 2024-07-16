import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#name').click();
  await page.locator('#name').fill('Long Ton');
  await page.locator('#textarea').click();
  await page.locator('#textarea').fill('02 tan vien F2 Q Tan binh');
  await page.getByLabel('name').click();
  await page.getByLabel('name').clear();
  await page.getByLabel('Address:').click();
  await page.getByLabel('Address:').clear();
});