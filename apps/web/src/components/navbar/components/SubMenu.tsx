import React from 'react';
import isSvg from 'is-svg';

import UnstyledLink from '@/components/links/UnstyledLink';
import { NavbarLinkSubmenu, NavbarLinkSubmenuItem } from '@/cms/items/types';
import { useMut } from '@/cms/mut';

export const Submenu = (props: NavbarLinkSubmenu) => {
  const { featured, translations, items } = useMut({ ...props });

  return (
    <div
      className={`flex w-[17rem] ${
        featured ? 'flex-col p-7' : 'items-start justify-between bg-white'
      }`}
    >
      <div
        className={`flex flex-col ${
          featured ? 'items-start gap-10 h-full' : 'items-center'
        }`}
      >
        <span
          className={`text-sm text-gray-300 ${
            featured
              ? 'mt-1 font-bold underline underline-offset-8'
              : 'mb-1 mt-7'
          }`}
        >
          {translations?.name?.toUpperCase() || (featured ? 'FEATURED' : '')}
        </span>
        <div
          className={`${
            featured
              ? 'flex flex-col items-center justify-center flex-1 h-full gap-10'
              : 'relative grid gap-6 px-5 py-6 sm:gap-6 sm:p-8'
          }`}
        >
          {items.map((item) => {
            return <SubmenuItem key={item.id} {...item} featured={featured} />;
          })}
        </div>
      </div>
    </div>
  );
};

const SubmenuItem = (props: NavbarLinkSubmenuItem & { featured: boolean }) => {
  const { featured, url, icon_svg, translations, external } = useMut({
    ...props,
  });

  return (
    <UnstyledLink
      href={url}
      target={external ? '_blank' : undefined}
      className={`-m-3 p-3 flex items-start rounded-lg ${
        featured ? 'hover:bg-primary-100' : 'hover:bg-gray-50 navbar__link-icon'
      } animated-underline`}
    >
      {!featured && icon_svg && (
        <>
          {isSvg(icon_svg) && (
            <span dangerouslySetInnerHTML={{ __html: icon_svg }} />
          )}
        </>
      )}

      <div className='ml-4'>
        <p className='text-sm font-bold text-gray-900'>{translations?.name}</p>
        <p className='mt-1 text-xs text-gray-400 font-normal'>
          {translations?.description}
        </p>
      </div>
    </UnstyledLink>
  );
};
