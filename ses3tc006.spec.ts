import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Dynamic Loading' }).click();
  await expect(page.getByRole('heading', { name: 'Dynamically Loaded Page' })).toBeVisible();
  await page.getByRole('link', { name: 'Example 1: Element on page' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
});