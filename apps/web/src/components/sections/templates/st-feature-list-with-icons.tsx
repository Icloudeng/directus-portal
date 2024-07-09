import { ST_FeatureListWithIcon, STemplates_Props } from '@packages/contracts';

import { ParseSvgText } from '@/components/ui/HasSvgText';

import { useMut } from '@/cms/mut';

export function ST_FeatureListWithIconsFC({
  items,
}: STemplates_Props<ST_FeatureListWithIcon>) {
  return (
    <div className='flex flex-wrap justify-evenly'>
      {items.map((item) => {
        return <STFeatureListWithIcon key={item.item.id} item={item} />;
      })}
    </div>
  );
}

function STFeatureListWithIcon(props: { item: ST_FeatureListWithIcon }) {
  const item = useMut(props.item.item);

  return (
    <div className='xl:w-1/3 md:w-1/2 flex justify-evenly'>
      <div className='p-4'>
        <div
          className='w-16 h-16 inline-flex items-center justify-center rounded-sm mb-4 bg-opacity-15'
          style={{ backgroundColor: `${item.color}3d` }}
        >
          {item.icon_svg && (
            <ParseSvgText
              text={item.icon_svg}
              className='w-8 h-8'
              style={{ fill: item.color }}
            />
          )}
        </div>

        <h5 className='text-lg font-semibold text-gray-900 mb-4'>
          {item.translations?.title}
        </h5>

        <ul>
          {item.translations?.features.map((feature, index) => (
            <li key={index} className='flex space-x-1 mb-2'>
              <svg
                className='w-5 h-5'
                fill={item.color}
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  fillRule='evenodd'
                  clipRule='evenodd'
                ></path>
              </svg>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
