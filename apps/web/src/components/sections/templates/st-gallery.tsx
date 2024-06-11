import { ST_Gallery, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';

import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';

import { useCustomerEmblaCarousel } from '@/app/hooks/useCustomEmblaCarousel';
import { mut } from '@/cms/mut';
import { useSharedData } from '@/app/store';
import ButtonLink from '@/components/ui/links/ButtonLink';

export function ST_GalleryFC({ items }: STemplates_Props<ST_Gallery>) {
  const { locale } = useSharedData();

  const first = items[0];

  const {
    viewportRef,
    scrollPrev,
    scrollNext,
    prevBtnEnabled,
    nextBtnEnabled,
    selectedIndex,
    scrollSnaps,
    scrollTo,
  } = useCustomerEmblaCarousel(0, first.item.autoplay);

  return (
    <div className='w-full h-full'>
      <div className='relative h-full'>
        <div className='overflow-hidden w-full h-full' ref={viewportRef}>
          <div className='flex items-center w-full h-full'>
            {items.map(({ item }) => {
              const { translations } = mut(item, locale);

              const hasText =
                (translations?.buttons && translations?.buttons.length > 0) ||
                translations?.title ||
                translations?.description;

              return (
                <div
                  key={item.id}
                  className='h-[27rem] sd:h-[32rem] md:h-[36rem] w-full shrink-0 grow-0 basis-full relative'
                >
                  <div className='relative w-full h-full'>
                    <Image
                      className='image object-cover'
                      src={item.image?.src || ''}
                      layout='fill'
                      objectFit='cover'
                      alt={translations?.title || ''}
                      loading='lazy'
                    />

                    {hasText && (
                      <>
                        <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/55'></div>
                        <div className='relative w-full md:w-2/3 p-12 flex flex-col justify-between items-start'>
                          <div className=''>
                            {translations?.title && (
                              <h2 className='mb-3 w-2/3 text-3xl font-semibold tracking-tight text-white'>
                                {translations?.title}
                              </h2>
                            )}

                            {translations?.description && (
                              <p className='font-medium text-white mb-6'>
                                {translations?.description}
                              </p>
                            )}
                          </div>
                          {(translations?.buttons || []).map((btn, i) => {
                            return (
                              <ButtonLink
                                key={i}
                                href={btn.url}
                                variant={btn.variant || undefined}
                                target={btn.external ? '_blank' : undefined}
                                className='px-4 py-3 rounded-lg text-center border-none bg-white hover:bg-primary-400 text-slate-900 text-sm font-medium'
                              >
                                {btn.name}
                              </ButtonLink>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {first.item.pagination_buttons && (
          <div className='absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                position={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        )}

        {first.item.prev_next_buttons && (
          <>
            <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
            <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
          </>
        )}
      </div>
    </div>
  );
}
