import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';

import NextImage from '@/components/NextImage';

import { MDHomePageHero } from '@/cms/items/types';
import { useMut } from '@/cms/mut';

export const HeroSection = ({ data }: { data: MDHomePageHero }) => {
  const { t } = useTranslation('home');
  const { translations, image, disposition } = useMut(data);
  const trailing_titles = translations?.trailing_titles;

  const trailingTitles = useMemo(() => {
    if (!trailing_titles) return [];
    return trailing_titles.reduce((acc, value) => {
      acc.push(value, 1000);
      return acc;
    }, [] as (string | number)[]);
  }, [trailing_titles]);

  const contentText = (
    <div className='hero-left flex flex-col sd:w-1/2 gap-7'>
      <div className='flex flex-col items-center sd:items-start gap-4 sm:gap-7'>
        <h1 className='font-extrabold text-4xl sd:text-2xl sm:text-[2.2rem] md:text-[2.7rem] -mb-4 text-center sd:text-start md:leading-[3rem]'>
          {translations?.title}{' '}
        </h1>
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={trailingTitles}
          speed={30} // Custom Speed from 1-99 - Default Speed: 40
          // style={{ fontSize: '2em' }}
          className='font-extrabold leading-[1.3] text-4xl sd:text-2xl sm:text-[2.2rem] md:text-[2.7rem] md:leading-[3rem]'
          wrapper='h2' // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
          cursor={true}
        />
      </div>

      <span className='text-gray-300 text-center sd:text-start max-w-lg leading-[1.5] sm:text-[1rem] md:text-[20px] sd:w-[95%]'>
        {translations?.description}
      </span>
    </div>
  );

  const contentImage = (
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
