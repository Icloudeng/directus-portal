import { MDWithAsset } from '@packages/contracts';
import Image from 'next/legacy/image';
import React from 'react';
import { PropsWithChildren, useState } from 'react';

import Skeleton from '../Skeleton';

type HoverableMenusItemProps = {
  image: MDWithAsset;
};

export function HoverableMenus({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);
  const arrChildren = React.Children.toArray(children);

  const titles = arrChildren.map((child, index) => {
    const node = child as React.ReactElement<HoverableMenusItemProps>;
    return {
      image: node.props.image,
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
        {titles.map(({ index, image }) => {
          return (
            <div
              onMouseOver={() => setActive(index)}
              key={index}
              className={`${
                active === index ? 'image-zoom-active' : ''
              } img-direction relative h-[4rem] max-h-[4rem] w-[3rem] max-w-[3rem] rounded-sm`}
            >
              {image?.src && (
                <Image
                  className='image object-cover'
                  src={image.src}
                  layout='fill'
                  objectFit='cover'
                  alt='Image'
                  loading='lazy'
                />
              )}
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
  image,
  ...props
}: PropsWithChildren<HoverableMenusItemProps>) {
  const { active } = props as any;
  return (
    <div className={`flex flex-col lg:flex-row ${active ? '' : 'hidden'}`}>
      <div className='relative h-[15rem] sm:h-[20rem] lg:h-[22rem] w-full  lg:w-1/2 rounded-sm z-[1]'>
        <Skeleton className='absolute inset-0 bg-primary-100 -z-[1]' />
        <Image
          className='image object-cover'
          src={image?.src || ''}
          layout='fill'
          objectFit='cover'
          alt='Image'
          loading='lazy'
        />
      </div>
      <div className='lg:w-1/2 pl-0 lg:pl-4 mt-5 lg:mt-0'>{children}</div>
    </div>
  );
}
