export type DRTStatus = {
  status: 'published' | 'draft' | 'archived';
  date_created: string;
  date_updated?: string;
};

export type MDWithTranslation<T> = {
  translations: Partial<{
    [x: string]: T;
  }>;
};

export type MDTranslation = {
  [x: string]: string;
  languages_code: string;
};
