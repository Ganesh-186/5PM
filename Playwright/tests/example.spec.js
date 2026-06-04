


import {test,chromium } from '@playwright/test';
import { expect } from 'allure-playwright';

test('locate the element',async ({page}) => {
    await page.goto('https://demoqa.com/text-box/');
    await page.waitForTimeout(4000);
    
    await expect(page).toHaveURL('https://demoqa.com/text-box/')
    
});


