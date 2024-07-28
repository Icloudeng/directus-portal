import {
  ST_TransformedImageCarousel,
  STemplates_Props,
} from '@packages/contracts';
import { MDWithAsset } from '@packages/contracts';
import Image from 'next/legacy/image';

import cn from '@/lib/cn';

import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';

import { useCustomerEmblaCarousel } from '@/app/hooks/useCustomEmblaCarousel';

export function ST_TransformedImageCarouselsFC({
  items,
}: STemplates_Props<ST_TransformedImageCarousel>) {
  const {
    viewportRef,
    scrollPrev,
    scrollNext,
    prevBtnEnabled,
    nextBtnEnabled,
    selectedIndex,
    scrollSnaps,
    scrollTo,
  } = useCustomerEmblaCarousel({
    startIndex: items.length > 1 ? 1 : 0,
  });

  return (
    <div className='w-full relative h-full'>
      <div className='absolute inset-0  mx-auto px-20'>
        <div className='relative w-full h-full'>
          <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
          <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
        </div>
      </div>

      <div
        className='w-full overflow-x-clip snap-mandatory snap-x h-full px-5 embla__viewport'
        ref={viewportRef}
      >
        <div className='w-full flex gap-16 h-full embla__container'>
          {items.map(({ item }, index) => (
            <ImageCard
              key={item.id}
              className={cn(
                index !== selectedIndex && [
                  index > selectedIndex
                    ? 'rotate-[30deg] scale-[.75] -z-10 opacity-40'
                    : '-rotate-[30deg] scale-[.75] opacity-40',
                ],
                index === selectedIndex && 'rounded-xl'
              )}
              image={item.image}
            />
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
    </div>
  );
}

export const ImageCard = ({
  className,
  image,
}: {
  image: MDWithAsset;
  className: string;
}) => {
  return (
    <div className='snap-center grow-0 shrink-0 basis-[34%] min-w-0'>
      <div
        className={cn(
          'relative h-60 sm:h-72 lg:h-96 w-[60vw] ss:w-[40vw] sm:w-[35vw] lg:w-[30vw] max-w-screen-xl',
          'flex-shrink-0 overflow-hidden scl transition-all duration-500',
          className
        )}
      >
        <Image
          src={image?.src || ''}
          layout='fill'
          alt='Image'
          objectFit='cover'
          loading='eager'
          className='absolute inset-0 w-full h-full object-cover object-bottom'
        />
        {/* <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/75'></div> */}
      </div>
    </div>
  );
};
