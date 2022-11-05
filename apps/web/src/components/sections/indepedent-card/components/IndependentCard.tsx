import Image, { StaticImageData } from 'next/image';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

type IIndependentCard = {
  itemLogo: string | StaticImageData;
  itemName: string;
  itemLink: string;
  description: string;
};

export const IndependentCard = ({
  itemLogo,
  itemName,
  description,
}: IIndependentCard) => {
  return (
    <div className='max-w-xs w-full max-h-[25rem] h-[24rem] bg-white rounded-3xl border border-gray-200 shadow-md'>
      <UnstyledLink
        href='itemLink'
        className='relative w-full h-full flex flex-col items-center rounded-lg overflow-hidden'
      >
        <div className='relative flex-[1] w-full h-7 mb-3'>
          <Image
            className='image object-cover rounded-tl-3xl rounded-tr-3xl'
            src={itemLogo}
            layout='fill'
            objectFit='cover'
            alt='accordion image'
          />
        </div>
        <div className='w-full flex-[1.1] overflow-hidden px-7 mb-2'>
          <h4 className=' leading-6 tracking-tight mb-2'>{itemName}</h4>

          <p className='font-normal text-sm text-gray-500 tracking-tight'>
            {description}
          </p>
        </div>
      </UnstyledLink>
    </div>
  );
};
