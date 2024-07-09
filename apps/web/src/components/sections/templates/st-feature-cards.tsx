import { ST_FeatureCard, STemplates_Props } from '@packages/contracts';

import { ParseSvgText } from '@/components/ui/HasSvgText';

import { useMut } from '@/cms/mut';

export function ST_FeatureCardsFC({ items }: STemplates_Props<ST_FeatureCard>) {
  return (
    <div className='flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8'>
      {items.map((item) => (
        <STFeatureCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function STFeatureCard(props: { item: ST_FeatureCard }) {
  const item = useMut(props.item.item);

  return (
    <div className='group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary-600'>
      {item.icon_svg && (
        <div className='bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 '>
          <ParseSvgText
            text={item.icon_svg}
            className='w-8 h-8 stroke-primary-400'
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
