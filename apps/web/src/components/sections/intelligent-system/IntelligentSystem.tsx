
import { useCustomerEmblaCarousel } from '@/hooks/useCustomEmblaCarousel';

import { SnapItemData } from '@/models/snapItemModel';

import { SnapItem } from './components/SnapItem';
import { DotButton, NextButton, PrevButton } from '../cloud-computing/components/CarouselButtons';


export const IntelligentSystem = () => {
    const {
        viewportRef,
        scrollPrev,
        scrollNext,
        prevBtnEnabled,
        nextBtnEnabled,
        selectedIndex,
        scrollSnaps,
        scrollTo
    } = useCustomerEmblaCarousel();
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h1 className='text-center'>What is Intelligent System</h1>
                <span className='max-w-xl text-center'>
                    Intelligent systems are technologically advanced machines that perceive
                    and respond to the world around them.
                </span>
            </div>
            <div id='default-carousel' className="w-full relative">
                <div className="intelligent-system mt-10 pb-8 w-full overflow-x-auto snap-mandatory snap-x" ref={viewportRef}>
                    <div className="w-full flex gap-1">
                        {SnapItemData.map((item, index) => (
                            <SnapItem key={index} extraStyles={`${index !== selectedIndex && "scale-[.85]"}`} {...item} />
                        ))}
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className='ss:hidden absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2'>
                    {scrollSnaps.map((_, index) => (
                        <DotButton key={index} position={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
                    ))}
                </div>
                {/* <!-- Slider controls --> */}
                <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
                <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
            </div>
        </div>
    )
}
