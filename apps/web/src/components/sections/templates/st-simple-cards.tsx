import { useMut } from '@/cms/mut';
import { HasSvgText } from '@/components/ui/HasSvgText';
import { ST_SimpleCard, STemplates_Props } from '@apps/contracts';

export function ST_SimpleCardsFC({ items }: STemplates_Props<ST_SimpleCard>) {
  return (
    <div className='flex flex-wrap -m-4'>
      {items.map((item) => {
        return <STSimpleCard key={item.item.id} item={item} />;
      })}
    </div>
  );
}

function STSimpleCard(props: { item: ST_SimpleCard }) {
  const item = useMut(props.item.item);

  return (
    <div className='xl:w-1/3 md:w-1/2 p-4'>
      <div className='border border-gray-200 p-6 rounded-lg'>
        <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-primary-500 mb-4'>
          {item.icon_svg && (
            <HasSvgText svgText={item.icon_svg} className='st_value_icon' />
          )}
        </div>
        <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>
          {item.translations?.title}
        </h2>
        <p className='leading-relaxed text-base'>
          {item.translations?.description}
        </p>
      </div>
    </div>
  );
}
