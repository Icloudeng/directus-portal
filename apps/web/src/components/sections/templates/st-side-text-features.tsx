import { ST_SideTextFeature, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';

import clsxm from '@/lib/clsxm';

import { ParseSvgText } from '@/components/ui/HasSvgText';

import { useMut } from '@/cms/mut';

export function ST_SideTextFeaturesFC({
  items,
}: STemplates_Props<ST_SideTextFeature>) {
  return (
    <div className='flex flex-col gap-16'>
      {items.map((item) => {
        return <SideTextFeature key={item.item.id} {...item} />;
      })}
    </div>
  );
}

function SideTextFeature({ item }: ST_SideTextFeature) {
  const { translations, image, sided, disposition } = useMut(item);

  return (
    <div
      className={clsxm(
        'lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex  md:gap-6 justify-center md:space-y-0 lg:items-center',
        disposition === 'text_left' ? 'flex-row-reverse' : 'flex-row',
        !sided && 'md:block'
      )}
    >
      <div
        className={clsxm(
          'md:5/12 lg:w-1/2 relative h-full',
          'h-[15rem] ss:min-h-96',
          !sided && 'md:w-full lg:w-full ss:min-h-[27rem] mb-4'
        )}
      >
        <Image
          className='object-cover object-center h-full w-full'
          src={image?.src || ''}
          layout='fill'
          objectFit='cover'
          alt={translations?.title || ''}
          loading='lazy'
        />
      </div>

      <div
        className={clsxm('md:7/12 lg:w-1/2', !sided && 'md:w-full lg:w-full')}
      >
        <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
          {translations?.title}
        </h2>

        <p className='my-8 text-gray-700'>{translations?.description}</p>

        {translations?.features && (
          <div className='divide-y space-y-4 divide-gray-100'>
            {translations?.features.map((feature, i) => (
              <div key={i} className='mt-8 flex gap-4 md:items-center'>
                <div
                  className='w-12 h-12 flex gap-4 rounded-full'
                  style={{ backgroundColor: `${feature.color}3d` }}
                >
                  <ParseSvgText
                    text={feature.icon_svg}
                    className='w-6 h-6 m-auto'
                    style={{ color: feature.color }}
                  />
                </div>
                <div className='w-5/6'>
                  <h4 className='font-semibold text-lg text-gray-700'>
                    {feature.title}
                  </h4>

                  {feature.description && (
                    <p className='text-gray-500'>{feature.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
