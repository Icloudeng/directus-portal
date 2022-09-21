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
    page_details: 'Page_Details',
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
  } as const,
};
