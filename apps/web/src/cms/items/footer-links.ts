import { CMS_MODELS } from '@/constant/cms';
import {
  DRTStatus,
  MDWithTranslation,
  MDWithUserTranslation,
} from '@/types/directus';
import { ID } from '@directus/sdk';
import { directus_fetch } from '../fetch';
import { mut } from '../mut';

// --------------- footer link item types -------------
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

// --------------- footer link types -------------

type MDFooterLinkField<Links = unknown> = {
  id: ID;
  label: string;
  links: Links;
};

type MDFooterLinkFieldTrans = {
  name: string;
};

type MDFooterLink<Links> = MDFooterLinkField<Links> &
  MDWithTranslation<MDFooterLinkFieldTrans> &
  DRTStatus;

export type MDFooterLinkRes = MDFooterLink<
  MDWithUserTranslation<MDFooterLinkItem[]>
>;

export async function getMDFooterLinks(lang: string) {
  const res = await directus_fetch.getPublishedDatas<MDFooterLinkRes>(
    CMS_MODELS.footer_links
  );

  if (!res.data) return res;

  for (const data of res.data) {
    if (!data?.links) continue;
    const links = data.links as string[];
    const new_links: MDWithUserTranslation<MDFooterLinkItem[]> = [];

    for (const id of links) {
      const link = await directus_fetch.getPublishedDatas<MDFooterLinkItem>(
        CMS_MODELS.footer_link_items,
        { filter: { id: { _eq: id } }, limit: 1 }
      );
      if (link.data && link.data[0]) {
        new_links.push(mut(link.data[0] as MDFooterLinkItem, lang));
      }
    }

    data.links = new_links;
  }

  return res;
}
