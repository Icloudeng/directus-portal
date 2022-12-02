import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';
import { STemplates_Props, ST_RichText } from '@apps/contracts';

export function ST_RichTextFC({ items }: STemplates_Props<ST_RichText>) {
  const { locale } = useSharedData();
  return (
    <>
      {items.map(({ item }) => {
        const { translations } = mut(item, locale);
        return (
          <div
            key={item.id}
            className='markdown__content default__typo mb-4 w-full'
            dangerouslySetInnerHTML={{ __html: translations?.text || '' }}
          />
        );
      })}
    </>
  );
}
