import { mut } from '@/cms/mut';
import { STemplates_Props, ST_StreamableCard } from '@/cms/page-sections';
import { RectCard } from '@/components/ui/cards/RectCard';
import { HasSvgText } from '@/components/ui/HasSvgText';
import { useSharedData } from '@/app/store';
import { useMemo } from 'react';

type GroupedItem = {
  [k in ST_StreamableCard['item']['stream_direction']]: ST_StreamableCard[];
};

export function ST_StreamableCardsFC({
  items,
}: STemplates_Props<ST_StreamableCard>) {
  const { locale } = useSharedData();
  const groupedItems = useMemo(() => {
    const datas = items.reduce((acc, v) => {
      if (!acc[v.item.stream_direction]) {
        acc[v.item.stream_direction] = [];
      }
      acc[v.item.stream_direction].push(v);
      return acc;
    }, {} as GroupedItem);

    return Object.values(datas).map((group) => {
      const diff = 20 - group.length;
      let i = 0;
      const arr = group.slice();
      for (let index = 0; index < diff; index++) {
        if (!arr[i]) i = 0;
        const d = JSON.parse(JSON.stringify(arr[i++])) as ST_StreamableCard;
        d.id = `${d.id}-${index}`;
        group.push(d);
      }
      return group;
    });
  }, [items]);

  return (
    <div className='max-w-full flex flex-col gap-7'>
      {groupedItems.map((group, i) => {
        const {
          item: { stream_direction },
        } = group[0];
        return (
          <div
            key={i}
            className={`w-full flex ${
              stream_direction === 'stream_left'
                ? 'items-end justify-end animate-streamleft'
                : 'items-start justify-start animate-streamright'
            }`}
          >
            {group.map(({ item, id }) => {
              const { translations } = mut(item, locale);
              return (
                <RectCard
                  key={id}
                  cardLogo={
                    item.image_svg || item.image ? (
                      <HasSvgText
                        className='st_flexible_icon'
                        svgText={item.image_svg}
                        fallback={
                          <>
                            {item.image && (
                              <img
                                src={item.image.src}
                                className='w-full h-full'
                              />
                            )}
                          </>
                        }
                      />
                    ) : undefined
                  }
                  cardText={translations?.name}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
