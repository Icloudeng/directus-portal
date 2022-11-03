import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';
import { STemplates_Props, ST_TimelineRange } from '@/cms/page-sections';
import {
  NextButton,
  PrevButton,
  RawNextButton,
  RawPrevButton,
} from '@/components/ui/carouselButtons/CarouselButtons';
import { useEffect, useRef, useState } from 'react';

export function ST_TimelineRangesFC({
  items,
}: STemplates_Props<ST_TimelineRange>) {
  const { locale } = useSharedData();
  const [index, setIndex] = useState(0);
  const stepValue = 1;
  const maxValue = items.length - 1;
  const minValue = 0;

  const selected = mut(items[index].item, locale);

  return (
    <>
      <div className='flex items-center relative'>
        <button
          type='button'
          disabled={index === 0}
          className={`${index === 0 ? 'opacity-70' : ''} mt-5`}
          onClick={() => {
            setIndex((value) => {
              const v = value - stepValue;
              return v >= minValue ? v : minValue;
            });
          }}
        >
          <RawPrevButton enabled={index !== 0} />
        </button>
        <div className='flex-1'>
          <div className='w-full font-semibold text-lg text-primary-400 text-center block md:hidden'>
            {selected.translations?.time_title}
          </div>
          <div className='w-full hidden md:flex justify-between'>
            {items.map(({ item }, i) => {
              const { translations } = mut(item, locale);
              return (
                <div
                  key={item.id}
                  onClick={() => setIndex(i)}
                  className={`inline-block font-semibold cursor-pointer ${
                    i === index ? 'text-primary-400' : 'page__section-texts'
                  } text-lg`}
                >
                  {translations?.time_title}
                </div>
              );
            })}
          </div>
          <div className='w-full py-14'>
            <input
              className='w-full'
              type='range'
              value={index}
              onChange={(e) => setIndex(+e.currentTarget.value)}
              step={stepValue}
              min={minValue}
              max={maxValue}
            />
          </div>
        </div>
        <button
          type='button'
          disabled={index === maxValue}
          className={`${index === maxValue ? 'opacity-70' : ''} mt-5`}
          onClick={() => {
            setIndex((value) => {
              const v = value + stepValue;
              return v <= maxValue ? v : maxValue;
            });
          }}
        >
          <RawNextButton enabled={index !== maxValue} />
        </button>
      </div>
      <div className='md:w-3/4 w-full mx-auto text-center opacity-80 page__section-texts'>
        {selected.translations?.time_description}
      </div>
    </>
  );
}
