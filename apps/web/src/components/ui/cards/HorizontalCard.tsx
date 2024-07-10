import { MDWithAsset, RepeaterBtn }  from '@packages/contracts';
import Image from 'next/legacy/image';

import clsxm from '@/lib/clsxm';

import ButtonLink from '../links/ButtonLink';
import UnstyledLink from '../links/UnstyledLink';

type Props = {
  image: MDWithAsset;
  flexible_image: boolean;
  border_card: boolean;
  background_color: string;
  clickable_card: boolean;
  hover_animation?: boolean;
  small_title: string;
  big_title: string;
  desc: string;
  buttons?: RepeaterBtn[];
};

export function HorizontalCard({
  image,
  clickable_card,
  buttons,
  border_card,
  background_color: backgroundColor,
  small_title,
  big_title,
  desc,
  flexible_image,
  hover_animation,
}: Props) {
  const btn = buttons ? buttons[0] : undefined;
  const hasClick = btn && clickable_card;
  const btns = buttons || [];

  const content = (
    <div className='relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700'>
      {!flexible_image && image?.src && (
        <div className='relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700'>
          <Image
            className={clsxm(
              `h-full w-full object-cover`,
              border_card ? ' ' : ''
            )}
            src={image.src}
            layout='fill'
            objectFit='cover'
            loading='lazy'
            alt={big_title}
          />
        </div>
      )}
      {flexible_image && image && (
        <div className='relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700'>
          <Image
            className={clsxm(`h-full w-full`, border_card ? ' ' : '')}
            src={image.src || ''}
            height={image.height}
            width={image.width}
            layout='responsive'
            alt={big_title}
          />
        </div>
      )}

      <div className={clsxm(`p-6`, border_card ? 'px-5' : 'px-1')}>
        <h6 className='mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased'>
          {small_title}
        </h6>
        <h4 className='mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
          {big_title}
        </h4>
        <p className='mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
          {desc}
        </p>

        {btns.length > 0 && (
          <div
            className={clsxm(
              'inline-block my-3 flex flex-wrap justify-between  gap-3',
              border_card ? 'px-5' : 'px-1'
            )}
          >
            {btns.map((btn, i) => {
              return (
                <div key={i} className='z-20'>
                  <ButtonLink
                    onClick={(e) => e.stopPropagation()}
                    href={btn.url}
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
    </div>
  );

  return (
    <div
      className={clsxm(
        '',
        border_card && 'border border-gray-200 shadow-md rounded-xl',
        hover_animation &&
          'hover:-translate-y-1 hover:shadow-xl transition-all duration-300'
      )}
      style={{ backgroundColor }}
    >
      {hasClick && (
        <UnstyledLink
          href={btn.url}
          className='z-10'
          target={btn.external ? '_blank' : undefined}
        >
          <span aria-hidden='true' className='absolute inset-0'></span>
        </UnstyledLink>
      )}
      {content}
    </div>
  );
}
