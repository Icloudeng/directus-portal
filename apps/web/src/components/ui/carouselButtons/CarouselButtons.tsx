import { ICarouselButton, IDotButton } from '@/types';

export const DotButton = ({ position, selected, onClick }: IDotButton) => {
  return (
    <button
      type='button'
      className={`w-3 h-3 rounded-full ${
        selected ? 'bg-primary-300' : 'bg-gray-300/50 hover:bg-gray-300'
      }`}
      aria-current={selected}
      aria-label={`Slide ${position}`}
      data-carousel-slide-to={position}
      onClick={onClick}
    ></button>
  );
};

export const PrevButton = ({ enabled, onClick }: ICarouselButton) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={!enabled}
      className='absolute hidden top-0 ss:-left-16 sm:-left-20 z-30 ss:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
      data-carousel-prev=''
    >
      <RawPrevButton enabled={enabled} />
    </button>
  );
};

export function RawPrevButton({ enabled }: Pick<ICarouselButton, 'enabled'>) {
  return (
    <span
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-2 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none ${
        !enabled && 'ring-gray-200 '
      }`}
    >
      <svg
        aria-hidden='true'
        className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6 ${
          !enabled && 'text-gray-200 '
        }`}
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

export const NextButton = ({ enabled, onClick }: ICarouselButton) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={!enabled}
      className='absolute top-0 hidden ss:-right-16 sm:-right-20 z-30 ss:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
      data-carousel-next=''
    >
      <RawNextButton enabled={enabled} />
    </button>
  );
};

export function RawNextButton({ enabled }: Pick<ICarouselButton, 'enabled'>) {
  return (
    <span
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-2 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none ${
        !enabled && 'ring-gray-200 '
      }`}
    >
      <svg
        aria-hidden='true'
        className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6 ${
          !enabled && 'text-gray-200 '
        }`}
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
