import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';
import { STemplates_Props, ST_Markdown } from '@/cms/page-sections';
import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

export function ST_MarkdownFC({ items }: STemplates_Props<ST_Markdown>) {
  const { locale } = useSharedData();
  return (
    <>
      {items.map(({ item }) => {
        const { translations } = mut(item, locale);
        return (
          <div
            className='markdown__content default__typo mb-4 w-full'
            key={item.id}
          >
            <MarkdownContent>
              {translations?.markdown_content || ''}
            </MarkdownContent>
          </div>
        );
      })}
    </>
  );
}
