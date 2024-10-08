import type { ST_CleanHero, STemplates_Props } from '@packages/contracts';
import isSvg from 'is-svg';
import Image from 'next/legacy/image';
import Router from 'next/router';
import { useEffect } from 'react';
import React from 'react';

import cn from '@/lib/cn';

import { HasSvgText } from '@/components/ui/HasSvgText';
import ButtonLink from '@/components/ui/links/ButtonLink';

import { testHexColor } from '@/app/utils/tests';
import { useMut } from '@/cms/mut';

export function ST_CleanHerosFC({
  items,
  sectionClass,
  sharedObject,
}: STemplates_Props<ST_CleanHero>) {
  const first = items[0];

  if (!sharedObject[first.collection]) {
    sharedObject[first.collection] = first.item.id;
  }

  const isHero =
    sharedObject[first.collection] === first.item.id && first.item.hero;

  useEffect(() => {
    const routerChangeStart = () => {
      delete sharedObject[first.collection];
    };
    Router.events.on('routeChangeStart', routerChangeStart);
    return () => {
      Router.events.off('routeChangeStart', routerChangeStart);
    };
  }, [sharedObject, first.collection]);

  return (
    <>
      {!!isHero && (
        <style key={first.collection} jsx global>
          {
            /*css*/ `
              .nav__parent:not(.nav__fixed) {
                --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
                --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
                --tw-text-opacity: 1;
                background-color: #fff;
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                  var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                color: rgb(0 0 0 / var(--tw-text-opacity));
              }

              .white-navbar.hidden {
                display: block;
              }

              .${sectionClass} {
                margin-top: -0.3rem;
                padding-bottom: 5rem;
                padding-top: 5rem;
                order: -1;
              }
              @media screen and (max-width: 620px) {
                .${sectionClass} {
                  padding-top: 4rem;
                  padding-bottom: 4rem;
                }
              }

              @media screen and (max-width: 719px) {
                .${sectionClass} {
                  margin-top: -0.3rem;
                }
              }

              .${sectionClass}:before {
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
                background-color: #f5f7fa;
              }
            `
          }
        </style>
      )}

      {items.map((data, i) => {
        const color = testHexColor(data.item.text_color);
        return (
          <React.Fragment key={data.item.id}>
            {color && (
              <style jsx global>{`
                .${sectionClass} .clean-hero--wrapper-${i} {
                  color: ${color};
                }
              `}</style>
            )}
            <Header {...data} isHero={isHero} index={i} />
          </React.Fragment>
        );
      })}
    </>
  );
}

type THeaderProps = ST_CleanHero & { index: number; isHero: boolean };

function Header({ item, index, isHero }: THeaderProps) {
  const { translations, image, image_svg, disposition } = useMut(item);
  const buttons = translations?.buttons || [];

  const hasImage = (image_svg && isSvg(image_svg)) || !!image;

  return (
    <div
      className={cn(
        'flex max-h-[1000px] mt-[30px] sd:mt-0',

        hasImage && ['lg:justify-around'],

        disposition === 'text_right' && ['flex-row-reverse'],

        !isHero &&
          hasImage && [
            'flex-col-reverse',
            disposition === 'text_right'
              ? ['lg:flex-row-reverse']
              : ['lg:flex-row'],
          ]
      )}
    >
      <div
        className={cn(
          'justify-center max-w-[460px] flex items-center flex-col mx-auto',
          hasImage
            ? ['lg:items-start lg:mx-0 lg:w-1/2']
            : ['xl:max-w-[560px] lg:max-w-[480px]'],
          `clean-hero--wrapper-${index}`
        )}
      >
        <h1
          className={cn(
            'text-center text-3xl sm:text-5xl font-bold clean-hero--texts',
            hasImage && ['lg:text-start']
          )}
        >
          {translations?.title}
        </h1>

        <div className='mt-[30px] clean-hero--texts'>
          <p
            className={cn(
              'text-center text-[18px] ss:text-[20px] font-light leading-[1.64]',
              hasImage && ['lg:text-start']
            )}
          >
            {translations?.description}
          </p>
        </div>

        {buttons.length > 0 && (
          <div className='mt-9 flex flex-wrap justify-center gap-3'>
            {buttons.map((btn, i) => {
              return (
                <div key={i}>
                  <ButtonLink
                    href={btn.url}
                    className='px-7 py-3'
                    variant={btn.variant}
                    target={btn.external ? '_blank' : undefined}
                  >
                    {btn.name}
                  </ButtonLink>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {hasImage && (
        <HasSvgText
          svgText={image_svg}
          className={cn(
            'lg:w-2/5 hidden lg:block st_flexible_icon relative',
            !isHero && [
              'block w-full ss:w-96 lg:w-2/5 self-center',
              disposition === 'text_right' ? 'lg:self-start' : 'lg:self-end',
            ]
          )}
          fallback={
            <>
              {image &&
                (image.height ? (
                  <Image
                    className='w-full h-auto'
                    src={image.src as string}
                    height={image.height}
                    width={image.width}
                    layout='responsive'
                    alt={translations?.title}
                  />
                ) : (
                  <Image
                    width='0'
                    height='0'
                    sizes='100vw'
                    className='w-full h-auto'
                    src={image?.src || ''}
                    alt={translations?.title}
                  />
                ))}
            </>
          }
        />
      )}
    </div>
  );
}
