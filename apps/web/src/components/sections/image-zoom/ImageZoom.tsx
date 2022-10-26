import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import { useHasMounted } from '@/hooks/useHasMounted';

import Skeleton from '@/components/ui/Skeleton';
import {
  HoverableMenus,
  HoverableMenusItem,
} from '@/components/ui/hoverable-menu/hoverable-menu';

type IImagesLink = {
  type: string;
  itemLink: string;
};

const imagesLink = [
  {
    type: 'image',
    itemLink: 'https://flowbite.com/docs/images/blog/image-1.jpg',
  },
  {
    type: 'image',
    itemLink: 'https://flowbite.com/docs/images/blog/image-2.jpg',
  },
  {
    type: 'video',
    itemLink: 'https://www.youtube.com/watch?v=wWgIAphfn2U',
  },
  {
    type: 'image',
    itemLink: 'https://flowbite.com/docs/images/blog/image-3.jpg',
  },
  {
    type: 'video',
    itemLink: 'https://www.youtube.com/watch?v=HtTUsOKjWyQ',
  },
];

export const _ImageZoom = () => {
  const { mounted } = useHasMounted();

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const imgData = useRef(() => document.querySelectorAll('.img-direction'));
  const [bigImgUrl, setBigImgUrl] = useState<IImagesLink>(
    imagesLink[activeIndex]
  );

  useEffect(() => {
    // getImg();
    const element = Array.from(imgData.current()).at(activeIndex);
    element?.classList.add('image-zoom-active');
    setBigImgUrl(imagesLink[activeIndex]);
  }, [activeIndex]);

  const handleChange: any = (itemLink: IImagesLink, index: number) => {
    const elements = Array.from(imgData.current());
    elements.forEach((val: any) => {
      val.classList.remove('image-zoom-active');
    });

    elements.at(index)?.classList.add('image-zoom-active');

    setActiveIndex(index);
    setBigImgUrl(itemLink);
  };

  return (
    <div className='flex items-center gap-3'>
      <div className='img-zoom__carousel flex flex-col gap-1'>
        {imagesLink.map(({ itemLink, type }, index) => {
          return (
            <div
              onMouseOver={() => handleChange({ type, itemLink }, index)}
              key={index}
              className='img-direction relative h-[4rem] w-[3rem] rounded-sm'
            >
              {type === 'image' ? (
                <Image
                  className='image object-cover'
                  src={itemLink}
                  layout='fill'
                  objectFit='cover'
                  alt='hero banner image'
                  loading='lazy'
                />
              ) : (
                mounted && (
                  <ReactPlayer
                    url={itemLink}
                    light
                    width='48px'
                    height='64px'
                    style={{ pointerEvents: 'none' }}
                  />
                )
              )}
            </div>
          );
        })}
      </div>
      <div className='img-zoom__view w-full h-full'>
        <div className='relative h-[22rem] w-full  lg:w-1/2 rounded-sm z-[1]'>
          <Skeleton className='absolute inset-0 bg-primary-100 -z-[1]' />
          {bigImgUrl.type === 'image' ? (
            <Image
              className='image object-cover'
              src={bigImgUrl.itemLink}
              layout='fill'
              objectFit='cover'
              alt='hero banner image'
              loading='lazy'
            />
          ) : (
            mounted && (
              <ReactPlayer
                url={bigImgUrl.itemLink}
                muted
                light
                width='100%'
                height='100%'
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export const ImageZoom = () => {
  return (
    <>
      <HoverableMenus>
        <HoverableMenusItem
          media_url={undefined}
          media={{
            id: '12222333',
            src: 'http://localhost:8055/assets/66f8ee9e-a0e6-430f-93c8-031b03807430?access_token=mdzjETutYM06z9ch56CmFkjIOWZCwraG',
            type: 'video/mp4',
          }}
        ></HoverableMenusItem>
        {/*<HoverableMenusItem
          media_url={'https://www.youtube.com/watch?v=HtTUsOKjWyQ'}
          media={undefined}
        ></HoverableMenusItem>
        <HoverableMenusItem
          media_url={'https://www.youtube.com/watch?v=HtTUsOKjWyQ'}
          media={{
            id: '4343',
            src: 'https://flowbite.com/docs/images/blog/image-3.jpg',
            type: 'image/jpg',
          }}
        ></HoverableMenusItem> */}
      </HoverableMenus>
    </>
  );
};
