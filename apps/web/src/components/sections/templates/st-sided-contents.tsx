import type { ST_SidedContent, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';

import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

import { useMut } from '@/cms/mut';

export function ST_SidedContentsFC({
  items,
}: STemplates_Props<ST_SidedContent>) {
  const groupedItems = items.reduce((acc, item) => {
    const last = acc[acc.length - 1];
    if (!last || last.length === 2) {
      acc.push([item]);
    } else {
      acc[acc.length - 1].push(item);
    }
    return acc;
  }, [] as (typeof items)[]);

  return (
    <>
      {groupedItems.map((group, i) => {
        return (
          <div
            key={i}
            className='w-full h-full flex flex-col md:flex-row items-center justify-center'
          >
            {group.map((data) => {
              return <SidedContent key={data.item.id} {...data} />;
            })}
          </div>
        );
      })}
    </>
  );
}

function SidedContent({ item }: ST_SidedContent) {
  const { disposition, translations, image } = useMut(item);
  return (
    <div
      className={
        disposition === 'text_bottom'
          ? 'easy__right flex-1 flex flex-col md:flex-col-reverse ml-2 ss:p-7'
          : 'easy__left flex-1 flex flex-col mr-2 ss:p-7'
      }
    >
      <div className='flex flex-col items-center md:items-start gap-7'>
        {translations?.title && (
          <h6 className='mb-2 text-center md:text-start text-lg font-semibold tracking-tight'>
            {translations?.title}
          </h6>
        )}
        <div className='prose'>
          <MarkdownContent>
            {translations?.markdown_content || ''}
          </MarkdownContent>
        </div>
      </div>
      {image?.src && (
        <div
          className={`${
            disposition === 'text_bottom' ? 'mt-0 md:mb-10' : 'mt-10'
          }`}
        >
          <div className='image-container relative h-[21rem]'>
            <Image
              className='image object-cover rounded-t-lg md:rounded-sm md:rounded-r-lg'
              src={image.src}
              layout='fill'
              objectFit='cover'
              alt={translations?.title}
              loading='lazy'
            />
          </div>
        </div>
      )}
    </div>
  );
}
