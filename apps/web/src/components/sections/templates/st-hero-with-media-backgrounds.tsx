import {
  ST_HeroWithMediaBackground,
  STemplates_Props,
} from '@packages/contracts';
import Image from 'next/legacy/image';
import { Router } from 'next/router';
import { useEffect } from 'react';

import cn from '@/lib/cn';

import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';
import ButtonLink from '@/components/ui/links/ButtonLink';

import { useCustomerEmblaCarousel } from '@/app/hooks/useCustomEmblaCarousel';
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

  const {
    viewportRef,
    scrollPrev,
    scrollNext,
    selectedIndex,
    scrollSnaps,
    scrollTo,
  } = useCustomerEmblaCarousel({
    loop: true,
    fade: true,
  });

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

      <section className='relative h-screen flex'>
        <div
          className='overflow-hidden w-full h-full'
          ref={items.length > 1 ? viewportRef : undefined}
        >
          <div className='flex items-center w-full h-full'>
            {items.map((item, index) => (
              <STHeroWithMediaBackground
                key={item.id}
                item={item}
                active={index === selectedIndex}
              />
            ))}
          </div>
        </div>

        {items.length > 1 && (
          <div className='absolute z-20 bottom-28 left-0 flex space-x-1 w-full'>
            <div className='x-container flex justify-between items-center gap-2'>
              <div className='flex space-x-3'>
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    position={index}
                    selected={index === selectedIndex}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>

              <div className='flex space-x-2 relative'>
                <PrevButton
                  enabled={true}
                  white={true}
                  onClick={scrollPrev}
                  className='static p-0'
                />
                <NextButton
                  enabled={true}
                  white={true}
                  onClick={scrollNext}
                  className='static p-0'
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function STHeroWithMediaBackground({
  item,
  active,
}: {
  item: ST_HeroWithMediaBackground;
  active: boolean;
}) {
  const { translations, media, animated } = useMut(item.item);

  const { mounted } = useHasMounted();

  const buttons = translations?.buttons || [];
  const hasVideo = media.type?.startsWith('video');
  const hasImage = media.type?.startsWith('image');

  return (
    <div className='h-full w-full shrink-0 grow-0 basis-full relative'>
      <div
        className={cn(
          'absolute top-0 left-0 w-full h-full overflow-hidden',
          'after:content-[""] after:absolute after:w-full after:h-full after:bg-black after:bg-opacity-60'
        )}
      >
        {hasVideo && (
          <video
            className={cn(
              'min-w-full min-h-full absolute object-cover',
              '-translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'
            )}
            src={media.src}
            key={`${active}`}
            autoPlay
            muted
            loop
          />
        )}

        {hasImage && (
          <Image
            className={cn(
              'min-w-full min-h-full absolute object-cover inset-0 ',
              animated && [
                'transition-transform duration-[10s] ease-out',
                active && mounted ? 'scale-[1]' : 'scale-[1.3]',
              ]
            )}
            src={media.src || ''}
            alt={translations?.title}
            layout='fill'
            objectFit='cover'
            loading='eager'
          />
        )}
      </div>

      <div
        className={cn(
          'x-container space-y-2 flex flex-col justify-center items-start',
          'absolute inset-0 z-10 h-full'
        )}
      >
        <h1 className='font-light text-5xl sm:text-5xl text-white'>
          {translations?.title}
        </h1>

        {translations?.description && (
          <p className='font-light text-xl text-white'>
            {translations?.description}
          </p>
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
    </div>
  );
}
