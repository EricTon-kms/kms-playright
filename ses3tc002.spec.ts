import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByRole('link', { name: 'Drag and Drop' })).toBeVisible();
  await page.getByRole('link', { name: 'Drag and Drop' }).click();
  await page.locator('#column-a').dragTo(page.locator('#column-b'));
});