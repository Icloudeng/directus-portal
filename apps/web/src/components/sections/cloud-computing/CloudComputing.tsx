/* eslint-disable react/no-unescaped-entities */

import { useCustomerEmblaCarousel } from '@/app/hooks/useCustomEmblaCarousel';

import { DotButton, NextButton, PrevButton } from '@/components/ui/carouselButtons/CarouselButtons';

import { CarouselData } from '@/app/models/carouselModel';

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
    } = useCustomerEmblaCarousel();

    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7 mb-7'>
                <h1 className='text-center'>What's Cloud Computing</h1>
                <span className='max-w-xl text-center'>
                Cloud computing is the on-demand availability of computer system resources,
                especially data storage and computing power,
                without direct active management by the user.
                </span>
            </div>
            <div className='w-full h-full'>
                <div id='default-carousel' className='relative h-full'>
                    {/* <!-- Carousel wrapper --> */}
                    <div className='overflow-hidden w-full h-full' ref={viewportRef}>
                        <div className='flex w-full h-full'>
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
