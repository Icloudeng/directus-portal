import Image from 'next/legacy/image';
import { ReactNode } from 'react';

import cn from '@/lib/cn';

type IRectCard = {
  cardText?: string;
  cardLogo?: string | ReactNode;
  className?: string;
};

export const RectCard = ({ cardText, cardLogo, className }: IRectCard) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-[#f5f7fa] gap-2 shadow-md max-w-[12rem] min-w-[12rem] p-6 rounded-lg mr-8',
        className
      )}
    >
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
