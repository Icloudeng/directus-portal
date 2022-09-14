/* eslint-disable react/no-unescaped-entities */

import { useCustomerEmblaCarousel } from '@/hooks/useCustomEmblaCarousel';

import { CarouselData } from '@/models/carouselModel';

import { DotButton, NextButton, PrevButton } from './components/CarouselButtons';
import { CarouselItem } from './components/CarouselItem';


export const CloudComputing = () => {

    const {
        viewportRef,
        scrollPrev,
        scrollNext,
        prevBtnEnabled,
        nextBtnEnabled,
        selectedIndex,
        scrollSnaps,
        scrollTo
    } = useCustomerEmblaCarousel()

    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 px-12'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                <h1>What's Cloud Computing</h1>
                <span className='max-w-xl text-center'>
                    Managing a cloud infrastructure has never been so enjoyable. It's
                    lightning-fast and stunning simple.
                </span>
            </div>
            <div className='w-full'>
                <div id='default-carousel' className='relative'>
                    {/* <!-- Carousel wrapper --> */}
                    <div className='overflow-hidden w-full' ref={viewportRef}>
                        <div className='flex w-full h-[47rem] ss:h-[40rem] sm:h-[30rem]'>
                            {CarouselData.map(({ bigTitle, description, href, items, imgSrc }, index) => (
                                <CarouselItem 
                                    key={index} 
                                    bigTitle={bigTitle} 
                                    description={description} 
                                    href={href} items={items} 
                                    imgSrc={imgSrc} />
                            ))}
                        </div>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div className='absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2'>
                        {scrollSnaps.map((_, index) => (
                            <DotButton key={index} position={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
                        ))}
                    </div>
                    {/* <!-- Slider controls --> */}
                    <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
                    <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
                </div>
            </div>
        </div>
    );
};
