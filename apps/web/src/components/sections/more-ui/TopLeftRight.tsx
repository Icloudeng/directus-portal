import Image from 'next/legacy/image';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

/* eslint-disable react/no-unescaped-entities */
export const TopLeftRightContent = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='flex flex-col items-center justify-center gap-7 mb-7'>
        <h2 className='text-center h1'>Horizontal Blog Text Content</h2>
        <span className='max-w-xl text-center'>
          This is the section boilerplate template
        </span>
      </div>

      <div className='w-full'>
        <div className='text-gray-600 body-font'>
          <div className='container px-5 mx-auto flex flex-col'>
            <div className='lg:w-4/6 mx-auto'>
              <div className='relative rounded-lg h-64 overflow-hidden'>
                <Image
                  alt='content'
                  layout='fill'
                  className='absolute object-cover object-center h-full w-full'
                  src='https://dummyimage.com/1200x500'
                />
              </div>
              <div className='flex flex-col sm:flex-row mt-10'>
                <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
                  <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-10 h-10'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <div className='flex flex-col items-center text-center justify-center'>
                    <h3 className='font-medium title-font mt-4 text-gray-900 text-lg'>
                      Phoebe Caulfield
                    </h3>
                    <div className='w-12 h-1 bg-primary-400 rounded mt-2 mb-4'></div>
                    <p className='text-base'>
                      Raclette knausgaard hella meggs normcore williamsburg
                      enamel pin sartorial venmo tbh hot chicken gentrify
                      portland.
                    </p>
                  </div>
                </div>
                <div className='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
                  <p className='leading-relaxed text-lg mb-4'>
                    Meggings portland fingerstache lyft, post-ironic fixie man
                    bun banh mi umami everyday carry hexagon locavore direct
                    trade art party. Locavore small batch listicle gastropub
                    farm-to-table lumbersexual salvia messenger bag. Coloring
                    book flannel truffaut craft beer drinking vinegar sartorial,
                    disrupt fashion axe normcore meh butcher. Portland 90's
                    scenester vexillologist forage post-ironic asymmetrical,
                    chartreuse disrupt butcher paleo intelligentsia pabst before
                    they sold out four loko. 3 wolf moon brooklyn.
                  </p>
                  <UnstyledLink
                    href='#'
                    className='text-primary-500 inline-flex items-center'
                  >
                    Learn More
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </UnstyledLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
