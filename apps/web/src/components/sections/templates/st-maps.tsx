import { ST_Map, STemplates_Props } from '@apps/contracts';
import dynamic from 'next/dynamic';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

const ReactLeaflet = dynamic(() => import('@/components/ui/react-leaflet'), {
  ssr: false,
});

export function ST_MapsFC({ items }: STemplates_Props<ST_Map>) {
  const { locale } = useSharedData();

  return (
    <>
      {items.map((item) => {
        const { translations, id, localization } = mut(item.item, locale);

        return (
          <div key={id} className='border-b py-4'>
            {translations?.label && (
              <p className='mb-3 font-medium'>{translations?.label}</p>
            )}
            <div className='w-full h-96'>
              <ReactLeaflet
                position={localization}
                name={translations?.description}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
