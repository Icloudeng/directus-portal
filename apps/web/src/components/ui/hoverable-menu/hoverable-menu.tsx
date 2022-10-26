import React from 'react';
import { PropsWithChildren, useState } from 'react';
import { MDWithAsset } from '@/types/directus';
import { HasMediaPlayer } from '../HasMediaPlayer';
import Skeleton from '../Skeleton';

type HoverableMenusItemProps = {
  media_url: string | undefined;
  media: MDWithAsset | undefined;
};

export function HoverableMenus({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const arrChildren = React.Children.toArray(children);

  const titles = arrChildren.map((child, index) => {
    const node = child as React.ReactElement<HoverableMenusItemProps>;
    return {
      media: node.props.media,
      media_url: node.props.media_url,
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
    <div className='flex items-center gap-3'>
      <div className='img-zoom__carousel flex flex-col gap-1'>
        {titles.map(({ index, media, media_url }) => {
          return (
            <div
              onMouseOver={() => setActive(index)}
              key={index}
              className='img-direction relative h-[4rem] max-h-[4rem] w-[3rem] max-w-[3rem] rounded-sm'
            >
              <HasMediaPlayer media={media} media_url={media_url} />
            </div>
          );
        })}
      </div>

      <div className='img-zoom__view w-full h-full'>{newChildren}</div>
    </div>
  );
}

export function HoverableMenusItem({
  children,
  media,
  media_url,
  ...props
}: PropsWithChildren<HoverableMenusItemProps>) {
  const { active } = props as any;
  return (
    <div
      className={`relative h-[22rem] w-full ${
        active ? '' : 'hidden'
      } lg:w-1/2 rounded-sm z-[1]`}
    >
      <Skeleton className='absolute inset-0 bg-primary-100 -z-[1]' />
      <HasMediaPlayer media={media} media_url={media_url} />
    </div>
  );
}
