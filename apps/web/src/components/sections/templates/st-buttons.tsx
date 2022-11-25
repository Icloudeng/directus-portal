import { useMut } from '@/cms/mut';
import { STemplates_Props, ST_Button } from '@apps/contracts';
import ButtonLink from '@/components/ui/links/ButtonLink';

export function ST_ButtonsFC({ items }: STemplates_Props<ST_Button>) {
  return (
    <div className='flex justify-center flex-wrap'>
      {items.map((btn, i) => {
        return (
          <div
            key={btn.item.id}
            className={items.length > 1 && i > 0 ? 'ml-3' : ''}
          >
            <ButtonItem {...btn} />
          </div>
        );
      })}
    </div>
  );
}

function ButtonItem({ item }: ST_Button) {
  const { translations, variant, url, external } = useMut(item);
  return (
    <ButtonLink
      href={url}
      className='px-7 py-3'
      variant={variant}
      target={external ? '_blank' : undefined}
    >
      {translations?.button_text}
    </ButtonLink>
  );
}
