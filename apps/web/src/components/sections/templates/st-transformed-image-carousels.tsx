import { STemplates_Props, ST_TransformedImageCarousel } from '@apps/contracts';
import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';
import { useCustomerEmblaCarousel } from '@/app/hooks/useCustomEmblaCarousel';
import { MDWithAsset } from '@apps/contracts';
import Image from 'next/legacy/image';

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
  } = useCustomerEmblaCarousel(items.length > 1 ? 1 : 0);

  return (
    <div className='w-full relative h-full'>
      <div className='absolute inset-0  mx-auto px-20'>
        <div className='relative w-full h-full'>
          <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
          <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
        </div>
      </div>
      <div
        className='w-full overflow-x-clip snap-mandatory snap-x h-full px-5'
        ref={viewportRef}
      >
        <div className='w-full flex gap-16 h-full'>
          {items.map(({ item }, index) => (
            <ImageCard
              key={item.id}
              className={`${
                index !== selectedIndex
                  ? index > selectedIndex
                    ? 'rotate-[30deg] scale-[.75] -z-10 opacity-40'
                    : '-rotate-[30deg] scale-[.75] opacity-40'
                  : 'rounded-xl'
              }`}
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
    <div className='snap-center w-full '>
      <div
        className={`relative h-60 sm:h-72 lg:h-96 w-[60vw] ss:w-[40vw] sm:w-[35vw] lg:w-[30vw] max-w-screen-xl flex-shrink-0 overflow-hidden ${className} scl transition-all duration-500`}
      >
        <Image
          src={image?.src || ''}
          layout='fill'
          alt='Image'
          objectFit='cover'
          loading='lazy'
          className='absolute inset-0 w-full h-full object-cover object-bottom'
        />
        {/* <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/75'></div> */}
      </div>
    </div>
  );
};
