import {
  DRTStatus,
  MDWithTranslation,
  MDWithUserTranslation,
  MDWithAsset,
} from '@/types/directus';
import type { ID } from '@directus/sdk';

// --------------- language model types -------------

export type MDLanguage = {
  code: string;
  icon_flag: MDWithAsset;
  name: string;
  direction: string;
};

// ----------------------- News model type --------------
type NewsTransField = {
  title: string;
  languages_code: string;
  summary: string;
  content: string;
};

type NewsField = {
  label: string;
  tags: string[];
  image: MDWithAsset;
};

export type MDNews = MDWithTranslation<NewsTransField> & NewsField & DRTStatus;

export type MDTopbarNew = Pick<DRTStatus, 'id' | 'date_created' | 'status'> &
  MDWithTranslation<Pick<NewsTransField, 'title' | 'languages_code'>>;

// ----------------------- TopbarLinks model type --------------

export type MDTopbarLink = MDWithTranslation<{ name: string }> & {
  id: ID;
  label: string;
  url: string;
  external: boolean;
} & DRTStatus;

// --------------- footer link item model types -------------
type MDFooterLinkItemField = {
  id: ID;
  external: boolean;
  url: string;
};

type MDFooterLinkItemFieldTrans = {
  name: string;
};

type MDFooterLinkItem = MDFooterLinkItemField &
  MDWithTranslation<MDFooterLinkItemFieldTrans> &
  DRTStatus;

// --------------- footer link model types -------------

type MDFooterLinkField = {
  id: ID;
  label: string;
  links: MDFooterLinkItem[];
};

type MDFooterLinkFieldTrans = {
  name: string;
};

export type MDFooterLink = MDFooterLinkField &
  MDWithTranslation<MDFooterLinkFieldTrans> &
  DRTStatus;
