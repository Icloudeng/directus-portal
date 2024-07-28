import { I_MDWithUserTranslation } from '@packages/contracts';
import {
  MDNavbarLink,
  NavbarLinkSubmenu,
  NavbarLinkSubmenuItem,
} from '@packages/contracts';
import { Router } from 'next/router';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { VscChevronDown } from 'react-icons/vsc';

import cn from '@/lib/cn';

import { HasSvgText } from '@/components/ui/HasSvgText';
import ButtonLink from '@/components/ui/links/ButtonLink';
import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { useOutsideClick } from '@/app/hooks/useOutsideClick';
import { useSharedData } from '@/app/store';
import { mergeRefs } from '@/app/utils/merge-refs';
import { mut, useMut } from '@/cms/mut';

const SubmenuItem = ({
  data,
  featured,
}: { data: NavbarLinkSubmenuItem } & { featured?: boolean }) => {
  const { id, url, external, icon_svg, translations } = useMut(data);

  return (
    <UnstyledLink
      key={id}
      href={url}
      target={external ? '_blank' : undefined}
      className='-m-3 p-3 flex items-start navbar__link-icon font-medium'
    >
      {!featured && <HasSvgText svgText={icon_svg} />}
      <div className='ml-4'>
        <p className='text-sm text-gray-500 hover:text-gray-900 '>
          {translations?.name}
        </p>
      </div>
    </UnstyledLink>
  );
};

const SubMenu = ({ data }: { data: NavbarLinkSubmenu }) => {
  const { translations, featured, items } = useMut(data);

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col'>
        <span className='text-sm text-gray-400 uppercase mb-1 mt-3'>
          {translations?.name?.toUpperCase() || (featured ? 'FEATURED' : '')}
        </span>
        <div className='flex flex-col items-start py-4 gap-3'>
          {items.map((item) => {
            return (
              <SubmenuItem key={item.id} featured={featured} data={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

function Submenu({
  submenus,
  translations,
  url,
  external,
}: I_MDWithUserTranslation<MDNavbarLink>) {
  const hasMenu = submenus.length > 0;
  const [active, setActive] = useState(false);

  return (
    <>
      <li
        onClick={hasMenu ? () => setActive((a) => !a) : undefined}
        className={cn(
          'menu-top__item border-b-[1px] px-8 w-full',
          'hover:text-primary-400',
          hasMenu && 'relative dropdown',
          active && ['bg-slate-100']
        )}
      >
        <button
          type='button'
          className={cn(
            'menu-top__link w-full flex items-center justify-between my-5 text-base font-medium',
            active && ['active']
          )}
        >
          {url && !hasMenu ? (
            <UnstyledLink target={external ? '_blank' : undefined} href={url}>
              {translations?.name}
            </UnstyledLink>
          ) : (
            <a className='cursor-pointer'>{translations?.name}</a>
          )}

          {hasMenu && (
            <VscChevronDown
              size={20}
              className='submenu-show__chevron text-primary-500 text-base'
            />
          )}
        </button>

        {hasMenu && (
          <div
            className={cn(
              'submenu__mob bg-white pl-3 rounded mb-10',
              !active && ['hidden']
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex flex-col ring-opacity-5 min-h-full'>
              {submenus.map((submenu) => {
                return <SubMenu key={submenu.id} data={submenu} />;
              })}
            </div>
          </div>
        )}
      </li>
    </>
  );
}

export const MobileMenu = forwardRef<HTMLDivElement>((_, ref) => {
  const { NavbarLinks, NavbarButtons, locale, TopbarLinks } = useSharedData();
  const navbar_links = useMut(NavbarLinks);
  const topbar_links = useMut(TopbarLinks);

  const { targetEl } = useOutsideClick(onClickOuside);

  function onClickOuside(el: HTMLElement, nodeTarget: HTMLElement) {
    const burger = document.querySelector('#nav__burger');
    if (
      el.classList.contains('mobile__menu-active') &&
      burger !== nodeTarget &&
      !burger?.contains(nodeTarget)
    ) {
      onMouseClick();
    }
  }

  const onMouseClick = useCallback(() => {
    document.body.classList.remove('mobile__model-open');
    targetEl.current?.classList.remove('mobile__menu-active');
  }, [targetEl]);

  useEffect(() => {
    Router.events.on('routeChangeComplete', onMouseClick);
    Router.events.on('routeChangeError', onMouseClick);
    return () => {
      Router.events.off('routeChangeComplete', onMouseClick);
      Router.events.off('routeChangeError', onMouseClick);
    };
  }, [onMouseClick]);

  return (
    <div
      ref={mergeRefs([ref, targetEl])}
      id='mob--menu-El'
      className={cn(
        'mobile__menu xl:hidden translate-x-[40rem]',
        'transition-all duration-500 fixed bg-white ss:max-w-[496px] w-full',
        'top-0 sd:top-[41px] right-0 h-full z-50 shadow-lg ring-1 ring-black ring-opacity-5'
      )}
    >
      <span
        onClick={onMouseClick}
        className='absolute top-4 right-12 cursor-pointer'
      >
        <GrClose className='bg-primary-100 rounded p-2' size={25} />
      </span>

      <div className='overflow-y-auto max-h-full sd:pb-[53px] pb-3'>
        <div className='relative w-full flex flex-col font-normal mt-14 min-h-full'>
          <ul className='menu-top flex flex-col items-center'>
            {navbar_links.map((link) => {
              return <Submenu key={link.id} {...link} />;
            })}
          </ul>

          <ul className='menu-top flex flex-col items-center sm:hidden'>
            {topbar_links.length > 0 &&
              topbar_links.map((link) => {
                return (
                  <Submenu
                    key={link.id}
                    id={link.id}
                    label={link.label}
                    external={link.external}
                    submenus={[]}
                    url={link.url}
                    translations={link.translations}
                    status={link.status}
                    date_created={link.date_created}
                  />
                );
              })}
          </ul>

          <div className='nav__buttons w-full flex flex-col-reverse items-center px-7 md:hidden'>
            {NavbarButtons?.map((button) => {
              const { translations } = mut(button, locale);
              return (
                <ButtonLink
                  key={button.id}
                  className='w-full py-3 flex items-center justify-center text-base font-normal rounded-sm mt-2'
                  href={button.url}
                  variant={button.variant}
                  target={button.external ? '_blank' : undefined}
                >
                  {translations?.button_text}
                </ButtonLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
