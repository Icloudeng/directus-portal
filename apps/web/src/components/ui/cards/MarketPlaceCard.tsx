import Image from "next/legacy/image";

import ButtonLink from '@/components/ui/links/ButtonLink';
import { HasSvgText } from '../HasSvgText';
import { MDWithAsset } from '@apps/contracts';
import UnstyledLink from '../links/UnstyledLink';
import UnderlineLink from '../links/UnderlineLink';

type IMarketPlaceCard = {
  title: string;
  icon?: MDWithAsset;
  icon_svg?: string;
  description?: string;
  link?: string;
  linkText?: string;
  externalLink?: boolean;
  titleLink?: string;
};

export const MarketPlaceCard = ({
  title,
  icon,
  icon_svg,
  link,
  linkText = 'See details',
  description,
  externalLink,
  titleLink,
}: IMarketPlaceCard) => {
  return (
    <div className='max-w-xs w-full max-h-[25rem] h-[22rem] bg-white rounded-lg border border-gray-200 shadow-md'>
      <div className='relative w-full h-full flex flex-col items-center rounded-lg overflow-hidden p-5'>
        <div className='relative flex-[1] w-32 mb-3'>
          {titleLink && (
            <UnstyledLink href={titleLink} className='absolute inset-0 z-10'>
              {''}
            </UnstyledLink>
          )}
          <HasSvgText
            svgText={icon_svg}
            className='st_flexible_icon'
            fallback={
              icon && (
                <Image
                  className='image object-cover w-full h-full'
                  src={icon.src!}
                  layout='fill'
                  objectFit='fill'
                  alt={title}
                  loading='lazy'
                />
              )
            }
          />
        </div>
        <div className='w-full flex-[1] overflow-hidden mb-2'>
          <h3 className='text-primary-400 mb-2 '>
            {titleLink ? (
              <UnderlineLink href={titleLink} className=' inset-0 z-10'>
                {title}
              </UnderlineLink>
            ) : (
              title
            )}
          </h3>
          {description && (
            <p className='font-normal text-sm text-gray-500 tracking-tight'>
              {description}
            </p>
          )}
        </div>

        {link && (
          <ButtonLink
            target={externalLink ? '_blank' : undefined}
            className='w-full flex justify-center'
            href={link}
          >
            {linkText}
          </ButtonLink>
        )}
      </div>
    </div>
  );
};
