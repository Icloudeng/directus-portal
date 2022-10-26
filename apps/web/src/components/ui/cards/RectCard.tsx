import Image from 'next/image';
import { ReactNode } from 'react';

type IRectCard = {
  cardText?: string;
  cardLogo?: string | ReactNode;
};

export const RectCard = ({ cardText, cardLogo }: IRectCard) => {
  return (
    <div className='flex items-center justify-center gap-2 bg-[#f5f7fa] shadow-md w-48 p-6 rounded-lg mr-8'>
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
      <h3>{cardText ? cardText : ''}</h3>
    </div>
  );
};
