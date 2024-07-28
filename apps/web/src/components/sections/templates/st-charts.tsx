import { ST_Chart, STemplates_Props } from '@packages/contracts';
import dynamic from 'next/dynamic';

import cn from '@/lib/cn';

import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

const ChartContent = dynamic(
  () => import('@/components/sections/shared/chart/chart'),
  { ssr: false }
);

export function ST_ChartsFC({ items }: STemplates_Props<ST_Chart>) {
  const { locale } = useSharedData();

  return (
    <>
      {items.map((item) => {
        const { translations } = mut(item.item, locale);
        const markdown_content = translations?.markdown_content;
        const hasTextContent = item.item.show_text && markdown_content;

        return (
          <div
            key={item.item.id}
            className={cn(
              `mb-5`,
              hasTextContent && 'flex flex-col-reverse md:flex-row'
            )}
          >
            {hasTextContent && (
              <div className='prose w-full md:w-1/2'>
                <MarkdownContent>{markdown_content || ''}</MarkdownContent>
              </div>
            )}

            <div
              className={cn(
                `my-5 w-full relative h-[250px] md:h-[400px]`,
                hasTextContent && 'md:w-1/2'
              )}
            >
              <ChartContent item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
}
