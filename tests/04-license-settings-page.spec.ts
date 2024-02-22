import { test, expect } from '@playwright/test';
// import { DesignSettings } from '../pom/pages/settings/design';
import { LicenseSettings } from '../pom/pages/settings/license';


// Lisence

test("Showing 'Liscence' header test", async ({page}) => {
  const settings = new LicenseSettings({page});
  await settings.visitLicenseSettingsPage();
  
  await expect(page.getByRole('heading', { name: 'License' })).toBeVisible();
});


// test("Has Customize BetterDocs Button Test", async ({ page }) => {
//   const settings = new DesignSettings({page});
//   await settings.visitDesignSettingsPage();

//   await expect(page.getByRole('link', { name: 'Customize BetterDocs' })).toBeVisible();
// })

// test("Has Subtitle test",async ({page}) => {
//   const settings = new DesignSettings({page});
//   await settings.visitDesignSettingsPage();

//   await expect(page.getByText('Design your templates & pages with live customizer')).toBeVisible();
// })