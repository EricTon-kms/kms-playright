import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.getByRole('link', { name: 'File upload' })).toBeVisible();
  await page.getByRole('link', { name: 'File upload' }).click();
  await page.locator('#file-upload').click();
  await page.locator('#file-upload').setInputFiles('../Downloads/testupload.jpeg');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
  await expect(page.getByText('testupload.jpeg')).toBeVisible();
});