import { useMut } from '@/cms/mut';
import type { STemplates_Props, ST_CleanHero } from '@/cms/page-sections';
import ButtonLink from '@/components/ui/links/ButtonLink';
import isSvg from 'is-svg';
import Router from 'next/router';
import { useEffect } from 'react';
import { HasSvgText } from '@/components/ui/HasSvgText';
import Image from 'next/legacy/image';

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
  const { translations, image, image_svg, disposition } = useMut(item);
  const buttons = translations?.buttons || [];

  const hasImage = (image_svg && isSvg(image_svg)) || !!image;

  return (
    <div
      className={`flex max-h-[1000px] ${hasImage ? 'lg:justify-between' : ''} ${
        disposition === 'text_right' ? 'flex-row-reverse' : ''
      }`}
    >
      <div
        className={`${
          hasImage
            ? 'lg:items-start lg:mx-0 lg:w-1/2'
            : 'xl:max-w-[560px] lg:max-w-[480px] '
        } justify-center max-w-[460px] flex items-center flex-col mx-auto`}
      >
        <h1
          className={`${
            hasImage ? 'lg:text-start' : ''
          } text-center text-[30px] sm:text-[45px] font-bold`}
        >
          {translations?.title}
        </h1>
        <div className='mt-[30px]'>
          <p
            className={`${
              hasImage ? 'lg:text-start' : ''
            } text-center text-[18px] ss:text-[20px] font-light leading-[1.64]`}
          >
            {translations?.description}
          </p>
        </div>

        {buttons.length > 0 && (
          <div className='mt-9 flex flex-wrap justify-center gap-3'>
            {buttons.map((btn, i) => {
              return (
                <div key={i}>
                  <ButtonLink
                    href={btn.url}
                    className='px-7 py-3'
                    variant={btn.variant}
                    target={btn.external ? '_blank' : undefined}
                  >
                    {btn.name}
                  </ButtonLink>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {hasImage && (
        <HasSvgText
          svgText={image_svg}
          className='lg:w-1/2 hidden lg:block st_flexible_icon relative'
          fallback={
            <>
              {image &&
                (image.height ? (
                  <Image
                    className='w-full h-auto'
                    src={image.src!}
                    height={image.height}
                    width={image.width}
                    layout='responsive'
                  />
                ) : (
                  <img className='w-full h-auto' src={image.src} />
                ))}
            </>
          }
        />
      )}
    </div>
  );
}
