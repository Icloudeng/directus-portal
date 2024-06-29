import {
  M2APageSection,
  M2APageSectionReusable,
  PS_Content,
  ST_Vls,
} from '@apps/contracts';
import { CMS_MODELS } from '@apps/contracts';
import { PlansPricingContent } from '@apps/contracts';

import { qWithAsset, qWithAssets } from './gql-query';
import {
  getGqlListBlogQuery,
  getGqlListNewsQuery,
  getGqlPlansPricingQueries,
  getGqlPlatformsByCategories,
} from './items';

const {
  section_templates,
  generics: {
    reusable_page_sections,
    reusable_page_sections_categories,
    page_sections,
  },
} = CMS_MODELS;

type ParamPageSectionReusable = {
  [x: string]: any;
  sections: M2APageSectionReusable[];
};

type ParamPageSection = {
  [x: string]: any;
  sections: M2APageSection[];
};

export async function pageSectionsAdapters<T extends ParamPageSectionReusable>(
  data: T | undefined,
  access_token: string
) {
  if (!data) return;

  const ps = pageSectionExtractReusableM2A(data); // this must be called at top of any others functions
  pageSectionPublished(ps);
  pageSectionsWithAssets(access_token, ps.sections);
  await pageSectionWithContent(ps.sections);
}

function pageSectionExtractReusableM2A(
  data: ParamPageSectionReusable
): ParamPageSection {
  const sections = (data.sections || []).filter(
    (m2a) => m2a.item.status === 'published'
  );

  data.sections = sections.reduce((acc, value, i) => {
    switch (value.collection) {
      case page_sections:
        acc.push(value);
        break;
      case reusable_page_sections:
        if (value.item.page_section) {
          acc.push({
            id: `${value.id}-${i}`,
            collection: page_sections,
            item: {
              ...value.item.page_section,
              translations:
                value.item.translations.length > 0
                  ? value.item.translations
                  : value.item.page_section.translations,
              background_image:
                value.item.background_image ||
                value.item.page_section.background_image,
              background_svg:
                value.item.background_svg ||
                value.item.page_section.background_svg,
              background_color:
                value.item.background_color ||
                value.item.page_section.background_color,
              custom_css:
                value.item.custom_css || value.item.page_section.custom_css,
              container:
                value.item.container !== null
                  ? value.item.container
                  : value.item.page_section.container,
            },
          });
        }
        break;
      case reusable_page_sections_categories:
        if (value?.item?.section_category) {
          acc.push(
            ...value.item.section_category.page_sections.map((ps, rs_i) => {
              return {
                id: `${value.id}-${i}-${rs_i}`,
                collection: page_sections,
                item: ps,
              };
            })
          );
        }
        break;
    }
    return acc;
  }, <M2APageSection[]>[]);

  return data as ParamPageSection;
}

function pageSectionsWithAssets(
  access_token: string,
  sections: M2APageSection[]
) {
  const $sections = [...sections];
  const psAssets = (sections: M2APageSection[]) => {
    const section = sections.pop();
    if (!section) return;

    qWithAsset(access_token, section.item, 'background_image');

    const stAssets = (s_templates: PS_Content[]) => {
      const st = s_templates.pop();
      if (!st) return;

      switch (st.collection) {
        case section_templates.st_media_tabs:
          qWithAssets(access_token, st.item.translations, 'media');
          break;
        case section_templates.st_side_text_medias:
          qWithAsset(access_token, st.item, 'media');
          break;
        case section_templates.st_hero_with_media_backgrounds:
          qWithAsset(access_token, st.item, 'media');
          break;
        case section_templates.st_testimonials:
          qWithAsset(access_token, st.item, 'image', [71, 71]);
          break;
        case section_templates.st_coloured_cards:
          qWithAsset(access_token, st.item, 'background_image');
          break;
        case section_templates.st_videos:
          qWithAsset(access_token, st.item, 'video_file');
          break;
        default:
          // Actually all templates modeles uses image as default key for assets
          qWithAsset(access_token, st.item, 'image' as any);
          break;
      }

      stAssets(s_templates);
    };

    stAssets([...section.item.contents]);
    psAssets(sections);
  };

  psAssets($sections);
}

function pageSectionPublished(data: ParamPageSection) {
  data.sections = (data.sections || []).filter(({ item }) => {
    const reusable = item.reusable !== undefined;
    if (reusable && item.status !== 'draft') {
      return true;
    }
    return item.status === 'published';
  });

  data.sections.forEach(({ item }) => {
    if (!item.contents) {
      item.contents = [];
    }
    item.contents = item.contents.filter(
      (citem) => citem.item.status === 'published'
    );
  });
}

function pageSectionWithContent(sections: M2APageSection[]) {
  return psWithContent(sections, [
    _psHelper({
      sts: [
        section_templates['st_page_aside_menus'],
        section_templates['st_plans_pricing'],
      ] as const,
      validate(content) {
        const plan_pricing = content.item.plan_pricing;
        return plan_pricing ? plan_pricing.length > 0 : false;
      },
      query() {
        return getGqlPlansPricingQueries();
      },
      mutate(content, memo) {
        const { plan_pricing } = content.item;
        content.item.plan_pricing_contents = <PlansPricingContent>{};
        plan_pricing?.push('machine_templates');
        plan_pricing?.forEach((key) => {
          content.item.plan_pricing_contents &&
            memo &&
            (content.item.plan_pricing_contents[key] = memo[key] as any);
        });
      },
    }),
    _psHelper({
      sts: [section_templates['st_platforms']] as const,
      query() {
        return getGqlPlatformsByCategories();
      },
      mutate(content, memo) {
        if (memo) {
          content.item.categories = memo.categories;
        }
      },
    }),
    _psHelper({
      sts: [section_templates['st_latest_news']] as const,
      async query(item) {
        const res = await getGqlListNewsQuery(undefined, 0, item.item.limit);
        return res.data;
      },
      mutate(content, memo) {
        if (memo) {
          content.item.news = memo?.news;
        }
      },
    }),
    _psHelper({
      sts: [section_templates['st_latest_blog']] as const,
      async query(item) {
        const res = await getGqlListBlogQuery(undefined, 0, item.item.limit);
        return res.data;
      },
      mutate(content, memo) {
        if (memo) {
          content.item.blogs = memo?.blogs;
        }
      },
    }),
  ]);
}

// -----------------=========---------------------- //
// ----------------- Helper ---------------------- //
// -----------------========---------------------- //
type SC<T> = Extract<PS_Content, { [x: string]: any; collection: T }>;
type PSWithContent<T extends ST_Vls, M = any> = {
  sts: readonly T[];
  query(content: SC<T>): Promise<M>;
  validate?(content: SC<T>, memo: M | null): boolean;
  mutate(content: SC<T>, memo: M | null): void;
};
const _psHelper = <T extends ST_Vls, M>(c: PSWithContent<T, M>) => c;

async function psWithContent(
  sections: M2APageSection[],
  items: PSWithContent<any>[]
) {
  const memo: { [x: string]: any } = {};
  const sort = (c: string[]) => c.sort((a, b) => a.localeCompare(b)).join('');
  items.forEach((item) => {
    const mid = sort([...item.sts]);
    memo[mid] = null;
  });

  for (const section of sections) {
    for (const content of section.item.contents) {
      for (const ps_w of items) {
        if (!ps_w.sts.includes(content.collection)) {
          continue;
        }
        const mid = sort([...ps_w.sts]);
        let memo_content = memo[mid];

        if (
          memo_content === undefined ||
          (ps_w.validate && !ps_w.validate(content, memo_content))
        ) {
          continue;
        }

        memo[mid] = memo_content ? memo_content : await ps_w.query(content);
        memo_content = memo[mid];

        if (!memo_content) continue;

        ps_w.mutate(content, memo_content);
      }
    }
  }
}
