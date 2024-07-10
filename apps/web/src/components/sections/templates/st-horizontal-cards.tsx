import { ST_HorizontalCards, STemplates_Props }  from '@packages/contracts';

import { HorizontalCard } from '@/components/ui/cards/HorizontalCard';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_HorizontalCardsFC({
  items,
}: STemplates_Props<ST_HorizontalCards>) {
  const { locale } = useSharedData();

  return (
    <div>
      {items.map(({ item }) => {
        const { translations } = mut(item, locale);
        return (
          <HorizontalCard
            key={item.id}
            buttons={translations?.buttons}
            image={item.image}
            clickable_card={item.clickable_card}
            background_color={item.background_color}
            border_card={item.border_card}
            flexible_image={item.flexible_image}
            big_title={translations?.big_title || ''}
            desc={translations?.description || ''}
            small_title={translations?.small_title || ''}
            hover_animation={item.hover_animation}
          />
        );
      })}
    </div>
  );
}
