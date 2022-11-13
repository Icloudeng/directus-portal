import Image from 'next/image';

import ButtonLink from '@/components/ui/links/ButtonLink';
import { HasSvgText } from '../HasSvgText';
import { MDWithAsset } from '@/types/directus';

type IMarketPlaceCard = {
  title: string;
  icon?: MDWithAsset;
  icon_svg?: string;
  description?: string;
  link?: string;
  linkText?: string;
  externalLink?: boolean;
};

export const MarketPlaceCard = ({
  title,
  icon,
  icon_svg,
  link,
  linkText = 'See details',
  description,
  externalLink,
}: IMarketPlaceCard) => {
  return (
    <div className='max-w-xs w-full max-h-[25rem] h-[22rem] bg-white rounded-lg border border-gray-200 shadow-md'>
      <div className='relative w-full h-full flex flex-col items-center rounded-lg overflow-hidden p-5'>
        <div className='relative flex-[1] w-32 mb-3'>
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
          <h3 className='text-primary-400 mb-2'>{title}</h3>
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
