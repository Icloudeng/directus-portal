import { InputWithIcon } from './InputWithIcon';

export function TutorialsSearchInput() {
  return (
    <div className='w-full p-12 bg-primary-400 mb-7 rounded-2xl text-white'>
      <div className='flex flex-col gap-5 mb-4'>
        <h3 className='h1'>Tutorials</h3>
        <p className='font-bold'>
          Follow along with one of our 6,000+ development and sysadmin
          tutorials.
        </p>
      </div>
      <div className='flex flex-col gap-3 max-w-xl'>
        <InputWithIcon
          label='Search'
          icon={
            <svg
              aria-hidden='true'
              className='absolute inset-0 text-gray-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          }
          btnText='search'
        />
      </div>
    </div>
  );
}
