import UnstyledLink from '@/components/ui/links/UnstyledLink';

/* eslint-disable react/no-unescaped-entities */
export const BlogTextContentVertical = () => {
  return (
    <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
      <div className='flex flex-col items-center justify-center gap-7 mb-7'>
        <h3 className='text-center'>Vertical Blog Text Content</h3>
        <span className='max-w-xl text-center'>
          This is the section boilerplate template
        </span>
      </div>

      <div className='w-full py-10'>
        <section className='text-gray-600 body-font overflow-hidden'>
          <div className='container px-5 mx-auto'>
            <div className='-my-8 divide-y-2 divide-gray-100'>
              <div className='py-8 flex flex-wrap md:flex-nowrap'>
                <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                  <span className='font-semibold title-font text-gray-700'>
                    CATEGORY
                  </span>
                  <span className='mt-1 text-gray-500 text-sm'>
                    12 Jun 2019
                  </span>
                </div>
                <div className='md:flex-grow'>
                  <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p className='leading-relaxed'>
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <UnstyledLink
                    href='#'
                    className='text-primary-400 inline-flex items-center mt-4'
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
                </div>
              </div>
              <div className='py-8 flex flex-wrap md:flex-nowrap'>
                <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                  <span className='font-semibold title-font text-gray-700'>
                    CATEGORY
                  </span>
                  <span className='mt-1 text-gray-500 text-sm'>
                    12 Jun 2019
                  </span>
                </div>
                <div className='md:flex-grow'>
                  <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                    Meditation bushwick direct trade taxidermy shaman
                  </h2>
                  <p className='leading-relaxed'>
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <UnstyledLink
                    href='#'
                    className='text-primary-400 inline-flex items-center mt-4'
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
                </div>
              </div>
              <div className='py-8 flex flex-wrap md:flex-nowrap'>
                <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                  <span className='font-semibold title-font text-gray-700'>
                    CATEGORY
                  </span>
                  <span className='text-sm text-gray-500'>12 Jun 2019</span>
                </div>
                <div className='md:flex-grow'>
                  <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                    Woke master cleanse drinking vinegar salvia
                  </h2>
                  <p className='leading-relaxed'>
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <UnstyledLink
                    href='#'
                    className='text-primary-400 inline-flex items-center mt-4'
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
