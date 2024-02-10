import { test, expect } from '@playwright/test';
import { GeneralSettings } from '../pom/pages/settings/general';

test('has General Settings title', async ({ page }) => {
  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();

  await expect(page.getByRole('heading',{name: `General Settings`, exact: true})).toBeVisible();
});

test('Multiple Knowledge Base options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  // const option_multiple_kb = page.locator("div.wprf-name-multiple_kb");
  // const option_builtin_doc_page = page.locator("div.wprf-name-builtin_doc_page");
  // const option_breadcrumb_doc_title = page.locator("div.wprf-name-breadcrumb_doc_title");
  // const option_docs_slug = page.locator("div.wprf-name-docs_slug");
  // const option_category_slug = page.locator("div.wprf-name-category_slug");
  // const option_permalink_structure = page.locator("div.wprf-name-permalink_sTructure");
  // const option_faq_scheme = page.locator("div.wprf-name-enable_faq_schema");
  // const option_enalytics_from = page.locator("div.wprf-name-analytics_form");
  // const option_exclude_bot_analytics = page.locator("div.wprf-name-exclude_bot_analytics");

  await expect(settings.option_multiple_kb().getByText("Multiple Knowledge Base")).toBeVisible();
  await expect(settings.option_multiple_kb().getByText("Enabled").or(settings.option_multiple_kb().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_multiple_kb().getByRole('checkbox')).toBeVisible();
});

test('Built-in Documentation Page options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_builtin_doc_page().getByText("Built-in Documentation Page")).toBeVisible();
  await expect(settings.option_builtin_doc_page().getByText("If you disable root slug for KB Archives, your individual knowledge base URL will be like this: https://example.com/knowledgebase-1")).toBeVisible();
  await expect(settings.option_builtin_doc_page().getByText("Enabled").or(settings.option_builtin_doc_page().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_builtin_doc_page().getByRole('checkbox')).toBeVisible();
});

test('Document Page Title options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_breadcrumb_doc_title().getByText("Documentation Page Title")).toBeVisible();
  await expect(settings.option_breadcrumb_doc_title().getByRole('textbox')).toBeVisible();
});

test('Document Root Slug options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_docs_slug().getByText("BetterDocs Root Slug")).toBeVisible();
  await expect(settings.option_docs_slug().getByRole('textbox')).toBeVisible();
});

test('Custom Category Slug options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_category_slug().getByText("Custom Category Slug")).toBeVisible();
  await expect(settings.option_category_slug().getByRole('textbox')).toBeVisible();
});

test('Single Docs Permalink options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_permalink_structure().getByText("Single Docs Permalink",{exact: true})).toBeVisible();
  await expect(settings.option_permalink_structure().getByText("Make sure to keep Docs Root Slug in the Single Docs Permalink. You are not able to keep it blank. You can use the available tags from below.")).toBeVisible();
  await expect(settings.option_permalink_structure().getByRole('textbox')).toBeVisible();
  await expect(settings.option_permalink_structure().getByText("%doc_category%")).toBeVisible();
  // await expect(settings.option_permalink_structure().getByText("%knowledge_base%")).toBeVisible();

});

test('FAQ Schema options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_faq_scheme().getByText("FAQ Schema")).toBeVisible();
  await expect(settings.option_faq_scheme().getByText("Enabled").or(settings.option_faq_scheme().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_faq_scheme().getByRole('checkbox')).toBeVisible();
});

test('Analytics From options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_analytics_from().getByText("Analytics From")).toBeVisible();
  await expect(settings.option_analytics_from().getByRole('combobox')).toBeVisible();
});

test('Exclude Bot Analytics options test', async ({ page }) => {

  const settings = new GeneralSettings({page});
  await settings.visitGeneralSettingsPage();
  
  await expect(settings.option_exclude_bot_analytics().getByText("Exclude Bot Analytics")).toBeVisible();
  await expect(settings.option_exclude_bot_analytics().getByText("Enabled").or(settings.option_exclude_bot_analytics().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_exclude_bot_analytics().getByRole('checkbox')).toBeVisible();
});