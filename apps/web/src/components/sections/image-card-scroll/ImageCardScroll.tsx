import { useCustomerEmblaCarousel } from "@/hooks/useCustomEmblaCarousel";

import { NextButton, PrevButton } from "@/components/ui/carouselButtons/CarouselButtons";

import { SnapItemData } from "@/models/snapItemModel";

import { CardComponent } from "./components/CardComponent";

export const ImageCardScroll = () => {
  const {
    viewportRef,
    scrollPrev,
    scrollNext,
    prevBtnEnabled,
    nextBtnEnabled,
    selectedIndex,
  } = useCustomerEmblaCarousel(1);

  return (
    <div className='py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='flex flex-col items-center justify-center gap-7 mb-7'>
        <h1 className='text-center'>Image Card Scroll</h1>
        <span className='max-w-xl text-center'>
          Cloud computing is the on-demand availability of computer system resources,
        </span>
      </div>

      <div id='default-carousel' className="w-full relative h-full">
        {/* <!-- Slider controls --> */}
        <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full">
          <div className="relative w-full h-full">
            <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
            <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
          </div>
        </div>
        {/* scrollable */}
        <div className="intelligent-system mt-10 pb-8 w-full overflow-x-clip snap-mandatory snap-x h-full" ref={viewportRef}>
          <div className="w-full flex gap-32 h-full">
            {SnapItemData.map((item, index) => (
              <CardComponent key={index} extraStyles={`${index !== selectedIndex ? index > selectedIndex ? "rotate-[30deg] scale-[.75] -z-10 opacity-40" : "-rotate-[30deg] scale-[.75] opacity-40" : 'rounded-xl'}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
