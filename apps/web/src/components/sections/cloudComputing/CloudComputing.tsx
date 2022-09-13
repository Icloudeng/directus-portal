/* eslint-disable react/no-unescaped-entities */

import { CarouselItem } from './components/CarouselItem';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';

export const CloudComputing = () => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

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
          <div className='embla__viewport ' ref={viewportRef}>
            <div className='flex w-full h-[47rem] ss:h-[40rem] sm:h-[30rem]'>
              <CarouselItem />
              <CarouselItem />
            </div>
          </div>

          {/* <!-- Slider indicators --> */}
          <div className='absolute z-30 flex space-x-3 -translate-x-1/2 -bottom-10 left-1/2'>
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-primary-300 '
              aria-current='true'
              aria-label='Slide 1'
              data-carousel-slide-to='0'
            ></button>
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-gray-300/50 hover:bg-gray-300'
              aria-current='false'
              aria-label='Slide 2'
              data-carousel-slide-to='1'
            ></button>
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-gray-300/50 hover:bg-gray-300'
              aria-current='false'
              aria-label='Slide 3'
              data-carousel-slide-to='2'
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type='button'
            onClick={scrollPrev}
            className='absolute top-0 -left-16 sm:-left-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-prev=''
          >
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-2 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-primary-400 sm:w-6 sm:h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19l-7-7 7-7'
                ></path>
              </svg>
              <span className='sr-only'>Previous</span>
            </span>
          </button>
          <button
            type='button'
            onClick={scrollNext}
            className='absolute top-0 bg-green-300 -right-16 sm:-right-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-next=''
          >
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-2 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-primary-400 sm:w-6 sm:h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                ></path>
              </svg>
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
