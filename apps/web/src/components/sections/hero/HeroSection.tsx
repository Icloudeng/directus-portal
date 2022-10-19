import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import NextImage from '@/components/ui/NextImage';

import { MDHomePageHero } from '@/cms/items/types';
import { useMut } from '@/cms/mut';
import Image from 'next/image';

type AccType =
  | ((element: HTMLElement | null) => void | Promise<void>)
  | string
  | number;

export const HeroSection = ({ data }: { data: MDHomePageHero }) => {
  const { t } = useTranslation('home');
  const { translations, image, images, disposition } = useMut(data);
  const trailing_titles = translations?.trailing_titles;
  const [imageKey, setImageKey] = useState(0);

  const onTypingProgress = useCallback((index: number) => {
    return () => setImageKey(index);
  }, []);

  const trailingTitles = useMemo(() => {
    if (!trailing_titles) return [];
    return trailing_titles.reduce((acc, value, index) => {
      acc.push(onTypingProgress(index), value, 1000);
      return acc;
    }, [] as AccType[]);
  }, [trailing_titles]);

  const contentText = (
    <div className='hero-left flex flex-col sd:w-1/2 gap-7'>
      <div className='flex flex-col items-center sd:items-start gap-4 sm:gap-7'>
        <h1 className='font-extrabold text-4xl sd:text-2xl sm:text-[2.2rem] md:text-[2.7rem] -mb-4 text-center sd:text-start md:leading-[3rem]'>
          <span className='block'>{translations?.title}</span>
          <TypeAnimation
            sequence={trailingTitles}
            speed={40}
            className='font-extrabold leading-[1.3] text-4xl sd:text-2xl sm:text-[2.2rem] md:text-[2.7rem] md:leading-[3rem]'
            wrapper='span'
            repeat={Infinity}
            cursor={true}
          />
        </h1>
      </div>

      <span className='text-gray-300 text-center sd:text-start max-w-lg leading-[1.5] sm:text-[1rem] md:text-[20px] sd:w-[95%]'>
        {translations?.description}
      </span>
    </div>
  );

  const contentImage = (
    <>
      {images.length > 0 ? (
        <div className='relative hero-right flex items-center justify-end h-80 max-w-xs sd:max-w-full w-full sd:w-1/2'>
          <div className='overflow-hidden w-full h-full'>
            <div className='flex w-full h-full relative'>
              {images.map(({ directus_files_id: { id, src } }, index) => {
                const len = images.length - 1;
                const actived =
                  imageKey > len && imageKey > index
                    ? true
                    : imageKey === index;

                return (
                  <div
                    key={id}
                    className={`absolute transition-opacity duration-300 inset-0 ${
                      actived ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      className='image object-cover'
                      src={src!}
                      layout='fill'
                      objectFit='cover'
                      alt='accordion image'
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>
          {image && (
            <div className='hero-right flex items-center justify-end max-w-xs sd:max-w-full sd:w-1/2'>
              <NextImage
                useSkeleton
                src={image.src!}
                imgClassName='!z-0'
                width={500}
                height={376}
                alt='hero banner image'
              />
            </div>
          )}
        </>
      )}
    </>
  );

  return (
    <div className='x-container flex flex-col sd:flex-row items-center justify-between text-white sm:px-7 md:px-9 gap-3'>
      {disposition === 'text_left' ? (
        <>
          {contentText}
          {contentImage}
        </>
      ) : (
        <>
          {contentImage}
          {contentText}
        </>
      )}
    </div>
  );
};
