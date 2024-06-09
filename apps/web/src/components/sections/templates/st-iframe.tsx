import { ST_Iframe, STemplates_Props } from '@apps/contracts';

export function ST_IframeFC({ items }: STemplates_Props<ST_Iframe>) {
  return (
    <>
      {items.map((item) => {
        return <Iframe item={item} key={item.id} />;
      })}
    </>
  );
}

function Iframe(props: { item: ST_Iframe }) {
  const item = props.item.item;

  return (
    <iframe
      src={item.url}
      width='100%'
      style={{ height: item.height }}
      scrolling={item.scrolling ? undefined : 'no'}
      className={'w-full h-full'}
    />
  );
}
