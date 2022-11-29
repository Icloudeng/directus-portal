import { ST_LatestNew, STemplates_Props } from '@apps/contracts';

import { NewsCard } from '@/components/ui/cards/NewsCard';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_LatestNewsFC({ items }: STemplates_Props<ST_LatestNew>) {
  const { item } = items[0];
  const { locale } = useSharedData();

  return (
    <div className='cards--news flex flex-wrap'>
      {item.news?.map(($new) => {
        const { translations, id, image, date_created, slug } = mut(
          $new,
          locale
        );
        return (
          <div className='w-full sd:w-1/2 lg:w-1/3 px-3 mb-10' key={id}>
            <NewsCard
              image={image}
              title={translations?.title || ''}
              summary={translations?.summary}
              date={new Date(date_created).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              link={'/news/' + slug}
            />
          </div>
        );
      })}
    </div>
  );
}
