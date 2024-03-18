import { Page } from "@playwright/test";
import { visitLayoutSettingsPage } from "./visit-layout-settings-page";

import type { Layout_menu, Layout_submenu } from './types';

type LayoutSettingsPageProps = {
    page : Page;
}


export  class LayoutSettings {
    page: Page;

    constructor ( { page } : LayoutSettingsPageProps ) {
        this.page = page;
    }

    // For Documentation Page > General
    option_category_title_link = () => this.page.locator("div.wprf-name-category_title_link");
    option_masonry = () => this.page.locator("div.wprf-name-masonry_layout");
    option_nested_sub_category = () => this.page.locator("div.wprf-name-nested_subcategory");
    option_number_of_columns = () => this.page.locator("div.wprf-name-column_number");
    option_number_of_docs = () => this.page.locator("div.wprf-name-posts_number");
    option_doc_count = () => this.page.locator("div.wprf-name-post_count");
    option_count_text = () => this.page.locator("div.wprf-name-count_text");
    option_count_text_singular = () => this.page.locator("div.wprf-name-count_text_singular");
    option_explore_more_button = () => this.page.locator("div.wprf-name-exploremore_btn");
    option_explore_more_button_text = () => this.page.locator("div.wprf-name-exploremore_btn_txt");
    option_popular_docs_text = () => this.page.locator("div.wprf-name-betterdocs_popular_docs_text");
    option_popular_docs_number = () => this.page.locator("div.wprf-name-betterdocs_popular_docs_number");

    // For Documentation Page > Search
    option_live_search = () => this.page.locator("div.wprf-name-live_search");
    option_advanced_search = () => this.page.locator("div.wprf-name-advance_search");
    option_category_search = () => this.page.locator("div.wprf-name-child_category_exclude");
    option_minimum_amount_of_keywords_search = () => this.page.locator("div.wprf-name-popular_keyword_limit");
    option_minimum_character_limit_for_search_result = () => this.page.locator("div.wprf-name-search_letter_limit");
    option_search_placeholder = () => this.page.locator("div.wprf-name-search_placeholder");
    option_search_button_text = () => this.page.locator("div.wprf-name-search_button_text");
    option_search_not_found_text = () => this.page.locator("div.wprf-name-search_not_found_text");
    option_search_result_image = () => this.page.locator("div.wprf-name-search_result_image");

    // For Documentation Page > Order By
    option_terms_order_by = () => this.page.locator("div.wprf-name-terms_orderby");
    option_terms_order = () => this.page.locator("div.wprf-name-terms_order");
    option_docs_order_by = () => this.page.locator("div.wprf-name-alphabetically_order_post");
    option_docs_order = () => this.page.locator("div.wprf-name-docs_order");


    // For Single Doc > General
    option_doc_title = () => this.page.locator("div.wprf-name-enable_post_title");
    option_sidebar_category_list = () => this.page.locator("div.wprf-name-enable_sidebar_cat_list");
    option_print_icon = () => this.page.locator("div.wprf-name-enable_print_icon")
    option_tags = () => this.page.locator("div.wprf-name-enable_tags");
    option_last_update_time = () => this.page.locator("div.wprf-name-show_last_update_time");
    option_navigation = () => this.page.locator("div.wprf-name-enable_navigation");
    option_comment = () => this.page.locator("div.wprf-name-enable_comment");
    option_credit = () => this.page.locator("div.wprf-name-enable_credit");
    option_estimated_reading_time = () => this.page.locator("div.wprf-name-enable_estimated_reading_time");


    // For Single Doc > TOC
    option_table_of_contents = () => this.page.locator("div.wprf-name-enable_toc");
    option_toc_title = () => this.page.locator("div.wprf-name-toc_title");
    option_toc_hierarchy = () => this.page.locator("div.wprf-name-toc_hierarchy");
    option_toc_list_number = () => this.page.locator("div.wprf-name-toc_list_number")
    option_show_toc_title_in_anchor_links = () => this.page.locator("div.wprf-name-toc_dynamic_title")
    option_sticky_toc = () => this.page.locator("div.wprf-name-enable_sticky_toc");
    option_collapsible_toc_on_small_device = () => this.page.locator("div.wprf-name-collapsible_toc_mobile");
    option_title_line_copy_to_clipboard = () => this.page.locator("div.wprf-name-title_link_ctc");
    option_toc_supported_heading_tag = () => this.page.locator("div.wprf-name-supported_heading_tag");
    option_content_offset = () => this.page.locator("div.wprf-name-sticky_toc_offset");

    // For Single Doc > Breadcrumb

    option_breadcrumb = () => this.page.locator("div.wprf-name-enable_breadcrumb");
    option_breadcrumb_home_text = () => this.page.locator("div.wprf-name-breadcrumb_home_text");
    option_breadcrumb_home_url = () => this.page.locator("div.wprf-name-breadcrumb_home_url");
    option_category_on_breadcrumb = () => this.page.locator("div.wprf-name-enable_breadcrumb_category");
    option_title_on_breadcrumb = () => this.page.locator("div.wprf-name-enable_breadcrumb_title");

    // For Single Doc > Email Feedback
    option_email_feedback = () => this.page.locator("div.wprf-name-email_feedback");
    option_feedback_link_text = () => this.page.locator("div.wprf-name-feedback_link_text");
    option_feedback_form_title = () => this.page.locator("div.wprf-name-feedback_form_title");
    option_email_address = () => this.page.locator("div.wprf-name-email_address");
    option_feedback_url = () => this.page.locator("div.wprf-name-feedback_url");



    // For Next Next Release 
    // For Single Doc > Attachments
    option_show_attachment = () => this.page.locator("div.wprf-name-show_attachment");
    option_attachment_label = () => this.page.locator("div.wprf-name-attachment_label");
    option_attachment_default_file_name_format = () => this.page.locator("div.wprf-name-attachment_file_name_format");
    option_show_attachment_size = () => this.page.locator("div.wprf-name-show_attachment_size");
    option_show_attachment_icon = () => this.page.locator("div.wprf-name-show_attachment_icon");
    option_open_attachment_in_new_tab = () => this.page.locator("div.wprf-name-attachment_new_tab");
    option_image_icon = () => this.page.locator("div.wprf-name-attachment_image_icon");
    option_pdf_file_icon = () => this.page.locator("div.wprf-name-attachment_pdf_icon");
    option_csv_file_icon = () => this.page.locator("div.wprf-name-attachment_csv_icon");
    option_word_file_icon = () => this.page.locator("div.wprf-name-attachment_wordfile_icon");
    option_zip_file_icon = () => this.page.locator("div.wprf-name-attachment_zip_icon");
    option_audio_file_icon = () => this.page.locator("div.wprf-name-attachment_audio_icon");
    option_video_file_icon = () => this.page.locator("div.wprf-name-attachment_video_icon");
    option_text_file_icon = () => this.page.locator("div.wprf-name-attachment_text_icon");
    option_default_file_icon = () => this.page.locator("div.wprf-name-attachment_default_icon");
    

    // For Next Next Release 
    // For Sinngle Doc > Related Docs
    option_show_related_docs = () => this.page.locator("div.wprf-name-show_related_docs");



    // For Archive Page
    option_archive_sidebar_category_list = () => this.page.locator('div.wprf-name-enable_archive_sidebar');
    option_nested_subcategory = () => this.page.locator('div.wprf-name-archive_nested_subcategory');


    /** @borrow visitGeneralSettingsPage at this.visitLayoutSettingsPage */
    visitLayoutSettingsPage: typeof visitLayoutSettingsPage = visitLayoutSettingsPage.bind(this);

}