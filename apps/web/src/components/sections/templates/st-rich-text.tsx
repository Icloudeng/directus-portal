import { ST_RichText, STemplates_Props } from '@packages/contracts';

import clsxm from '@/lib/clsxm';

import { useRehypeReactProcessor } from '@/app/hooks/useRehypeReactProcessor';
import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_RichTextFC({ items }: STemplates_Props<ST_RichText>) {
  const { locale } = useSharedData();
  return (
    <>
      {items.map(({ item }) => {
        const { translations, toc } = mut(item, locale);
        return (
          <div
            className='prose md:prose-lg mb-4 w-full max-w-none'
            key={item.id}
          >
            <TextContent text={translations?.text || ''} toc={toc} />
          </div>
        );
      })}
    </>
  );
}

function TextContent({ toc, text }: { toc: boolean; text: string }) {
  const { tocParent, Content } = useRehypeReactProcessor(text, toc);
  return (
    <div className={clsxm(`w-full`, toc && 'lg:flex')}>
      {toc && (
        <div className='lg:w-[30%] lg:mt-10'>
          <div
            className='lg:sticky lg:top-48 lg:mr-4 lg:text-lg lg:max-h-[80vh] overflow-auto'
            ref={tocParent}
          />
        </div>
      )}
      <div className={clsxm(toc && 'lg:w-[70%]')}>{Content}</div>
    </div>
  );
}
