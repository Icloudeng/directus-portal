import { mut } from '@/cms/mut';
import { STemplates_Props, ST_PageAsideMenu } from '@/cms/page-sections';
import {
  AsideMenu,
  AsideMenuContent,
} from '@/components/aside-menu/aside-menu';
import { MarkdownContent } from '@/components/react-markdown/MarkdownContent';
import { useSharedData } from '@/store';

export function ST_PageAsideMenusFC({
  items,
}: STemplates_Props<ST_PageAsideMenu>) {
  const { locale } = useSharedData();

  return (
    <AsideMenu>
      {items.map((aside, i) => {
        const { translations } = mut(aside.item, locale);
        return (
          <AsideMenuContent
            menuTitle={translations?.menu_name || 'Menu-' + i}
            title={translations?.title}
          >
            <div className='markdown__content'>
              <MarkdownContent>
                {translations?.markdown_content || ''}
              </MarkdownContent>
            </div>
          </AsideMenuContent>
        );
      })}
    </AsideMenu>
  );
}
