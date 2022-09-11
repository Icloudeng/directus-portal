import {
  DRTStatus,
  MDWithTranslation,
  MDWithUserTranslation,
  MDWithAsset,
  MDWithPoint,
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

//  ------------------ company details types  ---------------------

type MDSocial = {
  social_name: string;
  icon: MDWithAsset;
  link: string;
} & DRTStatus;

type MDAddress = {
  address_name: string;
  phone?: string;
  working_days?: string;
  working_time?: string;
  localization: MDWithPoint;
} & DRTStatus;

type MDCompanyDetailField = {
  company_name?: string;
  support_email?: string;
  email?: string;
  website?: string;
  logo?: MDWithAsset;
  addresses: MDAddress[];
  socials: MDSocial[];
};

type MDCompanyDetailFieldTrans = {
  slogan?: string;
};

export type MDCompanyDetail = MDWithTranslation<MDCompanyDetailFieldTrans> &
  MDCompanyDetailField &
  DRTStatus;
