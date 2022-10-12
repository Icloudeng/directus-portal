import { mut } from '@/cms/mut';
import { STemplates_Props, ST_NavTab } from '@/cms/page-sections';
import { MarkdownContent } from '@/components/react-markdown/MarkdownContent';
import { useSharedData } from '@/store';
import Image from 'next/image';
import React, { PropsWithChildren, useState } from 'react';

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
                className={`markdown__content default__typo mb-5 ${
                  image ? 'pr-4 w-full sm:w-[60%]' : ''
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

function Tabs({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const arrChildren = React.Children.toArray(children);

  const titles = arrChildren.map((child, index) => {
    const el = child as React.ReactElement;
    return {
      title: el.props.title,
      index,
    };
  });

  const newChildren = arrChildren.map((child, index) => {
    const newChild = child as React.ReactElement;
    return React.cloneElement(newChild, {
      active: active === index,
    });
  });

  return (
    <div className='nav__tabs flex flex-col'>
      <div className='tabs__head w-max flex items-center justify-center mx-auto border-b border-[#dae1eb] mb-[40px] lg:mb-[60px] overflow-x-auto'>
        {titles.map(({ title, index }, i) => {
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`relative text-[18px] text-[#1d2330] lg:text-[20px] py-[12px] transition-colors font-medium bg-transparent normal-case ${
                i > 0 ? 'ml-9' : ''
              } ${index === active ? 'active' : ''} cursor-pointer`}
            >
              <span>{title}</span>
            </div>
          );
        })}
      </div>

      <div className='tabs__content'>{newChildren}</div>
    </div>
  );
}

function TabsPane({
  children,
  ...props
}: PropsWithChildren<{
  title: string;
}>) {
  const { active } = props as any;
  return (
    <div className={`relative w-full ${active ? '' : 'hidden'}`}>
      {children}
    </div>
  );
}
