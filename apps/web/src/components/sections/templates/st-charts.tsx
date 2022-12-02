import { ST_Chart, STemplates_Props } from '@apps/contracts';
import dynamic from 'next/dynamic';

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
        return (
          <div
            key={item.item.id}
            className={`mb-5 ${
              markdown_content ? 'flex flex-col-reverse md:flex-row' : ''
            }`}
          >
            {markdown_content && (
              <div className='prose w-full md:w-1/2'>
                <MarkdownContent>{markdown_content || ''}</MarkdownContent>
              </div>
            )}

            <div
              className={`mb-5 w-full relative h-[400px] ${
                markdown_content ? 'md:w-1/2' : ''
              }`}
            >
              <ChartContent item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
}
