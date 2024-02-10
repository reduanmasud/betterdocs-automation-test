import { test, expect } from '@playwright/test';
import { LayoutSettings } from '../pom/pages/settings/layout';



// Documentation Page > General

test("Category Title Link option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_category_title_link().getByText("Category Title Link")).toBeVisible();
  await expect(settings.option_category_title_link().getByText("This setting is applicable for category grid layout")).toBeVisible();
  await expect(settings.option_category_title_link().getByText("Enabled").or(settings.option_category_title_link().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_category_title_link().getByRole('checkbox')).toBeVisible();
});


test("Masonry option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_masonry().getByText("Masonry")).toBeVisible();
  await expect(settings.option_masonry().getByText("Enabled").or(settings.option_masonry().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_masonry().getByRole('checkbox')).toBeVisible();
});

test("Nested Sub Category option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_nested_sub_category().getByText("Nested Sub Category")).toBeVisible();
  await expect(settings.option_nested_sub_category().getByText("Enabled").or(settings.option_nested_sub_category().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_nested_sub_category().getByRole('checkbox')).toBeVisible();
});

test("Number Of Columns option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_number_of_columns().getByText("Number Of Columns")).toBeVisible();
  await expect(settings.option_number_of_columns().getByPlaceholder('Number Of Columns')).toBeVisible();
});

test("Number Of Docs option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_number_of_docs().getByText("Number Of Docs")).toBeVisible();
  await expect(settings.option_number_of_docs().getByText("This setting is not applicable for handbook layout.")).toBeVisible();
  await expect(settings.option_number_of_docs().getByPlaceholder('Number Of Docs')).toBeVisible();
});

test("Doc Count option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_doc_count().getByText("Doc Count")).toBeVisible();
  await expect(settings.option_doc_count().getByText("Enabled").or(settings.option_doc_count().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_doc_count().getByRole('checkbox')).toBeVisible();
});

test("Count Text option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_count_text().getByText("Count Text")).toBeVisible();
  await expect(settings.option_count_text().getByRole('textbox')).toBeVisible();
});

test("Count Text Singular option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_count_text_singular().getByText("Count Text Singular")).toBeVisible();
  await expect(settings.option_count_text_singular().getByRole('textbox')).toBeVisible();
});

test("Explore More Button option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_explore_more_button().getByText("Explore More Button")).toBeVisible();
  await expect(settings.option_explore_more_button().getByText("Enabled").or(settings.option_explore_more_button().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_explore_more_button().getByRole('checkbox')).toBeVisible();
});

test("Explore More Button Text option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_explore_more_button_text().getByText("Explore More Button Text")).toBeVisible();
  await expect(settings.option_explore_more_button_text().getByRole('textbox')).toBeVisible();
});

test("Popular Docs Text option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_popular_docs_text().getByText("Popular Docs Text")).toBeVisible();
  await expect(settings.option_popular_docs_text().getByRole('textbox')).toBeVisible();
});

test("Popular Docs Number option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "General"});

  await expect(settings.option_popular_docs_number().getByText("Popular Docs Number")).toBeVisible();
  await expect(settings.option_popular_docs_number().getByPlaceholder('Popular Docs Number')).toBeVisible();
});


// Documantation Page > Search
test("Live Search option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_live_search().getByText("Live Search")).toBeVisible();
  await expect(settings.option_live_search().getByText("Enabled").or(settings.option_live_search().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_live_search().getByRole('checkbox')).toBeVisible();
});

test("Advanced Search option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_advanced_search().getByText("Advanced Search")).toBeVisible();
  await expect(settings.option_advanced_search().getByText("Enabled").or(settings.option_advanced_search().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_advanced_search().getByRole('checkbox')).toBeVisible();
});

test("Category Search option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_category_search().getByText("Category Search")).toBeVisible();
  await expect(settings.option_category_search().getByText("Enabled").or(settings.option_category_search().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_category_search().getByRole('checkbox')).toBeVisible();
});

test("Minimum amount of Keywords Search option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_minimum_amount_of_keywords_search().getByText("Minimum amount of Keywords Search")).toBeVisible();
  await expect(settings.option_minimum_amount_of_keywords_search().getByPlaceholder('Minimum amount of Keywords')).toBeVisible();
});

test("Minimum Character Limit For Search Result option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_minimum_character_limit_for_search_result().getByText("Minimum Character Limit For Search Result")).toBeVisible();
  await expect(settings.option_minimum_character_limit_for_search_result().getByPlaceholder('Minimum Character Limit For')).toBeVisible();
});

test("Search Placeholder option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_search_placeholder().getByText("Search Placeholder")).toBeVisible();
  await expect(settings.option_search_placeholder().getByRole('textbox')).toBeVisible();
});

test("Search Button Text option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_search_button_text().getByText("Search Button Text")).toBeVisible();
  await expect(settings.option_search_button_text().getByRole('textbox')).toBeVisible();
});

test("Search Not Found Text option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_search_not_found_text().getByText("Search Not Found Text")).toBeVisible();
  await expect(settings.option_search_not_found_text().getByRole('textbox')).toBeVisible();
});

test("Search Result Image option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Search"});

  await expect(settings.option_search_result_image().getByText("Search Result Image")).toBeVisible();
  await expect(settings.option_search_result_image().getByText("Enabled").or(settings.option_masonry().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_search_result_image().getByRole('checkbox')).toBeVisible();
});


// For Documentation Page > Order By
test("Terms Order By option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Order By"});

  await expect(settings.option_terms_order_by().getByText("Terms Order By")).toBeVisible();
  await expect(settings.option_terms_order_by().getByRole('combobox')).toBeVisible();
});

test("Terms Order option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Order By"});

  await expect(settings.option_terms_order().getByText("Terms Order")).toBeVisible();
  await expect(settings.option_terms_order().getByRole('combobox')).toBeVisible();
});

test("Docs Order By option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Order By"});

  await expect(settings.option_docs_order_by().getByText("Docs Order By")).toBeVisible();
  await expect(settings.option_docs_order_by().getByRole('combobox')).toBeVisible();
});

test("Docs Order option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Documentation Page", sub_menu : "Order By"});

  await expect(settings.option_docs_order().getByText("Docs Order")).toBeVisible();
  await expect(settings.option_docs_order().getByRole('combobox')).toBeVisible();
});


// For Single Doc > General
test("Doc Title option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_doc_title().getByText("Doc Title")).toBeVisible();
  await expect(settings.option_doc_title().getByText("Enabled").or(settings.option_doc_title().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_doc_title().getByRole('checkbox')).toBeVisible();
});

test("Sidebar Category List option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_sidebar_category_list().getByText("Sidebar Category List")).toBeVisible();
  await expect(settings.option_sidebar_category_list().getByText("Enabled").or(settings.option_sidebar_category_list().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_sidebar_category_list().getByRole('checkbox')).toBeVisible();
});

test("Print Icon option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_print_icon().getByText("Print Icon")).toBeVisible();
  await expect(settings.option_print_icon().getByText("Enabled").or(settings.option_print_icon().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_print_icon().getByRole('checkbox')).toBeVisible();
});

test("Tags option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_tags().getByText("Tags")).toBeVisible();
  await expect(settings.option_tags().getByText("Enabled").or(settings.option_tags().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_tags().getByRole('checkbox')).toBeVisible();
});

test("Last Update Time option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_last_update_time().getByText("Last Update Time")).toBeVisible();
  await expect(settings.option_last_update_time().getByText("Enabled").or(settings.option_last_update_time().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_last_update_time().getByRole('checkbox')).toBeVisible();
});

test("Navigation option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_navigation().getByText("Navigation")).toBeVisible();
  await expect(settings.option_navigation().getByText("Enabled").or(settings.option_navigation().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_navigation().getByRole('checkbox')).toBeVisible();
});

test("Comment option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_comment().getByText("Comment")).toBeVisible();
  await expect(settings.option_comment().getByText("Enabled").or(settings.option_comment().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_comment().getByRole('checkbox')).toBeVisible();
});

test("Credit option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "General"});

  await expect(settings.option_credit().getByText("Credit")).toBeVisible();
  await expect(settings.option_credit().getByText("Enabled").or(settings.option_credit().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_credit().getByRole('checkbox')).toBeVisible();
});

// For Single Doc > TOC
test("Table of Contents option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_table_of_contents().getByText("Table of Contents")).toBeVisible();
  await expect(settings.option_table_of_contents().getByText("Enabled").or(settings.option_table_of_contents().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_table_of_contents().getByRole('checkbox')).toBeVisible();
});

test("TOC Title option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_toc_title().getByText("TOC Title")).toBeVisible();
  await expect(settings.option_toc_title().getByRole('textbox')).toBeVisible();
});

test("TOC Hierarchy option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_toc_hierarchy().getByText("TOC Hierarchy")).toBeVisible();
  await expect(settings.option_toc_hierarchy().getByText("Enabled").or(settings.option_toc_hierarchy().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_toc_hierarchy().getByRole('checkbox')).toBeVisible();
});

test("TOC List Number option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_toc_list_number().getByText("TOC List Number")).toBeVisible();
  await expect(settings.option_toc_list_number().getByText("Enabled").or(settings.option_masonry().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_toc_list_number().getByRole('checkbox')).toBeVisible();
});

test("Show TOC Title in Anchor Links option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_show_toc_title_in_anchor_links().getByText("Show TOC Title in Anchor Links")).toBeVisible();
  await expect(settings.option_show_toc_title_in_anchor_links().getByText("Enabled").or(settings.option_show_toc_title_in_anchor_links().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_show_toc_title_in_anchor_links().getByRole('checkbox')).toBeVisible();
});

test("Sticky TOC option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_sticky_toc().getByText("Sticky TOC")).toBeVisible();
  await expect(settings.option_sticky_toc().getByText("Enabled").or(settings.option_sticky_toc().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_sticky_toc().getByRole('checkbox')).toBeVisible();
});

test("Collapsible TOC on small devices option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_collapsible_toc_on_small_device().getByText("Collapsible TOC on small devices")).toBeVisible();
  await expect(settings.option_collapsible_toc_on_small_device().getByText("Enabled").or(settings.option_collapsible_toc_on_small_device().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_collapsible_toc_on_small_device().getByRole('checkbox')).toBeVisible();
});

test("Title Link Copy To Clipboard option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_title_line_copy_to_clipboard().getByText("Title Link Copy To Clipboard")).toBeVisible();
  await expect(settings.option_title_line_copy_to_clipboard().getByText("Enabled").or(settings.option_title_line_copy_to_clipboard().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_title_line_copy_to_clipboard().getByRole('checkbox')).toBeVisible();
});

test("TOC Supported Heading Tag option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_toc_supported_heading_tag().locator('label').filter({ hasText: 'TOC Supported Heading Tag' })).toBeVisible();
  await expect(settings.option_toc_supported_heading_tag().getByRole('combobox')).toBeVisible();
});

test("Content Offset option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "TOC"});

  await expect(settings.option_content_offset().getByText("Content Offset",{exact: true})).toBeVisible();
  await expect(settings.option_content_offset().getByText("content offset from top on scroll.")).toBeVisible();
  await expect(settings.option_content_offset().getByPlaceholder('Content Offset')).toBeVisible();
});

// For Single Doc > Breadcrumb
test("Breadcrumb option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Breadcrumb"});

  await expect(settings.option_breadcrumb().getByText("Breadcrumb")).toBeVisible();
  await expect(settings.option_breadcrumb().getByText("Enabled").or(settings.option_breadcrumb().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_breadcrumb().getByRole('checkbox')).toBeVisible();
});

test("Breadcrumb Home Text option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Breadcrumb"});

  await expect(settings.option_breadcrumb_home_text().getByText("Breadcrumb Home Text")).toBeVisible();
  await expect(settings.option_breadcrumb_home_text().getByRole('textbox')).toBeVisible();
});

test("Breadcrumb Home URL option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Breadcrumb"});

  await expect(settings.option_breadcrumb_home_url().getByText("Breadcrumb Home URL")).toBeVisible();
  await expect(settings.option_breadcrumb_home_url().getByRole('textbox')).toBeVisible();
});

test("Category on Breadcrumb option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Breadcrumb"});

  await expect(settings.option_category_on_breadcrumb().getByText("Category on Breadcrumb")).toBeVisible();
  await expect(settings.option_category_on_breadcrumb().getByText("Enabled").or(settings.option_category_on_breadcrumb().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_category_on_breadcrumb().getByRole('checkbox')).toBeVisible();
});

test("Title on Breadcrumb option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Breadcrumb"});

  await expect(settings.option_title_on_breadcrumb().getByText("Title on Breadcrumb")).toBeVisible();
  await expect(settings.option_title_on_breadcrumb().getByText("Enabled").or(settings.option_title_on_breadcrumb().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_title_on_breadcrumb().getByRole('checkbox')).toBeVisible();
});


// For Single Doc > Email Feedback
test("Email Feedback option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Email Feedback"});

  await expect(settings.option_email_feedback().getByText("Email Feedback")).toBeVisible();
  await expect(settings.option_email_feedback().getByText("Enabled").or(settings.option_email_feedback().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_email_feedback().getByRole('checkbox')).toBeVisible();
});

test("Feedback Link Text option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Email Feedback"});

  await expect(settings.option_feedback_link_text().getByText("Feedback Link Text")).toBeVisible();
  await expect(settings.option_feedback_link_text().getByRole('textbox')).toBeVisible();
});

test("Feedback Form Title option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Email Feedback"});

  await expect(settings.option_feedback_form_title().getByText("Feedback Form Title")).toBeVisible();
  await expect(settings.option_feedback_form_title().getByRole('textbox')).toBeVisible();
});

test("Email Address option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Email Feedback"});

  await expect(settings.option_email_address().getByText("Email Address", {exact: true})).toBeVisible();
  await expect(settings.option_email_address().getByText("The email address where the Feedback form will be sent")).toBeVisible();
  await expect(settings.option_email_address().getByRole('textbox')).toBeVisible();
});

test("Feedback URL option test", async ({page}) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Email Feedback"});

  await expect(settings.option_feedback_url().getByText("Feedback URL")).toBeVisible();
  await expect(settings.option_feedback_url().getByRole('textbox')).toBeVisible();
});

// Single Docs > Attachment 
test("Attachment > Show Attachment Option test",async ({ page }) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu:"Single Doc", sub_menu: "Attachments"});

  await expect(settings.option_show_attachment().getByText("Show Attachment", {exact: true})).toBeVisible();
  await expect(settings.option_show_attachment().getByText("Enabled").or(settings.option_show_attachment().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_show_attachment().getByRole('checkbox')).toBeVisible();
})


test("Attachment > Attachment Label test",async ({ page }) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu:"Single Doc", sub_menu: "Attachments"});

  await expect(settings.option_attachment_label().getByText("Attachment Label", {exact: true})).toBeVisible();
  await expect(settings.option_attachment_label().getByText("This setting changes the attachment title in single docs")).toBeVisible();
  await expect(settings.option_attachment_label().getByRole('textbox').getByPlaceholder('Attachment Label')).toBeVisible();
})


test("Attachment > Attachment Default File Name Format test",async ({ page }) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu:"Single Doc", sub_menu: "Attachments"});

  await expect(settings.option_attachment_default_file_name_format().getByText("Attachment Default File Name Format", {exact: true})).toBeVisible();
  await expect(settings.option_attachment_default_file_name_format().getByText("This setting is not applicable for external type of files")).toBeVisible();
  await expect(settings.option_attachment_default_file_name_format().getByRole('textbox').getByPlaceholder('Attachment Default File Name Format')).toBeVisible();
})

test("Attachment > Show Attachment Size Option test",async ({ page }) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu:"Single Doc", sub_menu: "Attachments"});

  await expect(settings.option_show_attachment_size().getByText("Show Attachment Size", {exact: true})).toBeVisible();
  await expect(settings.option_show_attachment_size().getByText("Enabled").or(settings.option_show_attachment_size().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_show_attachment_size().getByRole('checkbox')).toBeVisible();
})

test("Attachment > Show Attachment Icon Option test",async ({ page }) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu:"Single Doc", sub_menu: "Attachments"});

  await expect(settings.option_show_attachment_icon().getByText("Show Attachment Icon", {exact: true})).toBeVisible();
  await expect(settings.option_show_attachment_icon().getByText("Enabled").or(settings.option_show_attachment_icon().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_show_attachment_icon().getByRole('checkbox')).toBeVisible();
})

test("Attachment > Open Attachment In New Tab Option test",async ({ page }) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu:"Single Doc", sub_menu: "Attachments"});

  await expect(settings.option_open_attachment_in_new_tab().getByText("Open Attachment In New Tab", {exact: true})).toBeVisible();
  await expect(settings.option_open_attachment_in_new_tab().getByText("Enabled").or(settings.option_open_attachment_in_new_tab().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_open_attachment_in_new_tab().getByRole('checkbox')).toBeVisible();
})

// Single Docs > Related Docs 
test("Related Docs > Show Related Docs Option test",async ({ page }) => {
  const settings = new LayoutSettings({page});
  await settings.visitLayoutSettingsPage({menu:"Single Doc", sub_menu: "Related Docs"});

  await expect(settings.option_show_related_docs().getByText("Show Related Docs", {exact: true})).toBeVisible();
  await expect(settings.option_show_related_docs().getByText("Enabled").or(settings.option_show_related_docs().getByText("Disabled"))).toBeVisible();
  await expect(settings.option_show_related_docs().getByRole('checkbox')).toBeVisible();
})

// test("Masonry option test", async ({page}) => {
//   const settings = new LayoutSettings({page});
//   await settings.visitLayoutSettingsPage({menu: "Single Doc", sub_menu : "Breadcrumb"});

//   await expect(settings.option_masonry().getByText("Masonry")).toBeVisible();
//   await expect(settings.option_masonry().getByText("Enabled").or(settings.option_masonry().getByText("Disabled"))).toBeVisible();
//   await expect(settings.option_masonry().getByRole('checkbox')).toBeVisible();
// });


