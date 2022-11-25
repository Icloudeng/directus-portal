import { mut } from '@/cms/mut';
import { STemplates_Props, ST_NavTab } from '@apps/contracts';
import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';
import { Tabs, TabsPane } from '@/components/ui/tabs/tabs';
import { useSharedData } from '@/app/store';
import Image from "next/legacy/image";

export function ST_NavTabsFC({ items }: STemplates_Props<ST_NavTab>) {
  const { locale } = useSharedData();

  return (
    <Tabs>
      {items.map(({ item }) => {
        const { translations, image, disposition } = mut(item, locale);
        return (
          <TabsPane key={item.id} title={translations?.name || ''}>
            <div className='flex flex-col sm:flex-row'>
              <div
                className={`markdown__content w-full default__typo mb-5 ${
                  image ? 'pr-4 sm:w-[60%]' : ''
                }`}
              >
                <MarkdownContent>
                  {translations?.markdown_content || ''}
                </MarkdownContent>
              </div>
              {image && (
                <div
                  className={`relative w-full sm:w-[40%] -order-1 ${
                    disposition === 'text_left' ? 'sm:order-1' : 'mr-4'
                  } mb-5 min-h-[400px]`}
                >
                  <Image
                    className='image object-cover'
                    layout='fill'
                    src={image.src!}
                    loading='lazy'
                  />
                </div>
              )}
            </div>
          </TabsPane>
        );
      })}
    </Tabs>
  );
}
