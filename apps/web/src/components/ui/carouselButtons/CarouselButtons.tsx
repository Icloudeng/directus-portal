import cn from '@/lib/cn';

import { ICarouselButton, IDotButton } from '@/types';

export const DotButton = ({ position, selected, onClick }: IDotButton) => {
  return (
    <button
      type='button'
      className={cn(
        `w-3 h-3 rounded-full`,
        selected ? 'bg-primary-300' : 'bg-gray-300/50 hover:bg-gray-300'
      )}
      aria-current={selected}
      aria-label={`Slide ${position}`}
      data-carousel-slide-to={position}
      onClick={onClick}
    />
  );
};

export const PrevButton = ({
  enabled,
  onClick,
  className,
  white,
}: ICarouselButton) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={!enabled}
      className={cn(
        'absolute hidden top-0 ss:-left-16 sm:-left-20 z-30 ss:flex items-center justify-center',
        'h-full px-4 cursor-pointer group focus:outline-none',
        className
      )}
      data-carousel-prev=''
    >
      <RawPrevButton enabled={enabled} white={white} />
    </button>
  );
};

export const NextButton = ({
  enabled,
  onClick,
  className,
  white,
}: ICarouselButton) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={!enabled}
      className={cn(
        'absolute top-0 hidden ss:-right-16 sm:-right-20 z-30 ss:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none',
        className
      )}
      data-carousel-next=''
    >
      <RawNextButton enabled={enabled} white={white} />
    </button>
  );
};

export function RawPrevButton({
  enabled,
  white,
}: Pick<ICarouselButton, 'enabled' | 'white'>) {
  return (
    <span
      className={cn(
        `inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 `,
        'bg-white/30 group-hover:bg-white/50 ring-2 ring-primary-200 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none',
        !enabled && 'ring-gray-200',
        white && ['bg-white group-hover:bg-white/95 ring-0']
      )}
    >
      <svg
        aria-hidden='true'
        className={cn(
          `w-5 h-5 text-primary-400 sm:w-6 sm:h-6`,
          !enabled && 'text-gray-200',
          white && ['text-primary-400 hover:text-primary-600']
        )}
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M15 19l-7-7 7-7'
        ></path>
      </svg>
      <span className='sr-only'>Previous</span>
    </span>
  );
}

export function RawNextButton({
  enabled,
  white,
}: Pick<ICarouselButton, 'enabled' | 'white'>) {
  return (
    <span
      className={cn(
        `inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30`,
        'group-hover:bg-white/50 ring-2 ring-primary-200 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none',
        !enabled && 'ring-gray-200',
        white && ['bg-white group-hover:bg-white/95 ring-0']
      )}
    >
      <svg
        aria-hidden='true'
        className={cn(
          `w-5 h-5 text-primary-400 sm:w-6 sm:h-6`,
          !enabled && 'text-gray-200',
          white && ['text-primary-400 hover:text-primary-600']
        )}
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 5l7 7-7 7'
        ></path>
      </svg>
      <span className='sr-only'>Next</span>
    </span>
  );
}
