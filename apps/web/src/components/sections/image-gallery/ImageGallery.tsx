import { useCustomerEmblaCarousel } from "@/hooks/useCustomEmblaCarousel";

import { DotButton, NextButton, PrevButton } from "@/components/ui/carouselButtons/CarouselButtons";

import { ImageCard } from "./components/ImageCard"

const ImageGalleryData = [
    'https://flowbite.com/docs/images/blog/image-1.jpg',
    'https://flowbite.com/docs/images/blog/image-2.jpg',
    'https://flowbite.com/docs/images/blog/image-3.jpg',
    // 'https://flowbite.com/docs/images/blog/image-4.jpg',
]

export const ImageGallery = () => {
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
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-center'>Gallery</h1>
            </div>
            <div className='w-full h-full'>
                <div id='default-carousel' className='relative h-full'>
                    {/* <!-- Carousel wrapper --> */}
                    <div className='overflow-hidden w-full h-full' ref={viewportRef}>
                        <div className='flex items-center w-full h-full'>
                            {ImageGalleryData.map((imgLink, index) => (
                                <ImageCard
                                    key={index}
                                    imgLink={imgLink}
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
