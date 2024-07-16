import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
  await page.getByRole('tab', { name: 'iFrame' }).click();
  await page.frameLocator('iframe[name="globalSqa"]').getByPlaceholder('Search...').click();
  await page.frameLocator('iframe[name="globalSqa"]').getByPlaceholder('Search...').fill('Playright');
  await page.frameLocator('iframe[name="globalSqa"]').getByRole('button').click();
  await expect(page.frameLocator('iframe[name="globalSqa"]').getByText('Sorry, no posts matched your')).toBeVisible();
});