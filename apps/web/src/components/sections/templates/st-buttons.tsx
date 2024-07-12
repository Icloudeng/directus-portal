import { ST_Button, STemplates_Props } from '@packages/contracts';

import ButtonLink from '@/components/ui/links/ButtonLink';

import { useMut } from '@/cms/mut';

export function ST_ButtonsFC({ items }: STemplates_Props<ST_Button>) {
  return (
    <div className='flex justify-center flex-wrap gap-3'>
      {items.map((btn) => {
        return (
          <div key={btn.item.id}>
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
