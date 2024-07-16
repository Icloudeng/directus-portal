import { ST_FeatureCard, STemplates_Props } from '@packages/contracts';

import clsxm from '@/lib/clsxm';

import { ParseSvgText } from '@/components/ui/HasSvgText';

import { useMut } from '@/cms/mut';

export function ST_FeatureCardsFC({ items }: STemplates_Props<ST_FeatureCard>) {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-5'>
      {items.map((item) => (
        <STFeatureCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function STFeatureCard(props: { item: ST_FeatureCard }) {
  const item = useMut(props.item.item);

  return (
    <div
      className={clsxm(
        'group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 hover:bg-primary-600 hover:bg-opacity-80'
      )}
    >
      {item.icon_svg && (
        <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 '>
          <ParseSvgText
            text={item.icon_svg}
            className='w-8 h-8 fill-primary-400'
          />
        </div>
      )}

      <h4 className='text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white'>
        {item.translations?.title}
      </h4>

      <p className='text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white'>
        {item.translations?.description}
      </p>
    </div>
  );
}
