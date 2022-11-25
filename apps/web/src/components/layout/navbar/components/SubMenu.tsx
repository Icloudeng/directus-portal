import React from 'react';

import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { NavbarLinkSubmenu, NavbarLinkSubmenuItem } from '@apps/contracts';
import { useMut } from '@/cms/mut';
import { HasSvgText } from '@/components/ui/HasSvgText';

export const Submenu = React.memo(({ data }: { data: NavbarLinkSubmenu }) => {
  const { featured, translations, items } = useMut(data);

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
              ? 'flex flex-col items-start justify-center flex-1 h-full gap-10'
              : 'relative grid gap-6 px-5 py-6 sm:gap-6 sm:p-8'
          }`}
        >
          {items.map((item) => {
            return (
              <SubmenuItem key={item.id} data={item} featured={featured} />
            );
          })}
        </div>
      </div>
    </div>
  );
});

const SubmenuItem = ({
  data,
  featured,
}: { data: NavbarLinkSubmenuItem } & { featured: boolean }) => {
  const { url, icon_svg, translations, external } = useMut(data);

  return (
    <UnstyledLink
      href={url}
      target={external ? '_blank' : undefined}
      className={`-m-3 p-3 flex items-start rounded-lg w-full ${
        featured ? 'hover:bg-primary-100' : 'hover:bg-gray-50 navbar__link-icon'
      } animated-underline`}
    >
      {!featured && <HasSvgText svgText={icon_svg} />}

      <div className='ml-4'>
        <p className='text-sm font-bold text-gray-900'>{translations?.name}</p>
        <p className='mt-1 text-xs text-gray-400 font-normal'>
          {translations?.description}
        </p>
      </div>
    </UnstyledLink>
  );
};
