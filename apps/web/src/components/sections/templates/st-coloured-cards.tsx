import { ST_ColouredCard, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';
import Link from 'next/link';

import clsxm from '@/lib/clsxm';

import { ParseSvgText } from '@/components/ui/HasSvgText';

import { useMut } from '@/cms/mut';

export function ST_ColouredCardsFC({
  items,
}: STemplates_Props<ST_ColouredCard>) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full'>
      {items.map((item) => (
        <STColouredCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function STColouredCard(props: { item: ST_ColouredCard }) {
  const item = useMut(props.item.item);
  const hasLink = !!item.read_more_url && !!item.translations?.read_more;
  const leading = item.leading_card && !!item.background_image;

  return (
    <div
      className={clsxm('relative w-full h-auto', leading && ['md:col-span-2'])}
    >
      <div
        className={clsxm(
          'rounded-2xl overflow-hidden',
          leading
            ? ['flex justify-between flex-row flex-wrap']
            : ['w-full h-full']
        )}
        style={{ backgroundColor: item.background_color }}
      >
        <div
          className={clsxm(
            leading ? ['p-5 xl:p-8 w-full md:w-1/2'] : ['p-5 xl:p-8 h-full']
          )}
        >
          <div className='block'>
            {item.icon_svg && (
              <ParseSvgText
                text={item.icon_svg}
                className='w-8 h-8 brightness-0 invert-[1]'
              />
            )}
          </div>

          <h3 className='py-5 text-white text-lg font-bold xl:text-xl'>
            {item.translations?.title}
          </h3>
          <p className='text-xs font-normal text-white mb-8'>
            {item.translations?.description}
          </p>

          {hasLink && (
            <Link
              href={item.read_more_url || ''}
              className={clsxm(
                'py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold',
                'inline-flex items-center justify-between transition-all duration-500 hover:bg-white/5'
              )}
            >
              {item.translations?.read_more}
              <svg
                width='6'
                height='10'
                viewBox='0 0 6 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1'
                  stroke='white'
                  strokeWidth='1.6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
            </Link>
          )}
        </div>

        {leading && (
          <div className='relative hidden h-auto md:w-1/2 md:block'>
            <Image
              className='object-cover object-center h-full w-full'
              src={item.background_image?.src || ''}
              layout='fill'
              objectFit='cover'
              alt={item.translations?.title || ''}
              loading='lazy'
            />
          </div>
        )}
      </div>
    </div>
  );
}
