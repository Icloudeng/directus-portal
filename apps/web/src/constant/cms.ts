import { WithTranslation } from '@/types/directus';

export const IMAGE_PRESETS = {
  sliders: 'sliders',
  systemLargeContain: 'system-large-contain',
};

function modelsWithTranslation<T>(models: T): WithTranslation<T> {
  const $models: any = models;
  for (const key in $models) {
    $models[`${key}_translations`] = `${$models[key]}_translations`;
  }
  return $models as WithTranslation<T>;
}

export const CMS_MODELS = {
  ...modelsWithTranslation({
    languages: 'languages',
    topbar_links: 'TopbarLinks',
    news: 'News',
    footer_links: 'FooterLinks',
    footer_link_items: 'FooterLinkItems',
    company_details: 'CompanyDetails',
    navbar_links: 'NavbarLinks',
    pages: 'Pages',
    home_hero: 'HomeHero',
    home_sections: 'HomeSections',
  } as const),
  plans_pricing: {
    flexible_plans: 'FlexiblePlans',
    fixed_plans: 'FixedPlans',
    plans_comparisons: 'PlansComparisons',
    machine_templates: 'MachineTemplates',
    platforms: 'Platforms',
  } as const,
  generics: {
    page_sections: 'PageSections',
    page_sections_categories: 'PageSectionsCategories',
    reusable_page_sections: 'ReusablePageSections',
    reusable_page_sections_categories: 'ReusablePageSectionsCategories',
  } as const,
  section_templates: {
    st_values: 'ST_Values',
    st_navtabs: 'ST_NavTabs',
    st_card_carousels: 'ST_CardCarousels',
    st_card_image_carousels: 'ST_CardImageCarousels',
    st_sided_contents: 'ST_SidedContents',
    st_nav_accordions: 'ST_NavAccordions',
    st_clean_heros: 'ST_CleanHeros',
    st_page_aside_menus: 'ST_PageAsideMenus',
    st_simple_card_links: 'ST_SimpleCardLinks',
    st_buttons: 'ST_Buttons',
    st_plans_pricing: 'ST_PlansPricing',
    st_platforms: 'ST_Platforms',
    st_media_tabs: 'ST_MediaTabs',
  } as const,
};
