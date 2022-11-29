import { ST_Card, STemplates_Props } from '@apps/contracts';

import { Card } from '@/components/ui/cards/Card';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_CardsFC({ items }: STemplates_Props<ST_Card>) {
  const { locale } = useSharedData();

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {items.map(({ item }) => {
        const { translations } = mut(item, locale);
        return (
          <Card
            key={item.id}
            buttons={translations?.buttons}
            image={item.image}
            description={translations?.description}
            clickable_card={item.clickable_card}
            background_color={item.background_color}
            border_card={item.border_card}
            flexible_image={item.flexible_image}
            title={translations?.title || ''}
          />
        );
      })}
    </div>
  );
}
