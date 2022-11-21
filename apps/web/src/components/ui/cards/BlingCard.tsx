import Image from 'next/legacy/image';

import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { MDWithAsset } from '@/types/directus';

type ICategoryCard = {
  link: string;
  title: string;
  description: string;
  image?: MDWithAsset;
};

export const BlingCard = ({
  image,
  title,
  description,
  link,
}: ICategoryCard) => {
  return (
    <div
      className={`relative max-w-3xl w-full max-h-[35rem] h-[25rem] bg-white rounded-lg border border-gray-200 shadow-md`}
    >
      <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/90'></div>
      <UnstyledLink
        href={link}
        className='relative w-full h-full flex flex-col items-center rounded-lg overflow-hidden '
      >
        <Image
          className='image object-cover rounded-lg blur-[55px]'
          src={image?.src || '/svg/content.svg'}
          layout='fill'
          objectFit='cover'
          alt='Image'
        />
        <div className='relative w-full h-1/2 flex-[1.5]'>
          <Image
            className='image object-cover rounded-tl-lg rounded-tr-lg'
            src={image?.src || '/svg/content.svg'}
            layout='fill'
            objectFit='cover'
            alt='Image'
          />
        </div>
        <div className='relative p-3 flex-1 max-h-[50%] overflow-hidden m-1'>
          <h4 className='font-bold tracking-tight text-white h-14 overflow-hidden'>
            {title}
          </h4>
          <p className='font-normal text-sm text-gray-200 text-ellipsis overflow-hidden  max-h-20'>
            {description}
          </p>
        </div>
      </UnstyledLink>
    </div>
  );
};
