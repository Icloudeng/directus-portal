import { MDWithAsset, RepeaterBtn } from '@apps/contracts';
import Image from 'next/legacy/image';

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
  buttons?: RepeaterBtn[];
};

export function Card({
  image,
  clickable_card,
  buttons,
  border_card,
  background_color,
  title,
  description,
  flexible_image,
}: Props) {
  const btn = buttons ? buttons[0] : undefined;
  const hasClick = btn && clickable_card;
  const btns = buttons || [];

  const content = (
    <div className=''>
      {!flexible_image && image && (
        <div className='relative flex-1 min-h-[202px] w-full mb-3'>
          <Image
            className={`image object-cover ${
              border_card ? 'rounded-tl-xl rounded-tr-xl' : ''
            } h-full w-full `}
            src={image.src!}
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
            className={`h-full w-full ${
              border_card ? 'rounded-tl-xl rounded-tr-xl' : ''
            }`}
            src={image.src || ''}
            height={image.height}
            width={image.width}
            layout='responsive'
            alt={title}
          />
        </div>
      )}

      <div
        className={`w-full flex-[1.1] overflow-hidden ${
          border_card ? 'px-5' : 'px-1'
        } my-2`}
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
          className={`my-3 flex flex-wrap justify-between ${
            border_card ? 'px-5' : 'px-1'
          } gap-3`}
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
      className={`flex basis:auto flex-col relative w-full min-h-[24rem] md:basis-[calc((100%_-_32px)_/_3)]  ${
        border_card ? 'border border-gray-200 shadow-md rounded-xl' : ''
      }`}
      style={{
        backgroundColor: background_color,
      }}
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
