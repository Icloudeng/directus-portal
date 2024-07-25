import Image from 'next/legacy/image';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

/* eslint-disable react/no-unescaped-entities */
export const BlogTextContentHorizontal = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='flex flex-col items-center justify-center gap-7 mb-7'>
        <h2 className='text-center h1'>Horizontal Blog Text Content</h2>
        <span className='max-w-xl text-center'>
          This is the section boilerplate template
        </span>
      </div>

      <div className='w-full py-10'>
        <div className='text-gray-600 body-font overflow-hidden'>
          <div className='container px-5 mx-auto'>
            <div className='flex flex-wrap -m-12'>
              <div className='p-12 md:w-1/2 flex flex-col items-start'>
                <span className='inline-block py-1 px-2 rounded bg-primary-50 text-primary-400 text-xs font-medium tracking-widest'>
                  CATEGORY
                </span>
                <h3 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4'>
                  Roof party normcore before they sold out, cornhole vape
                </h3>
                <p className='leading-relaxed mb-8'>
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug
                  you probably haven't heard of them hexagon kickstarter craft
                  beer pork chic.
                </p>
                <div className='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full'>
                  <UnstyledLink
                    href='#'
                    className='text-primary-400 inline-flex items-center'
                  >
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </UnstyledLink>
                  <span className='text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                    <svg
                      className='w-4 h-4 mr-1'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                      <circle cx='12' cy='12' r='3'></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                    <svg
                      className='w-4 h-4 mr-1'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                    6
                  </span>
                </div>
                <UnstyledLink href='#' className='inline-flex items-center'>
                  <Image
                    alt='blog'
                    src='https://dummyimage.com/104x104'
                    width={48}
                    height={48}
                    className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                  />
                  <span className='flex-grow flex flex-col pl-4'>
                    <span className='title-font font-medium text-gray-900'>
                      Holden Caulfield
                    </span>
                    <span className='text-gray-400 text-xs tracking-widest mt-0.5'>
                      UI DEVELOPER
                    </span>
                  </span>
                </UnstyledLink>
              </div>
              <div className='p-12 md:w-1/2 flex flex-col items-start'>
                <span className='inline-block py-1 px-2 rounded bg-primary-50 text-primary-400 text-xs font-medium tracking-widest'>
                  CATEGORY
                </span>
                <h2 className='sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4'>
                  Pinterest DIY dreamcatcher gentrify single-origin coffee
                </h2>
                <p className='leading-relaxed mb-8'>
                  Live-edge letterpress cliche, salvia fanny pack humblebrag
                  narwhal portland. VHS man braid palo santo hoodie brunch trust
                  fund. Bitters hashtag waistcoat fashion axe chia unicorn.
                  Plaid fixie chambray 90's, slow-carb etsy tumeric.
                </p>
                <div className='flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full'>
                  <UnstyledLink
                    href='#'
                    className='text-primary-400 inline-flex items-center'
                  >
                    Learn More
                    <svg
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </UnstyledLink>
                  <span className='text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                    <svg
                      className='w-4 h-4 mr-1'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                      <circle cx='12' cy='12' r='3'></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                    <svg
                      className='w-4 h-4 mr-1'
                      stroke='currentColor'
                      strokeWidth='2'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                    6
                  </span>
                </div>
                <UnstyledLink href='#' className='inline-flex items-center'>
                  <Image
                    alt='blog'
                    src='https://dummyimage.com/104x104'
                    width={48}
                    height={48}
                    className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
                  />
                  <span className='flex-grow flex flex-col pl-4'>
                    <span className='title-font font-medium text-gray-900'>
                      Alper Kamu
                    </span>
                    <span className='text-gray-400 text-xs tracking-widest mt-0.5'>
                      DESIGNER
                    </span>
                  </span>
                </UnstyledLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
