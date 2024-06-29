import { ST_HeroWithMediaBackground, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';
import { Router } from 'next/router';
import { useEffect } from 'react';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/ui/links/ButtonLink';

import { useHasMounted } from '@/app/hooks/useHasMounted';
import { useMut } from '@/cms/mut';

type Props = STemplates_Props<ST_HeroWithMediaBackground> & {
  noStyle?: boolean;
};

export function ST_HeroWithMediaBackgroundsFC({
  items,
  sectionClass,
  sharedObject,
  noStyle,
}: Props) {
  const first = items[0];

  if (!sharedObject[first.collection]) {
    sharedObject[first.collection] = first.item.id;
  }

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
      {sharedObject[first.collection] === first.item.id && !noStyle && (
        <style key={first.collection} jsx global>
          {
            /*css*/ `
              .nav__parent:not(.nav__fixed) {
                background-color: transparent;
                box-shadow: 0;
                color: #fff;
              }

              .${sectionClass} {
                margin-top: -6.5rem;
                order: -1;
              }

              .${sectionClass}.page__section {
                padding: 0;
              }

              .${sectionClass} .page__section-titles {
                display: none;
              }

              .${sectionClass} .page__section-container {
                gap: 0;
                margin: 0 !important;
                padding: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
            `
          }
        </style>
      )}

      <section
        className={clsxm(
          'relative h-[99vh] flex',
          'after:content-[""] after:absolute after:w-full after:h-full after:z-[1] after:bg-black after:bg-opacity-50'
        )}
      >
        {items.map((item) => (
          <STHeroWithMediaBackground key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}

function STHeroWithMediaBackground({
  item,
}: {
  item: ST_HeroWithMediaBackground;
}) {
  const { translations, media, animated } = useMut(item.item);

  const { mounted } = useHasMounted();

  const buttons = translations?.buttons || [];
  const hasVideo = media.type?.startsWith('video');
  const hasImage = media.type?.startsWith('image');

  return (
    <>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        {hasVideo && (
          <video
            className={clsxm(
              'min-w-full min-h-full absolute object-cover',
              '-translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'
            )}
            src={media.src}
            autoPlay
            muted
            loop
          />
        )}

        {hasImage && (
          <Image
            className={clsxm(
              'min-w-full min-h-full absolute object-cover inset-0 ',
              animated && [
                'transition-transform duration-[10s] ease-out',
                mounted ? 'scale-[1]' : 'scale-[1.3]',
              ]
            )}
            src={media.src || ''}
            alt={translations?.title}
            layout='fill'
            objectFit='cover'
          />
        )}
      </div>

      <div className='x-container space-y-2 z-10 h-full w-full flex flex-col justify-center items-start'>
        <h1 className='font-light text-5xl text-white'>
          {translations?.title}
        </h1>

        {translations?.description && (
          <h3 className='font-light text-xl text-white'>
            {translations?.description}
          </h3>
        )}

        {buttons.length > 0 && (
          <div className='pt-5 flex flex-wrap justify-center gap-3'>
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
    </>
  );
}
