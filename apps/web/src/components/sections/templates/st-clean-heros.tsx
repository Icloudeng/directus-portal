import { useMut } from '@/cms/mut';
import type { STemplates_Props, ST_CleanHero } from '@/cms/page-sections';
import Router from 'next/router';
import { useEffect } from 'react';

export function ST_CleanHerosFC({
  items,
  sectionClass,
  sharedObject,
}: STemplates_Props<ST_CleanHero>) {
  const first = items[0];

  if (!sharedObject[first.collection]) {
    sharedObject[first.collection] = first.item.id;
  }

  useEffect(() => {
    const routerChangeStart = () => {
      delete sharedObject[first.collection];
    };
    Router.events.on('routeChangeStart', routerChangeStart);
    return () => {
      Router.events.off('routeChangeStart', routerChangeStart);
    };
  }, []);

  return (
    <>
      {sharedObject[first.collection] === first.item.id && (
        <style key={first.collection} jsx global>
          {`
            .nav__parent:not(.nav__fixed) {
              --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
              --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
              --tw-text-opacity: 1;
              background-color: #fff;
              box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
              color: rgb(0 0 0 / var(--tw-text-opacity));
            }
            .${sectionClass} {
              margin-top: -4rem;
              padding-bottom: 6rem;
              order: -1;
            }
            @media screen and (max-width: 620px) {
              .${sectionClass} {
                padding-bottom: 4rem;
              }
            }

            @media screen and (max-width: 719px) {
              .${sectionClass} {
                margin-top: -9rem;
              }
            }

            .${sectionClass}:before {
              content: '';
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: -9;
              background-color: #f5f7fa;
            }
          `}
        </style>
      )}

      {items.map((data) => {
        return <Header {...data} key={data.item.id} />;
      })}
    </>
  );
}

function Header({ item }: ST_CleanHero) {
  const { translations } = useMut(item);
  return (
    <div
      className='xl:max-w-[560px] lg:max-w-[480px] max-w-[460px] flex items-center justify-center flex-col ml-auto mr-auto'
      key={item.id}
    >
      <h1 className='text-center text-[30px] sm:text-[45px] font-bold'>
        {translations?.title}
      </h1>
      <div className='mt-[30px]'>
        <p className='text-center text-[18px] ss:text-[20px] font-light leading-[1.64]'>
          {translations?.description}
        </p>
      </div>
    </div>
  );
}
