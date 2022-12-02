import { ST_Markdown, STemplates_Props } from '@apps/contracts';

import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_MarkdownFC({ items }: STemplates_Props<ST_Markdown>) {
  const { locale } = useSharedData();
  return (
    <>
      {items.map(({ item }) => {
        const { translations, toc } = mut(item, locale);
        return (
          <div
            className='markdown__content default__typo mb-4 w-full'
            key={item.id}
          >
            <MarkdownContent toc={toc} toc_parent={translations?.toc_parent}>
              {translations?.markdown_content || ''}
            </MarkdownContent>
          </div>
        );
      })}
    </>
  );
}
