import { MDWithAsset } from '@/types/directus';
import Image from "next/legacy/image";
import { BiUser } from 'react-icons/bi';

export type Props = {
  review: string;
  clientName: string;
  clientPost: string;
  clientPhoto?: MDWithAsset;
};

export const ReviewCard = ({
  review,
  clientName,
  clientPost,
  clientPhoto,
}: Props) => {
  return (
    <div className='min-h-[32rem] shrink-0 grow-0 basis-full bg-white py-12 px-10 ss:px-12 sm:py-16 sm:px-24 shadow-sm rounded-sm'>
      <div className='w-full h-full flex flex-col items-center gap-16'>
        <div className='text-center max-w-3xl'>
          <q className='xs:text-lg font-light'>{review}</q>
        </div>
        <div className=' flex flex-col items-center justify-center'>
          {/* avatar */}
          <div
            className={`${
              clientPhoto ? 'relative h-[71px] w-[71px]' : 'p-4'
            } bg-primary-50 rounded-full  mb-4`}
          >
            {clientPhoto && (
              <Image
                src={clientPhoto.src!}
                className='rounded-full'
                layout='fill'
                loading='lazy'
                objectFit='cover'
              />
            )}
            {!clientPhoto && (
              <BiUser className='text-primary-400' size='2.5rem' />
            )}
          </div>
          <div className='flex flex-col items-center gap-1'>
            <span>{clientName}</span>
            <span className='font-light text-xs'>{clientPost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
