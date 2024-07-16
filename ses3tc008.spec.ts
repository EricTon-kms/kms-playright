import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.getByRole('button', {name: 'Prompt'}).click();

//    // Enable dialog window handler 
//    page.on('dialog', async dialog=>{
//     expect(dialog.type()).toContain('prompt');
//     expect(dialog.message()).toContain('Please enter your name:');
//     expect(dialog.defaultValue()).toContain('Harry Potter');
//     await dialog.accept('Eric Ton');
//     })

//   await expect(page.getByText('Hello Eric Ton! How are you today?')).toBeVisible();

    // Enable dialog window handler 
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Lam');
    })

    await page.click('//button[normalize-space()="Prompt"]');

    await expect(page.locator('#demo')).toHaveText('Hello Lam! How are you today?');
    page.setDefaultTimeout(3000);
});