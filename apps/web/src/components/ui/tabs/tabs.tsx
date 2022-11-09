import React from 'react';
import { PropsWithChildren, useState } from 'react';

export function Tabs({ children }: PropsWithChildren) {
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
      <div className='w-full flex items-center justify-center p-3 overflow-x-auto mb-[40px] lg:mb-[60px] '>
        <ul className='tabs__head w-full flex items-start justify-start sm:justify-center  gap-1 whitespace-nowrap px-2'>
          {titles.map(({ title, index }, i) => {
            return (
              <li
                key={index}
                onClick={() => setActive(index)}
                className={`relative text-[18px] text-[#1d2330] lg:text-[20px] py-[12px] border-b border-[#dae1eb] transition-colors font-medium bg-transparent normal-case ${
                  i > 0 ? 'ml-9' : ''
                } ${index === active ? 'active' : ''} cursor-pointer`}
              >
                <span>{title}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='tabs__content'>{newChildren}</div>
    </div>
  );
}

export function TabsPane({
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
