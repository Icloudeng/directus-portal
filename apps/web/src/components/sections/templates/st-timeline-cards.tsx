import { ST_TimelineCard, STemplates_Props } from '@apps/contracts';

import { useMut } from '@/cms/mut';

export function ST_TimelineCardsFC({
  items,
}: STemplates_Props<ST_TimelineCard>) {
  return (
    <div className='text-gray-600 body-font'>
      <div className='body_timeline'>
        <ul className='ul_timeline'>
          {items.map((item) => (
            <STTimelineCard key={item.item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function STTimelineCard(props: { item: ST_TimelineCard }) {
  const item = useMut(props.item.item);

  return (
    <li className='li_timeline'>
      <div
        style={{ '--accent-color': item.color } as any}
        className='date_timeline'
      >
        {item.translations?.card_title}
      </div>

      <div className='title_timeline'>
        <h3 className='box-title_timeline'>{item.translations?.title}</h3>
      </div>

      <div className='descr_timeline'>{item.translations?.description}</div>
    </li>
  );
}
