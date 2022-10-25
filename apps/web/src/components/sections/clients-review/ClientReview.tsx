import { useCustomerEmblaCarousel } from "@/hooks/useCustomEmblaCarousel";

import { DotButton, NextButton, PrevButton } from "@/components/ui/carouselButtons/CarouselButtons"

import { ReviewData } from "@/models/reviewCardModel";

import { ReviewCard } from "./components/ReviewCard"

export const ClientReview = () => {
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
                <h1 className='text-center'>What customers say</h1>
            </div>

            <div className='max-w-5xl w-full h-full'>
                <div id='default-carousel' className='relative h-full'>
                    {/* <!-- Carousel wrapper --> */}
                    <div className='overflow-hidden w-full h-full' ref={viewportRef}>
                        <div className='flex items-center w-full h-full'>
                            {ReviewData.map(({ review, reviewerName, reviewerPosition }, index) => (
                                <ReviewCard
                                    key={index}
                                    review={review}
                                    reviewerName={reviewerName}
                                    reviewerPosition={reviewerPosition}
                                />
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
    )
}
