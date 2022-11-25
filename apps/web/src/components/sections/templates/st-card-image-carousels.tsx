import Image from "next/legacy/image";
import type {
  STemplates_Props,
  ST_CardImageCarousel,
} from '@apps/contracts';
import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';
import { useCustomerEmblaCarousel } from '@/app/hooks/useCustomEmblaCarousel';
import { useMut } from '@/cms/mut';
import ButtonLink from '@/components/ui/links/ButtonLink';
import { useTranslation } from 'next-i18next';

export function ST_CardImageCarouselsFC({
  items,
}: STemplates_Props<ST_CardImageCarousel>) {
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
  } = useCustomerEmblaCarousel(first.item.initial_index || 0);

  return (
    <>
      {items.length === 1 ? (
        <CarouselItem {...first} active={true} />
      ) : (
        <div className='w-full relative'>
          <div
            className='intelligent-system mt-10 pb-8 w-full overflow-x-auto snap-mandatory snap-x'
            ref={viewportRef}
          >
            <div className='w-full flex gap-1'>
              {items.map((data, index) => (
                <CarouselItem
                  key={data.item.id}
                  {...data}
                  active={index !== selectedIndex}
                />
              ))}
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className='ss:hidden absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                position={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
          {/* <!-- Slider controls --> */}
          {first.item.prev_next_buttons && (
            <>
              <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
              <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
            </>
          )}
        </div>
      )}
    </>
  );
}

function CarouselItem({
  item,
  active,
}: ST_CardImageCarousel & { active: boolean }) {
  const { image, translations, readmore_url } = useMut(item);
  const { t } = useTranslation();

  return (
    <div className='snap-center w-full'>
      <div
        className={`relative flex-shrink-0 max-w[95vw] w-full overflow-hidden rounded-3xl ${
          !active ? '' : 'scale-[.85]'
        } scl transition-all duration-500`}
      >
        <Image
          src={image.src!}
          layout='fill'
          alt=''
          className='absolute inset-0 w-full h-full object-cover object-bottom'
        />
        <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/75'></div>
        <div className='relative min-h-[24rem] w-[100vw] ss:w-[70vw] md:w-[768px] p-12 flex flex-col justify-between items-start'>
          <div className=''>
            <h2 className='mb-3 w-2/3 text-3xl font-semibold tracking-tight text-white'>
              {translations?.title}
            </h2>
            <p className='font-medium text-white mb-3'>
              {translations?.description}
            </p>
          </div>

          {readmore_url && (
            <ButtonLink
              href={readmore_url}
              className='px-4 py-3 rounded-lg text-center border-none bg-white hover:bg-primary-400 text-slate-900 text-sm font-medium'
            >
              {t('Explore more')}
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
