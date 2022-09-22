import { useMut } from '@/cms/mut';
import { M2APageSection } from '@/cms/page-sections';
import { CMS_MODELS } from '@/constant/cms';
import { VALID_CSS, VALID_HEX_COLOR } from '@/utils/regex';
import isSvg from 'is-svg';
import React, { FunctionComponent, useMemo } from 'react';
import {
  ST_ValuesFC,
  ST_NavTabsFC,
  ST_CardCarouselsFC,
  ST_CardImageCarouselsFC,
  ST_SidedContentsFC,
} from './templates';

const { section_templates } = CMS_MODELS;
type ST = typeof section_templates;

const ST_COMPONENTS: {
  [k in keyof ST]: FunctionComponent<{ items: any }>;
} = {
  st_values: ST_ValuesFC,
  st_navtabs: ST_NavTabsFC,
  st_card_carousels: ST_CardCarouselsFC,
  st_card_image_carousels: ST_CardImageCarouselsFC,
  st_sided_contents: ST_SidedContentsFC,
};

function st(condition: any, style: string) {
  return !!condition ? style : '';
}

function PageSection({ section }: { section: M2APageSection }) {
  const item = useMut(section.item);
  const classId = `${section.collection}-${item.id}`;
  const styleId = `cstyle-${classId}`;
  const { background_color, background_svg, background_image } = section.item;

  const bg_color = VALID_HEX_COLOR.test(background_color || '')
    ? background_color
    : undefined;

  const hasSvg = background_svg && isSvg(background_svg);

  const style = useMemo(() => {
    const { custom_css } = item;
    const match_css = (custom_css || '').match(VALID_CSS);

    if (!match_css || match_css.length === 0) return;

    const css = match_css
      .map((text) => {
        const stl = text.trim().replace(/^\n*/, '');
        if (stl.startsWith('self')) {
          return `.${classId}${stl.substring('self'.length, stl.length)}`;
        }
        return `.${classId} ${stl}`;
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
        items: item.contents.filter((k) => k.collection === st_value),
      };
    });
  }, [item.contents]);

  return (
    <>
      {(style || bg_color) && (
        <style key={styleId} jsx global>
          {`
            ${style || ''}
            ${st(
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
              background-color: ${bg_color};
            }`
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
      >
        {hasSvg && (
          <>
            <div
              className='page__section-bg-svg absolute left-0 right-0 top-0 bottom-0 w-full h-full -z-10'
              dangerouslySetInnerHTML={{ __html: background_svg }}
            />
          </>
        )}

        <div
          className={`${
            item.container ? 'x-container ss:px-12' : ''
          } page__section-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10`}
        >
          <div className='flex flex-col items-center justify-center gap-7 mb-7 page__section-titles'>
            <h1 className='text-center'>{item.translations?.title}</h1>
            <span className='max-w-xl text-center'>
              {item.translations?.description}
            </span>
          </div>

          <div className='page__section-content w-full'>
            {contents.map((content) => {
              const STComponent = ST_COMPONENTS[content.st_key];
              const items = content.items;
              return (
                <React.Fragment key={content.st_value}>
                  {STComponent && items.length > 0 && (
                    <STComponent items={items} />
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
  return (
    <>
      {sections.map((section) => (
        <PageSection key={section.id} section={section} />
      ))}
    </>
  );
}
