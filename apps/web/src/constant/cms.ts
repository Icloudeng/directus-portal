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
  generics: {
    page_sections: 'PageSections',
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
  } as const,
};
