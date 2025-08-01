import { test, expect } from '@playwright/test';
import { saucedemoPage } from '../pages/saucedemoObject';

test.beforeEach(async ({ page }) => {

  const sipalay = new saucedemoPage(page);
  console.log('login...');
  await sipalay.gotothiswebsite();
  await sipalay.login('standard_user','secret_sauce');

  // await page.goto('https://www.saucedemo.com/');
  // await page.getByText('Swag Labs').click();
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('secret_sauce');
  // await page.locator('[data-test="login-button"]').click();
});

test('addcart', async ({ page }) => {
  const sipalay = new saucedemoPage(page);
  console.log('add to cart....');
  sipalay.addcart();

  // await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  // await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
});

test('logout', async ({ page }) => {
  const sipalay = new saucedemoPage(page);
  console.log('logout...');
  sipalay.logout();
  // await page.getByRole('button', { name: 'Open Menu' }).click();
  // await page.locator('[data-test="logout-sidebar-link"]').click();
});