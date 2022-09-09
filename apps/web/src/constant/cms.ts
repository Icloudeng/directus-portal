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

export const CMS_MODELS = modelsWithTranslation({
  languages: 'languages',
  topbar_links: 'TopbarLinks',
  news: 'News',
  footer_links: 'FooterLinks',
  footer_link_items: 'FooterLinkItems',
});
