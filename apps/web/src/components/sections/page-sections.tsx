import {
  ISharedObject,
  M2APageSection,
  PS_Content,
  STemplates_Props,
  ValueOf,
} from '@packages/contracts';
import { CMS_MODELS } from '@packages/contracts';
import isSvg from 'is-svg';
import React, { FunctionComponent, useMemo, useRef } from 'react';

import cn from '@/lib/cn';

import { nextAsset } from '@/app/utils/next-asset';
import { VALID_CSS } from '@/app/utils/regex';
import { testHexColor } from '@/app/utils/tests';
import { useMut } from '@/cms/mut';

import * as stfc from './templates';
import { HasSvgText } from '../ui/HasSvgText';

const { section_templates } = CMS_MODELS;
type ST = typeof section_templates;

type TST_FC = {
  [k in ValueOf<ST>]: FunctionComponent<STemplates_Props<any>>;
};

type TPageSectionContent = {
  collection: ValueOf<ST>;
  items: PS_Content[];
};

const fcs = Object.create(stfc);

/**
 * All components of the section template should be added here following the key-value convention
 */
const ST_COMPONENTS = (Object.keys(section_templates) as (keyof ST)[]).reduce(
  (acc, stKey) => {
    const stValue = section_templates[stKey];
    const component = fcs[stValue + 'FC'];
    if (!component) {
      throw new Error(
        `Cannot find component corresponding to ${stValue}'s template`
      );
    }
    acc[stValue] = component;
    return acc;
  },
  {} as TST_FC
);

// ------------------------------ ---------------------- ------------------//
// ------------------------------Page Sections Component ------------------//
// ------------------------------ ---------------------- ------------------//

function showStyleCss(condition: any, style: string) {
  return !condition ? '' : style;
}

function styleCssTrim(css: string) {
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
  index,
}: {
  section: M2APageSection;
  sharedObject: ISharedObject;
  index: number;
}) {
  const item = useMut(section.item);
  const classId = `${section.collection}${index}-${item.id}`;
  const { background_color, background_svg, background_image } = section.item;

  const bg_color = testHexColor(background_color);

  const hasSvg = background_svg && isSvg(background_svg);

  const style = useMemo(() => {
    const custom_css = item.custom_css;
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
    return item.contents.reduce((acc, content) => {
      const collection = content.collection;
      const exists = acc.find((k) => k.collection === collection);

      if (!exists) {
        acc.push({
          collection: collection,
          items: item.contents.filter((k) => k.collection === collection),
        });
      }

      return acc;
    }, [] as TPageSectionContent[]);
  }, [item.contents]);

  return (
    <>
      {(style || bg_color) && (
        <style key={`cstyle-${classId}`} jsx global>
          {`
            ${styleCssTrim(
              (style || '') +
                showStyleCss(
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

      <section
        className={cn(
          'relative py-10 bg-white isolate page__section bg-no-repeat',
          classId,
          !item.container && ['overflow-hidden']
        )}
        style={{
          backgroundImage:
            background_image?.src && !hasSvg
              ? `url(${nextAsset({
                  url: background_image.src,
                  width: 1920,
                  quality: 75,
                })})`
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
          className={cn(
            'page__section-container py-10 flex flex-col items-center gap-10',
            item.container && ['x-container ss:px-12']
          )}
        >
          {(item.translations?.title || item.translations?.description) && (
            <div className='flex flex-col items-center justify-center gap-7 mb-7 page__section-titles'>
              {item.translations?.title && (
                <h2 className='text-center text-3xl'>
                  {item.translations?.title}
                </h2>
              )}

              {item.translations?.description && (
                <span className='max-w-2xl text-center'>
                  {item.translations?.description}
                </span>
              )}
            </div>
          )}

          <div className='page__section-content w-full flex flex-col gap-10'>
            {contents.map((content, cIdx) => {
              const STComponent = ST_COMPONENTS[content.collection];
              const items = content.items;

              return (
                <React.Fragment key={content.collection}>
                  {STComponent && items.length > 0 && (
                    <div className={`w-full st__content-${content.collection}`}>
                      <STComponent
                        items={items}
                        section={section}
                        sectionClass={classId}
                        sharedObject={sharedObject}
                        fcIndex={cIdx}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageSections({ sections }: { sections: M2APageSection[] }) {
  const sharedObject = useRef({} as ISharedObject);
  return (
    <>
      {sections.map((section, index) => (
        <PageSection
          key={`${section.id}${index}`}
          index={index}
          section={section}
          sharedObject={sharedObject.current}
        />
      ))}
    </>
  );
}
