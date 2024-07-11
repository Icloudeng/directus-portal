import { ST_StyledImageCard, STemplates_Props } from '@packages/contracts';

import clsxm from '@/lib/clsxm';

export function ST_StyledImageCardsFC({
  items,
}: STemplates_Props<ST_StyledImageCard>) {
  return (
    <div className='space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4'>
      <div
        className='card-shadow rounded-2xl p-0 bg-cover bg-center h-96 relative overflow-hidden'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D")`,
        }}
      >
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `linear-gradient(transparent 0%, var(--color-primary-700) 100%)`,
          }}
        >
          <div className='h-full flex'>
            <div
              className='leading-none p-6 rounded-2xl mt-auto mb-2 text-4xl font-semibold drop-shadow-sm tracking-tight'
              style={{
                color: 'rgb(252, 245, 244)',
              }}
            >
              Create
              <br />
              <span className='text-primary-100'>
                color scales
                <br />
              </span>
              in seconds.
            </div>
          </div>
        </div>
      </div>
      <div className='card-shadow rounded-2xl p-2 bg-cover bg-bottom h-96 relative overflow-hidden'>
        <div className='absolute inset-0 bg-primary-100'>
          <div
            className='absolute rounded-full z-0 w-[26rem] h-[26rem] top-[2rem] right-[6rem]'
            style={{
              backgroundPosition: '25% -83%',
              backgroundSize: '90%',
              transform: 'translate(50%, -50%)',
              backgroundImage: `url("https://images.unsplash.com/photo-1603208636525-8825c33ed34b?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGxhdWdoaW5nfGVufDB8fDB8fHww")`,
            }}
          />
          <div
            className='absolute rounded-full w-[22rem] h-[22rem] top-[2rem] right-[6rem] border-[25px] border-primary-100'
            style={{
              transform: 'translate(50%, -50%)',
            }}
          />
          <div
            className='absolute rounded-full w-[14rem] h-[14rem] top-[2rem] right-[6rem] border-[25px] border-primary-100'
            style={{
              transform: 'translate(50%, -50%)',
            }}
          />
          <div className='h-full flex'>
            <div className='leading-none p-6 rounded-2xl mt-auto mb-2 text-4xl font-semibold drop-shadow-sm tracking-tight text-primary-800'>
              Create
              <br />
              <span className='text-primary-500'>
                color scales
                <br />
              </span>
              in seconds.
            </div>
          </div>
        </div>
      </div>

      <div
        className='card-shadow rounded-2xl p-2 bg-cover bg-center h-96 relative overflow-hidden'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1545209536-c79b0603d7ad?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxhdWdoaW5nfGVufDB8fDB8fHww")`,
        }}
      >
        <div className='h-full flex'>
          <div
            className={clsxm(
              'leading-none p-4 rounded-2xl mt-auto mb-2 text-4xl font-semibold tracking-tight text-white border w-full',
              'bg-opacity-80 backdrop-filter backdrop-blur-sm bg-primary-600/80 border-primary-500'
            )}
          >
            Create
            <br /> color scales
            <br /> in seconds.
          </div>
        </div>
      </div>
    </div>
  );
}

// function STStyledImageCard(props: { item: ST_StyledImageCard }) {
//   const item = useMut(props.item.item);
//   return ();
// }
