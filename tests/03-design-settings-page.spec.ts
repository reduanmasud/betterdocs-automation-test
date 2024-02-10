import { test, expect } from '@playwright/test';
import { DesignSettings } from '../pom/pages/settings/design';


// Documentation Page > General

test("Has Header Design test", async ({page}) => {
  const settings = new DesignSettings({page});
  await settings.visitDesignSettingsPage();

  await expect(page.getByRole('heading', { name: 'Design' })).toBeVisible();
});


test("Has Customize BetterDocs Button Test", async ({ page }) => {
  const settings = new DesignSettings({page});
  await settings.visitDesignSettingsPage();

  await expect(page.getByRole('link', { name: 'Customize BetterDocs' })).toBeVisible();
})

test("Has Subtitle test",async ({page}) => {
  const settings = new DesignSettings({page});
  await settings.visitDesignSettingsPage();

  await expect(page.getByText('Design your templates & pages with live customizer')).toBeVisible();
})