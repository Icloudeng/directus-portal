import { useCustomerEmblaCarousel } from "@/hooks/useCustomEmblaCarousel";

import { DotButton, NextButton, PrevButton } from "@/components/ui/carouselButtons/CarouselButtons";

import { SnapItemData } from "@/models/snapItemModel";

import { CardComponent } from "./components/CardComponent";

export const ImageCardScroll = () => {
  const {
    viewportRef,
    scrollPrev,
    scrollNext,
    scrollSnaps,
    prevBtnEnabled,
    nextBtnEnabled,
    selectedIndex,
  } = useCustomerEmblaCarousel(1);

  return (
    <div className='mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='flex flex-col items-center justify-center gap-7 mb-7'>
        <h1 className='text-center'>Image Card Scroll</h1>
        <span className='max-w-xl text-center'>
          Cloud computing is the on-demand availability of computer system resources,
        </span>
      </div>
      <div className='w-full h-full'>
        <div id='default-carousel' className="w-full relative h-full">
          {/* <!-- Slider controls --> */}
          <div className='absolute inset-0 x-container-fluid mx-auto ss:px-12'>
            <div className="relative w-full h-full">
              <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
              <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
            </div>
          </div>
          {/* scrollable */}
          <div className="intelligent-system w-full overflow-x-clip snap-mandatory snap-x h-full px-5" ref={viewportRef}>
            <div className="w-full flex gap-16 h-full">
              {SnapItemData.map((item, index) => (
                <CardComponent key={index} extraStyles={`${index !== selectedIndex ? index > selectedIndex ? "rotate-[30deg] scale-[.75] -z-10 opacity-40" : "-rotate-[30deg] scale-[.75] opacity-40" : 'rounded-xl'}`} {...item} />
              ))}
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className='absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2'>
            {scrollSnaps.map((_, index) => (
              <DotButton key={index} position={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
