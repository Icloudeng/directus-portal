import { STemplates_Props, ST_GroupedLogo } from '@apps/contracts';
import Image from 'next/legacy/image';

export function ST_GroupedLogosFC({ items }: STemplates_Props<ST_GroupedLogo>) {
  const grouped = items.reduce((acc, item) => {
    const last = acc[acc.length - 1];
    if (!last || last.length >= 5) {
      acc.push([item]);
    } else {
      last.push(item);
    }
    return acc;
  }, [] as ST_GroupedLogo[][]);

  return (
    <>
      {grouped.map((group, i) => {
        const hasMargin =
          grouped.length > 1 && grouped[grouped.length - 1] !== group;
        return (
          <div
            key={i}
            className={`relative flex flex-wrap items-center justify-center gap-20 lg:gap-32 ${
              hasMargin ? 'mb-12' : ''
            }`}
          >
            {group.map((data) => {
              return <Logo key={data.item.id} {...data} />;
            })}
          </div>
        );
      })}
    </>
  );
}

function Logo({ item }: ST_GroupedLogo) {
  const { image } = item;

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='relative h-auto min-w-[64px] min-h-[64px] max-w-[112px] p-2'>
        <Image
          className='image object-cover'
          src={image?.src || ''}
          width={image.width}
          height={image.height}
          alt='Image'
          loading='lazy'
        />
      </div>
      {item.name && <span>{item.name}</span>}
    </div>
  );
}
