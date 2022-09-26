import { useMut } from '@/cms/mut';
import type { ST_Value } from '@/cms/page-sections';
import { HasSvgText } from '@/components/HasSvgText';
import { testHexColor } from '@/utils/tests';

export function ST_ValuesFC({ items }: { items: ST_Value[] }) {
  return (
    <div className='grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-3'>
      {items.map((item) => {
        return <ItemValue key={item.item.id} item={item} />;
      })}
    </div>
  );
}

function ItemValue({ item }: { item: ST_Value }) {
  const { translations, icon_svg, icon_bg_color, flexible } = useMut(item.item);
  const color = testHexColor(icon_bg_color);

  return (
    <div
      className='block__item flex flex-col items-center gap-7'
      data-s-template={item.collection}
    >
      <span
        className='bg-primary-50 px-3 py-3 rounded-full'
        style={{ backgroundColor: color }}
      >
        <HasSvgText
          svgText={icon_svg}
          className={flexible ? 'st_flexible_icon' : 'st_value_icon'}
        />
      </span>
      <h3>{translations?.name}</h3>
      <span className='text-center font-light max-w-sm lg:max-w-lg'>
        {translations?.description}
      </span>
    </div>
  );
}
