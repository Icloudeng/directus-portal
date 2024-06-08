import { MDHomePageHero } from '@apps/contracts';
import Image from 'next/legacy/image';
import { useCallback, useMemo, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/ui/NextImage';

import { useSharedData } from '@/app/store';
import { useMut } from '@/cms/mut';
import ButtonLink from '@/components/ui/links/ButtonLink';

type AccType =
  | ((element: HTMLElement | null) => void | Promise<void>)
  | string
  | number;

export const HomeHeroSection = ({ data }: { data: MDHomePageHero }) => {
  const shared = useSharedData();
  const { translations, image, images, disposition } = useMut(data);

  const buttons = translations?.buttons || [];

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
  }, [trailing_titles, onTypingProgress]);

  const contentText = (
    <div className='hero-left sd:w-1/2'>
      <div className='flex flex-col items-center sd:items-start gap-4 sm:gap-7 mb-6'>
        <h1
          className={clsxm(
            'font-extrabold text-4xl sd:text-2xl sm:text-[2.3rem] -mb-4 text-center sd:text-start md:leading-[3rem]',
            !translations?.title && trailingTitles.length === 0 && 'hidden'
          )}
        >
          {translations?.title && (
            <span className='block'>{translations?.title}</span>
          )}

          {trailingTitles.length > 0 && (
            <TypeAnimation
              key={shared.locale}
              sequence={trailingTitles}
              speed={40}
              className='font-extrabold leading-[1.3] text-4xl sd:text-2xl sm:text-[2.2rem] md:text-[2.7rem] md:leading-[3rem]'
              wrapper='span'
              repeat={Infinity}
              cursor={true}
            />
          )}
        </h1>
      </div>

      {translations?.description && (
        <span className='text-gray-300 text-center sd:text-start max-w-lg leading-[1.5] sm:text-[1rem] md:text-[20px] sd:w-[95%]'>
          {translations?.description}
        </span>
      )}

      {buttons.length > 0 && (
        <div className='flex flex-wrap gap-3 mt-6'>
          {buttons.map((btn, i) => {
            return (
              <div key={i}>
                <ButtonLink
                  href={btn.url}
                  className='px-7 py-3'
                  variant={btn.variant}
                  target={btn.external ? '_blank' : undefined}
                >
                  {btn.name}
                </ButtonLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  const contentImage = (
    <>
      {images.length > 0 ? (
        <div
          className={clsxm(
            'relative hero-right flex items-center justify-end h-80 max-w-xs sd:max-w-full w-full sd:w-1/2',
            disposition === 'text_left' ? 'justify-end' : 'justify-start'
          )}
        >
          <div className='overflow-hidden w-full h-full'>
            <div className='flex w-full h-full relative'>
              {images.map(({ directus_files_id: { id, src } }, index) => {
                const len = images.length - 1;
                const activated =
                  imageKey > len && imageKey > index
                    ? true
                    : imageKey === index;

                return (
                  <div
                    key={id}
                    className={clsxm(
                      'absolute transition-opacity duration-300 inset-0',
                      activated ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    {src && (
                      <Image
                        className='image object-cover'
                        src={src}
                        layout='fill'
                        objectFit='cover'
                        alt='accordion image'
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <>
          {image?.src && (
            <div
              className={clsxm(
                'hero-right flex items-center  max-w-xs sd:max-w-full sd:w-1/2',
                disposition === 'text_left' ? 'justify-end' : 'justify-start'
              )}
            >
              <NextImage
                useSkeleton
                src={image.src}
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
