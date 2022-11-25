import { useMut } from '@/cms/mut';
import type { STemplates_Props, ST_Value } from '@apps/contracts';
import { HasSvgText } from '@/components/ui/HasSvgText';
import { testHexColor } from '@/app/utils/tests';

export function ST_ValuesFC({ items }: STemplates_Props<ST_Value>) {
  const first = items[0];
  return (
    <div
      className={`grid grid-cols-1 sd:grid-cols-2 gap-16 ${
        first.item.rows === 'dynamic'
          ? 'lg:flex items-center justify-center'
          : ''
      }  lg:gap-3`}
    >
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
    <div className='block__item flex flex-col items-center gap-7'>
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
