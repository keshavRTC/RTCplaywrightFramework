import { test, expect } from '@playwright/test';
import { JsonLocatorReader } from 'utils/jsonLocatorReader';
import path from 'path';
import { NavigationPage } from '../../src/pages/navigationPage';

const jsonPath = path.resolve(__dirname, '../../src/locators/footer.json');
const jsonReader = new JsonLocatorReader(jsonPath);
const footerLocators = jsonReader.getHeaders();

test.describe('Apply Now Page', () => {
  test('Form should be visible', async ({ page }) => {
    const navPage = new NavigationPage(page);
    await navPage.gotoHome();
    await navPage.clickApplyNow();
    await page.locator(footerLocators.apply.applyBtnClick).click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator(footerLocators.apply.formVisible)).toBeVisible();
  });
});

test.describe('Contact Us Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://rtctek.com/');
  });

  test('Contact form should be visible', async ({ page }) => {
    await page.locator(footerLocators.contact.clickOnContactUs).click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator(footerLocators.contact.form)).toBeVisible();
  });

  test('Click on India Office tab and check text', async ({ page }) => {
    await page.locator(footerLocators.contact.clickOnContactUs).click();
    await page.waitForLoadState('networkidle');
    await page.locator(footerLocators.contact["India Office"]).click();
    await expect(page.locator(footerLocators.contact.indianOfficeText)).toBeVisible();
  });

  test('Find us on map section should be visible', async ({ page }) => {
    await page.locator(footerLocators.contact.clickOnContactUs).click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator(footerLocators.contact.findUsOnMap)).toBeVisible();
  });
});

test.describe('About Us Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://rtctek.com/');
  });

  test('Click Contact Us inside About, validate and go back', async ({ page }) => {
    await page.locator(footerLocators.about.clickonAboutUs).click();
    await page.waitForLoadState('networkidle');
    await page.locator(footerLocators.about["Contact Us"]).click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/.*contact-us/);
    await page.goBack();
  });

  test('Click right and left slider', async ({ page }) => {
    await page.locator(footerLocators.about.clickonAboutUs).click();
    await page.waitForLoadState('networkidle');
    await page.locator(footerLocators.about.rightButton).click();
    await page.locator(footerLocators.about.leftButton).click();
    await expect(page.locator('article')).toBeVisible(); // fallback
  });

  test('Hover on DevOps Solution and validate info', async ({ page }) => {
    await page.locator(footerLocators.about.clickonAboutUs).click();
    await page.waitForLoadState('networkidle');
    await page.locator(footerLocators.about.hovering).hover();
    await expect(page.locator(footerLocators.about.hoveringText)).toBeVisible();
  });
});

test.describe('Get a Quote Page', () => {
  test('Form should be visible', async ({ page }) => {
    await page.goto('https://rtctek.com/');
    await page.locator(footerLocators.getAQuote.clickOnGetAQuote).click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator(footerLocators.getAQuote.quoteFormVisible)).toBeVisible();
  });
});
