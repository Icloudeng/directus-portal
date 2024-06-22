import { MDWithAsset, RepeaterBtn } from '@apps/contracts';
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
  title: string;
  description?: string;
  hover_animation?: boolean;
  buttons?: RepeaterBtn[];
};

export function Card({
  image,
  clickable_card,
  buttons,
  border_card,
  background_color: backgroundColor,
  title,
  description,
  flexible_image,
  hover_animation,
}: Props) {
  const btn = buttons ? buttons[0] : undefined;
  const hasClick = btn && clickable_card;
  const btns = buttons || [];

  const content = (
    <div className='flex flex-col justify-between h-full'>
      {!flexible_image && image?.src && (
        <div className='relative flex-1 min-h-[202px] w-full mb-3'>
          <Image
            className={clsxm(
              `image object-cover h-full w-full`,
              border_card ? 'rounded-tl-xl rounded-tr-xl' : ''
            )}
            src={image.src}
            layout='fill'
            objectFit='cover'
            loading='lazy'
            alt={title}
          />
        </div>
      )}
      {flexible_image && image && (
        <div className='flex-1 w-full mb-3 relative'>
          <Image
            className={clsxm(
              `h-full w-full`,
              border_card ? 'rounded-tl-xl rounded-tr-xl' : ''
            )}
            src={image.src || ''}
            height={image.height}
            width={image.width}
            layout='responsive'
            alt={title}
          />
        </div>
      )}

      <div
        className={clsxm(
          `w-full flex-[1.1] overflow-hidden my-2`,
          border_card ? 'px-5' : 'px-1'
        )}
      >
        <h4 className='leading-6 tracking-tight mb-3'>{title}</h4>

        {description && (
          <p className='font-normal text-sm text-gray-500 tracking-tight'>
            {description}
          </p>
        )}
      </div>

      {btns.length > 0 && (
        <div
          className={clsxm(
            'my-3 flex flex-wrap justify-between  gap-3',
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
  );

  return (
    <div
      className={clsxm(
        'relative w-full min-h-[24rem] md:basis-[calc((100%_-_32px)_/_3)]',
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
