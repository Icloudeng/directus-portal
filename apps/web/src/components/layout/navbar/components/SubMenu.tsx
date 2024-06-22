import { NavbarLinkSubmenu, NavbarLinkSubmenuItem } from '@apps/contracts';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { HasSvgText } from '@/components/ui/HasSvgText';
import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { useMut } from '@/cms/mut';

export const Submenu = React.memo(({ data }: { data: NavbarLinkSubmenu }) => {
  const { featured, translations, items } = useMut(data);

  const groupName =
    translations?.name?.toUpperCase() || (featured ? 'FEATURED' : '');

  return (
    <div
      className={clsxm(
        `flex w-[15rem] p-4`,
        featured ? 'flex-col' : 'items-start justify-between bg-white'
      )}
    >
      <div
        className={clsxm(
          `flex flex-col w-full`,
          featured ? 'items-start h-full' : 'items-center'
        )}
      >
        {groupName && (
          <span
            className={clsxm(
              `text-sm text-gray-300 mt-1 mb-4 font-semibold`,
              featured && 'font-bold underline underline-offset-8'
            )}
          >
            {groupName}
          </span>
        )}

        <div
          className={
            featured
              ? 'flex flex-col items-start justify-center flex-1 h-full gap-1 w-full'
              : 'relative grid gap-1 w-full'
          }
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
      className={clsxm(
        'p-3 pl-2 flex items-start rounded-lg w-full',
        `animated-underline`,
        featured ? 'hover:bg-primary-100' : 'hover:bg-gray-50 navbar__link-icon'
      )}
    >
      {!featured && <HasSvgText svgText={icon_svg} />}

      <div className={icon_svg && !featured ? 'ml-4' : undefined}>
        <p className='text-sm font-bold text-gray-900'>{translations?.name}</p>
        {translations?.description && (
          <p className='mt-1 text-xs text-gray-400 font-normal'>
            {translations?.description}
          </p>
        )}
      </div>
    </UnstyledLink>
  );
};
