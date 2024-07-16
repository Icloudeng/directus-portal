import { ST_SimpleCard, STemplates_Props } from '@packages/contracts';

import { HasSvgText } from '@/components/ui/HasSvgText';

import { useMut } from '@/cms/mut';

export function ST_SimpleCardsFC({ items }: STemplates_Props<ST_SimpleCard>) {
  return (
    <div className='flex flex-wrap items-stretch'>
      {items.map((item) => {
        return <STSimpleCard key={item.item.id} item={item} />;
      })}
    </div>
  );
}

function STSimpleCard(props: { item: ST_SimpleCard }) {
  const item = useMut(props.item.item);

  return (
    <div className='w-full xl:w-1/3 md:w-1/2 p-4'>
      <div className='border border-gray-200 p-6 rounded-lg h-full'>
        <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-50 text-primary-500 mb-4'>
          {item.icon_svg && (
            <HasSvgText svgText={item.icon_svg} className='st_value_icon' />
          )}
        </div>
        <h3 className='text-lg text-gray-900 font-medium title-font mb-2'>
          {item.translations?.title}
        </h3>
        <p className='leading-relaxed text-base'>
          {item.translations?.description}
        </p>
      </div>
    </div>
  );
}
