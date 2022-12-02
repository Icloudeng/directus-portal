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
            className={`prose md:prose-lg lg:prose-xl mb-4 w-full ${
              toc ? 'max-w-none' : ''
            }`}
            key={item.id}
          >
            <MarkdownContent toc={toc}>
              {translations?.markdown_content || ''}
            </MarkdownContent>
          </div>
        );
      })}
    </>
  );
}
