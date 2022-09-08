export const IMAGE_PRESETS = {
  sliders: 'sliders',
  systemLargeContain: 'system-large-contain',
};

type WithTranslation<T> = T & {
  [k in keyof T as `${string & k}_translations`]: T[k];
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
});
