import type { STemplates_Props, ST_CardCarousel } from '@/cms/page-sections';
import Image from 'next/image';
import { useMut } from '@/cms/mut';
import ButtonLink from '@/components/ui/links/ButtonLink';
import { useTranslation } from 'next-i18next';
import { useCustomerEmblaCarousel } from '@/hooks/useCustomEmblaCarousel';
import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';
import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

export function ST_CardCarouselsFC({
  items,
}: STemplates_Props<ST_CardCarousel>) {
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
  } = useCustomerEmblaCarousel();

  return (
    <>
      {items.length === 1 ? (
        <CarouselItem {...first} />
      ) : (
        <div className='w-full h-full'>
          <div className='relative h-full'>
            {/* <!-- Carousel wrapper --> */}
            <div className='overflow-hidden w-full h-full' ref={viewportRef}>
              <div className='flex w-full h-full'>
                {items.map((data) => (
                  <CarouselItem key={data.item.id} {...data} />
                ))}
              </div>
            </div>
            {/* <!-- Slider indicators --> */}
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
            {/* <!-- Slider controls --> */}
            {first.item.prev_next_buttons && (
              <>
                <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
                <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const CarouselItem = ({ item }: ST_CardCarousel) => {
  const { t } = useTranslation();
  const { translations, image, readmore_url, disposition } = useMut(item);

  const imageContent = (
    <div className='image-container relative md:h-[31rem] w-full flex flex-[1.2] flex-col justify-between p-24 md:p-4'>
      {image && (
        <Image
          className={`image object-cover rounded-t-lg md:rounded-sm ${
            disposition === 'text_right' ? 'md:rounded-l-lg' : 'md:rounded-r-lg'
          }`}
          src={image.src!}
          layout='fill'
          objectFit='cover'
          alt='hero banner image'
          loading='lazy'
        />
      )}
    </div>
  );

  const TextContent = (
    <div className='flex flex-[2] flex-col justify-between p-5 md:p-16 leading-normal'>
      <div className='mb-4 sm:mb-5'>
        <h5 className='text-2xl font-bold tracking-tight text-gray-900'>
          {translations?.title}
        </h5>
      </div>

      <div className='markdown__content st_carousel'>
        <MarkdownContent>
          {translations?.markdown_content || ''}
        </MarkdownContent>
      </div>
      {readmore_url && (
        <div className='mt-1'>
          <ButtonLink
            variant='outline'
            href={readmore_url}
            className='float-right ml-5 text-center text-sm font-base rounded-sm'
          >
            {t('Read More')}
          </ButtonLink>
        </div>
      )}
    </div>
  );
  return (
    <div className='duration-700 ease-in-out relative shrink-0 grow-0 basis-full max-w-full ml-[10px] transition-all transform translate-x-0 z-20'>
      <div className='w-full h-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-50'>
        {disposition === 'text_left' ? (
          <>
            {TextContent}
            {imageContent}
          </>
        ) : (
          <>
            {imageContent}
            {TextContent}
          </>
        )}
      </div>
    </div>
  );
};
