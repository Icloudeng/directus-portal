import { ST_CardContent, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';

import ButtonLink from '@/components/ui/links/ButtonLink';

import { useMut } from '@/cms/mut';

export function ST_CardContentsFC({ items }: STemplates_Props<ST_CardContent>) {
  return (
    <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
      {items.map((item) => (
        <STCardContent key={item.item.id} item={item} />
      ))}
    </div>
  );
}

function STCardContent(props: { item: ST_CardContent }) {
  const item = useMut(props.item.item);

  return (
    <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
      <div className='rounded-lg h-64 overflow-hidden relative'>
        <Image
          className='object-cover object-center h-full w-full'
          src={item.image?.src || ''}
          layout='fill'
          objectFit='cover'
          alt={item.translations?.title || ''}
          loading='lazy'
        />
      </div>
      <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
        {item.translations?.title}
      </h2>
      <p className='text-base leading-relaxed mt-2'>
        {item.translations?.description}
      </p>

      <div className='flex space-x-2 mt-3'>
        {(item.translations?.buttons || []).map((btn, i) => {
          return (
            <ButtonLink
              key={i}
              href={btn.url}
              variant={btn.variant || undefined}
              target={btn.external ? '_blank' : undefined}
              className='px-4 py-3 rounded-lg text-center text-sm font-medium'
            >
              {btn.name}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
}
