import { ST_HoverableMediaMenu, STemplates_Props } from '@apps/contracts';

import {
  HoverableMenus,
  HoverableMenusItem,
} from '@/components/ui/hoverable-menu/hoverable-menu';
import { MarkdownContent } from '@/components/ui/react-markdown/MarkdownContent';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_HoverableMediaMenusFC({
  items,
}: STemplates_Props<ST_HoverableMediaMenu>) {
  const { locale } = useSharedData();
  return (
    <HoverableMenus>
      {items.map(({ item }) => {
        const { translations, image, id } = mut(item, locale);
        return (
          <HoverableMenusItem key={id} image={image}>
            <div className='markdown__content mb-5'>
              <MarkdownContent>
                {translations?.markdown_content || ''}
              </MarkdownContent>
            </div>
          </HoverableMenusItem>
        );
      })}
    </HoverableMenus>
  );
}
