import { ST_TimelineCard, STemplates_Props } from '@packages/contracts';

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
        <h4 className='box-title_timeline'>{item.translations?.title}</h4>
        <i className='text-sm'>{item.translations?.slogan}</i>
      </div>

      <div className='descr_timeline'>{item.translations?.description}</div>
      <div className='link_timeline ps-6 pb-4'>
        <a 
          className="text-blue-500 inline-flex items-center text-sm" 
          style={{ '--accent-color': item.color } as any} 
          href={ item.readmore_url }>
            Read more
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </li>
  );
}
