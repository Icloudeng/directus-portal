import React from 'react';
import { PropsWithChildren, useState } from 'react';

import clsxm from '@/lib/clsxm';

import Button from '@/components/ui/buttons/Button';

export function MediaTabs({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const arrChildren = React.Children.toArray(children);

  const titles = arrChildren.map((child, index) => {
    const node = child as React.ReactElement;
    return {
      title: node.props.menuTitle,
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
    <div className='w-full flex flex-col items-center gap-5'>
      {titles.length > 1 && (
        <div className='tab-container flex items-center justify-center mb-3 flex-wrap px-10 gap-3'>
          {titles.map(({ title, index }) => {
            return (
              <Button
                key={index}
                onClick={() => setActive(index)}
                className={clsxm(
                  `btn-tab-direction py-3 font-semibold rounded-md border-none bg-[#f5f7fa] text-dark hover:bg-primary-400`,
                  index === active && 'btn-tab-active'
                )}
              >
                {title}
              </Button>
            );
          })}
        </div>
      )}

      <div className='w-full p-7 bg-[#f5f7fa] rounded-3xl'>{newChildren}</div>
    </div>
  );
}

export function MediaTabsPane({
  children,
  title,
  description,
  disposition,
  ...props
}: PropsWithChildren<{
  menuTitle: string;
  title?: string;
  description?: string;
  disposition?: 'text_top' | 'text_bottom';
}>) {
  const { active } = props as any;
  const text = (
    <>
      {(title || description) && (
        <div className='flex flex-col items-center justify-center gap-7 mb-7'>
          <h3 className='text-center'>{title}</h3>
          {description && (
            <span className='max-w-xl text-center'>{description}</span>
          )}
        </div>
      )}
    </>
  );
  return (
    <div className={clsxm('relative w-full', !active && 'hidden')}>
      {disposition === 'text_bottom' ? (
        <>
          {children}
          {text}
        </>
      ) : (
        <>
          {text}
          {children}
        </>
      )}
    </div>
  );
}
