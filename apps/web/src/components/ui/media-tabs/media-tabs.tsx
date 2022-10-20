import React from 'react';
import { PropsWithChildren, useState } from 'react';
import Button from '@/components/ui/buttons/Button';

export function MediaTabs({ children }: PropsWithChildren) {
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
    <div className='w-full flex flex-col items-center gap-5'>
      <div className='tab-container flex items-center px-10 gap-3'>
        {titles.map(({ title, index }, i) => {
          return (
            <Button
              key={index}
              onClick={() => setActive(index)}
              className={`btn-tab-direction ${
                index === active ? 'btn-tab-active' : ''
              } py-3 font-semibold rounded-md border-none bg-[#f5f7fa] text-dark hover:bg-primary-400`}
            >
              {title}
            </Button>
          );
        })}
      </div>

      <div className='w-full p-7 bg-[#f5f7fa] rounded-3xl'>{newChildren}</div>
    </div>
  );
}

export function MediaTabsPane({
  children,
  menuTitle,
  title,
  description,
  ...props
}: PropsWithChildren<{
  menuTitle: string;
  title: string;
  description?: string;
}>) {
  const { active } = props as any;
  return (
    <div className={`relative w-full ${active ? '' : 'hidden'}`}>
      <div className='flex flex-col items-center justify-center gap-7 mb-7'>
        <h3 className='text-center'>{title}</h3>
        {description && (
          <span className='max-w-xl text-center'>{description}</span>
        )}
      </div>
      {/* <div className='video-wrapper w-full '>
        <div className='video-container relative w-full h-[37rem] z-[1]'>
          <Skeleton className='absolute inset-0 text-primary-500 rounded-xl -z-[1]' />
          {mounted && (
            <ReactPlayer
              url={tabBigData.videoLink}
              // url='https://www.youtube.com/watch?v=GjPehgvSLH0'
              // light
              width='100%'
              height='100%'
              // style={{ pointerEvents: 'none', position: 'absolute' }}
            />
          )}
        </div>
      </div> */}
      {children}
    </div>
  );
}
