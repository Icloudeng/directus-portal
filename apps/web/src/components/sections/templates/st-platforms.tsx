import { ST_Platform, STemplates_Props } from '@apps/contracts';
import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';
import { useCallback, useState } from 'react';

import { AsideMenuCategories } from '@/components/ui/aside-menu/aside-menu-categories';
import { MarketPlaceCard } from '@/components/ui/cards/MarketPlaceCard';
import { HasSvgText } from '@/components/ui/HasSvgText';
import { InputSearch } from '@/components/ui/inputs/InputSearch';

import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';

export function ST_PlatformsFC({
  items,
  sectionId,
}: STemplates_Props<ST_Platform>) {
  const { item } = items[0];
  const [categories, setCategories] = useState(item.categories || []);
  const { locale } = useSharedData();
  const { t } = useTranslation();

  const onSearch = useCallback(
    (value: string) => {
      setCategories(
        (item.categories || []).map((cat) => {
          const $cat = { ...cat };
          $cat.platforms = ($cat.platforms || []).filter((c) => {
            const platname = c.name.trim().toLowerCase().replace(/\s+/g, '');
            return platname.includes(value.toLowerCase().replace(/\s+/g, ''));
          });
          return $cat;
        })
      );
    },
    [item.categories]
  );

  return (
    <>
      <div className='max-w-xl w-full mx-auto mb-5'>
        <InputSearch onChange={onSearch} />
      </div>
      <AsideMenuCategories
        hrefPrefix={sectionId as string}
        items={categories.map((cat) => {
          const { translations } = mut(cat, locale);
          return {
            id: cat.id,
            name: translations?.name || cat.name,
            description: translations?.description,
            itemsNumber: cat.platforms?.length || 0,
            icon: (
              <div className='w-4 h-4 relative'>
                <HasSvgText
                  svgText={cat.icon_svg}
                  fallback={
                    cat.icon ? (
                      <Image
                        src={cat.icon?.src || ''}
                        layout='fill'
                        className='w-full h-full'
                        alt={cat.name}
                      />
                    ) : (
                      <CatIcon />
                    )
                  }
                />
              </div>
            ),
            platforms: cat.platforms || [],
          };
        })}
      >
        {(cat) => {
          return (
            <>
              <div className='text-[0.9rem] uppercase text-slate-500 mb-3'>
                {cat.name}
              </div>
              {cat.description && <p className='mb-2'>{cat.description}</p>}
              <div className='grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-5 md:gap-3'>
                {cat.platforms.map((plat) => {
                  const { translations, id } = mut(plat, locale);
                  const platformLink = `/platforms/apps/${plat.slug}`;
                  return (
                    <MarketPlaceCard
                      key={id}
                      title={plat.name}
                      icon={plat.icon}
                      icon_svg={plat.icon_svg}
                      linkText={t('See details')}
                      titleLink={platformLink}
                      link={plat.link || platformLink}
                      externalLink={plat.link ? plat.external_link : false}
                      description={translations?.description}
                    />
                  );
                })}
              </div>
            </>
          );
        }}
      </AsideMenuCategories>
    </>
  );
}

function CatIcon() {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z'></path>
    </svg>
  );
}
