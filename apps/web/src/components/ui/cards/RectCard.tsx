import Image from 'next/legacy/image';
import { ReactNode } from 'react';

type IRectCard = {
  cardText?: string;
  cardLogo?: string | ReactNode;
};

export const RectCard = ({ cardText, cardLogo }: IRectCard) => {
  return (
    <div className='flex items-center justify-center bg-[#f5f7fa] gap-2 shadow-md max-w-[12rem] min-w-[12rem] p-6 rounded-lg mr-8'>
      <div>
        {cardLogo && (
          <div className='relative w-7 h-7 rounded-sm'>
            {typeof cardLogo === 'string' ? (
              <Image
                className='image object-cover'
                src={cardLogo}
                layout='fill'
                objectFit='cover'
                alt='Image'
                loading='lazy'
              />
            ) : (
              cardLogo
            )}
          </div>
        )}
      </div>
      <h3
        className='overflow-hidden text-xl whitespace-nowrap'
        title={cardText}
      >
        {cardText}
      </h3>
    </div>
  );
};
