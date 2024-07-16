import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByRole('link', { name: 'Dropdown' })).toBeVisible();
  await page.getByRole('link', { name: 'Dropdown' }).click();
  await page.locator('#dropdown').selectOption({label: 'Option 2'});
  await page.locator('#dropdown').selectOption('1');
  await page.locator('#dropdown').selectOption({value: '2'});
});