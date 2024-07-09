import { ST_LeftRightContent, STemplates_Props } from '@packages/contracts';
import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';

import { HasSvgText } from '@/components/ui/HasSvgText';
import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_LeftRightContentsFC({
  items,
}: STemplates_Props<ST_LeftRightContent>) {
  const { locale } = useSharedData();
  const { t } = useTranslation();
  //
  return (
    <div className='container px-5 mx-auto'>
      {items.map(({ item }, i) => {
        const { translations } = mut(item, locale);
        const image = (
          <HasSvgText
            svgText={item.image_svg}
            className='sm:w-16 sm:h-16 w-10 h-10 relative'
            fallback={
              <Image
                src={item.image?.src || ''}
                className='w-full h-full rounded-full'
                layout='fill'
                objectFit='cover'
                alt={translations?.title}
              />
            }
          />
        );

        const text = (
          <>
            <h3 className='text-gray-900 text-lg title-font font-medium mb-2'>
              {translations?.title}
            </h3>
            <p className='leading-relaxed text-base'>
              {translations?.description}
            </p>

            {item.read_more_url && (
              <UnstyledLink
                href={item.read_more_url}
                target={item.external ? '_blank' : undefined}
                className='mt-3 text-primary-400 inline-flex items-center'
              >
                {t('Read More')}
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </UnstyledLink>
            )}
          </>
        );

        return (
          <div
            key={item.id}
            className={`flex items-center lg:w-3/5 mx-auto pb-10 mb-10 ${
              i + 1 !== items.length ? 'border-b border-gray-200' : ''
            } sm:flex-row flex-col`}
          >
            {(i + 1) % 2 === 0 ? (
              <>
                <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                  {text}
                </div>
                <div className='sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-400 flex-shrink-0'>
                  {image}
                </div>
              </>
            ) : (
              <>
                <div className='sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-400 flex-shrink-0'>
                  {image}
                </div>
                <div className='flex-grow sm:text-left text-center mt-6 sm:mt-0'>
                  {text}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
