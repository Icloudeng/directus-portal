import { STemplates_Props, ST_Gallery } from '@/cms/page-sections';
import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';
import { useCustomerEmblaCarousel } from '@/hooks/useCustomEmblaCarousel';
import Image from 'next/image';

export function ST_GalleryFC({ items }: STemplates_Props<ST_Gallery>) {
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
    <div className='w-full h-full'>
      <div className='relative h-full'>
        <div className='overflow-hidden w-full h-full' ref={viewportRef}>
          <div className='flex items-center w-full h-full'>
            {items.map(({ item }) => (
              <div
                key={item.id}
                className='h-[20rem] sd:h-[32rem] md:h-[36rem] w-full shrink-0 grow-0 basis-full'
              >
                <div className='relative w-full h-full'>
                  <Image
                    className='image object-cover'
                    src={item.image.src!}
                    layout='fill'
                    objectFit='cover'
                    alt='Image'
                    loading='lazy'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
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
        <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
        <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
      </div>
    </div>
  );
}
