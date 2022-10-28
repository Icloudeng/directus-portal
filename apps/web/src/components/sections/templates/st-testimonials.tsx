import { mut } from '@/cms/mut';
import { STemplates_Props, ST_Testimonial } from '@/cms/page-sections';
import { ReviewCard } from '@/components/ui/cards/ReviewCard';
import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';
import { useCustomerEmblaCarousel } from '@/hooks/useCustomEmblaCarousel';
import { useSharedData } from '@/store';

export function ST_TestimonialsFC({ items }: STemplates_Props<ST_Testimonial>) {
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

  const { locale } = useSharedData();

  return (
    <div className='relative h-full'>
      <div className='overflow-hidden w-full h-full' ref={viewportRef}>
        <div className='flex items-center w-full h-full'>
          {items.map(({ item }) => {
            const { translations } = mut(item, locale);
            return (
              <ReviewCard
                key={item.id}
                clientName={item.client_name}
                clientPost={item.client_post}
                review={translations?.review_text || ''}
                clientPhoto={item.image}
              />
            );
          })}
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
  );
}
