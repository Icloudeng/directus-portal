import { useMut } from '@/cms/mut';
import {
  ISharedObject,
  M2APageSection,
  STemplates_Props,
} from '@/cms/page-sections';
import { CMS_MODELS } from '@/constant/cms';
import { VALID_CSS } from '@/utils/regex';
import { testHexColor } from '@/utils/tests';
import isSvg from 'is-svg';
import React, { FunctionComponent, useMemo, useRef } from 'react';
import { HasSvgText } from '../HasSvgText';
import {
  ST_ValuesFC,
  ST_NavTabsFC,
  ST_CardCarouselsFC,
  ST_CardImageCarouselsFC,
  ST_SidedContentsFC,
  ST_NavAccordionsFC,
  ST_CleanHerosFC,
  ST_PageAsideMenusFC,
} from './templates';

const { section_templates } = CMS_MODELS;
type ST = typeof section_templates;

/**
 * All components of the section template should be added here following the key-value convention
 */
const ST_COMPONENTS: {
  [k in keyof ST]: FunctionComponent<STemplates_Props<any>>;
} = {
  st_values: ST_ValuesFC,
  st_navtabs: ST_NavTabsFC,
  st_card_carousels: ST_CardCarouselsFC,
  st_card_image_carousels: ST_CardImageCarouselsFC,
  st_sided_contents: ST_SidedContentsFC,
  st_nav_accordions: ST_NavAccordionsFC,
  st_clean_heros: ST_CleanHerosFC,
  st_page_aside_menus: ST_PageAsideMenusFC,
};

// ------------------------------ ---------------------- ------------------//
// ------------------------------Page Sections Component ------------------//
// ------------------------------ ---------------------- ------------------//

function st(condition: any, style: string) {
  return !condition ? '' : style;
}

function fc(css: string) {
  return css
    .replace(/\n/g, '')
    .split(';')
    .map((c) => c.trim())
    .join(';')
    .split('{')
    .map((c) => c.trim())
    .join('{');
}

function PageSection({
  section,
  sharedObject,
}: {
  section: M2APageSection;
  sharedObject: ISharedObject;
}) {
  const item = useMut(section.item);
  const classId = `${section.collection}-${item.id}`;
  const styleId = `cstyle-${classId}`;
  const { background_color, background_svg, background_image } = section.item;

  const bg_color = testHexColor(background_color);

  const hasSvg = background_svg && isSvg(background_svg);

  const style = useMemo(() => {
    const { custom_css } = item;
    const match_css = (custom_css || '').match(VALID_CSS);

    if (!match_css || match_css.length === 0) return;

    const css = match_css
      .map((text) => {
        const stl = text.trim().replace(/^\n*/, '');
        const fg = stl.indexOf('{');
        if (fg < 0) {
          return `.${classId} ${stl}`;
        }
        const selectors = stl
          .substring(0, fg)
          .split(',')
          .map((select) => {
            const nsl = select.trim();
            if (nsl.startsWith('self')) {
              return `.${classId}${nsl.substring('self'.length, nsl.length)}`;
            }
            return `.${classId} ${nsl}`;
          })
          .join(',');

        return selectors + stl.substring(fg, stl.length);
      })
      .join('')
      .trim();

    return css;
  }, [item.custom_css, classId]);

  const contents = useMemo(() => {
    const st_keys = Object.keys(section_templates) as (keyof ST)[];
    return st_keys.map((key) => {
      const st_value = section_templates[key];
      return {
        st_key: key,
        st_value: st_value,
        items: item.contents
          .filter((k) => k.collection === st_value)
          .filter((k) =>
            k.item.status ? k.item.status === 'published' : true
          ),
      };
    });
  }, [item.contents]);

  return (
    <>
      {(style || bg_color) && (
        <style key={styleId} jsx global>
          {`
            ${fc(
              (style || '') +
                st(
                  bg_color,
                  `.${classId}:before {
                content: '';
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: -9;
                background-color: ${bg_color} !important;
              }`
                )
            )}
          `}
        </style>
      )}
      <div
        className={`relative py-10 bg-white isolate page__section ${classId}`}
        style={{
          backgroundImage:
            background_image?.src && !hasSvg
              ? `url(${background_image.src})`
              : undefined,
        }}
        data-g-template={section.collection}
        data-ps-id={section.item.id}
      >
        {hasSvg && (
          <HasSvgText
            className='page__section-bg-svg absolute left-0 right-0 top-0 bottom-0 w-full h-full -z-10 block'
            svgText={background_svg}
          />
        )}

        <div
          className={`${
            item.container ? 'x-container ss:px-12' : ''
          } page__section-container py-10 flex flex-col items-center gap-10`}
        >
          <div className='flex flex-col items-center justify-center gap-7 mb-7 page__section-titles'>
            {item.translations?.title && (
              <h1 className='text-center'>{item.translations?.title}</h1>
            )}

            {item.translations?.description && (
              <span className='max-w-xl text-center'>
                {item.translations?.description}
              </span>
            )}
          </div>

          <div className='page__section-content w-full'>
            {contents.map((content) => {
              const STComponent = ST_COMPONENTS[content.st_key];
              const items = content.items;
              return (
                <React.Fragment key={content.st_value}>
                  {STComponent && items.length > 0 && (
                    <div className={`w-full st__content-${content.st_value}`}>
                      <STComponent
                        items={items}
                        sectionClass={classId}
                        sharedObject={sharedObject}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export function PageSections({ sections }: { sections: M2APageSection[] }) {
  const sharedObject = useRef({} as ISharedObject);
  return (
    <>
      {sections
        .filter((f) => f.item.status === 'published')
        .map((section) => (
          <PageSection
            key={section.id}
            section={section}
            sharedObject={sharedObject.current}
          />
        ))}
    </>
  );
}
