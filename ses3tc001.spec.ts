import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await expect(page.getByRole('heading', { name: 'Checkboxes' })).toBeVisible();
  await page.getByText('checkbox 1').getByRole('checkbox').first().check();
  // await page.getByRole('checkbox').first().check();
  await page.getByText('checkbox 2').getByRole('checkbox').nth(1).uncheck();
});