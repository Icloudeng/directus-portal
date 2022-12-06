import { I_MDWithUserTranslation } from '@apps/contracts';
import {
  MDNavbarLink,
  NavbarLinkSubmenu,
  NavbarLinkSubmenuItem,
} from '@apps/contracts';
import { Router } from 'next/router';
import { useTranslation } from 'next-i18next';
import { forwardRef, useCallback, useEffect, useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { VscChevronDown } from 'react-icons/vsc';

import { useOutsideClick } from '@/app/hooks/useOutsideClick';
import { useSharedData } from '@/app/store';
import { mergeRefs } from '@/app/utils/merge-refs';
import { useMut } from '@/cms/mut';

import { HasSvgText } from '../../ui/HasSvgText';
import ButtonLink from '../../ui/links/ButtonLink';
import UnstyledLink from '../../ui/links/UnstyledLink';

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
      className='-m-3 p-3 flex items-start navbar__link-icon'
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
        <span className='text-sm text-gray-300 uppercase mb-1 mt-3'>
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
  const btnRef = useRef<HTMLButtonElement>(null);
  const onMouseClick = () => {
    btnRef.current?.classList.toggle('active');
  };

  return (
    <>
      <li
        onClick={hasMenu ? onMouseClick : undefined}
        className={`menu-top__item border-b-[1px] px-8 w-full ${
          hasMenu && 'relative dropdown'
        } hover:text-primary-400`}
      >
        <button
          ref={btnRef}
          type='button'
          className='menu-top__link w-full flex items-center justify-between my-5'
        >
          {url && !hasMenu ? (
            <UnstyledLink target={external ? '_blank' : undefined} href={url}>
              {translations?.name}
            </UnstyledLink>
          ) : (
            <a className='cursor-pointer'>{translations?.name}</a>
          )}

          {hasMenu && (
            <VscChevronDown className='submenu-show__chevron text-primary-500 text-sm' />
          )}
        </button>
        {hasMenu && (
          <div className='submenu__mob hidden'>
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
  const { NavbarLinks } = useSharedData();
  const links = useMut(NavbarLinks);
  const { targetEl } = useOutsideClick(onClickOuside);
  const { t } = useTranslation();

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
  }, [targetEl.current]);

  useEffect(() => {
    Router.events.on('routeChangeComplete', onMouseClick);
    Router.events.on('routeChangeError', onMouseClick);
    return () => {
      Router.events.off('routeChangeComplete', onMouseClick);
      Router.events.off('routeChangeError', onMouseClick);
    };
  }, []);

  return (
    <div
      ref={mergeRefs([ref, targetEl])}
      id='mob--menu-El'
      className='mobile__menu xl:hidden translate-x-[40rem] transition-all duration-500 fixed bg-white ss:max-w-[496px] w-full top-0 sd:top-[41px] right-0 h-full z-50 shadow-lg ring-1 ring-black ring-opacity-5'
    >
      <div className='relative h-full flex items-start justify-between gap-4 pb-[21rem]'>
        <div className='w-full h-full overflow-y-auto flex flex-col items-center justify-between font-normal mt-24'>
          <div className='nav__menu flex flex-col items-start w-full'>
            <span
              onClick={onMouseClick}
              className='absolute top-7 right-12 cursor-pointer'
            >
              <GrClose className='bg-red-50 rounded-sm' size={25} />
            </span>
            <ul className='menu-top flex flex-col items-center w-full'>
              {links.map((menu) => {
                return <Submenu key={menu.id} {...menu} />;
              })}
            </ul>
          </div>
          <div className='nav__buttons absolute bottom-32 w-full flex flex-col-reverse items-center justify-end gap-3 ml-3 px-7'>
            <ButtonLink
              className='w-full py-3 flex items-center justify-center text-base font-normal rounded-sm'
              href='#'
              variant='outline'
            >
              {t('Contact Us')}
            </ButtonLink>
            <ButtonLink
              className='w-full py-3 flex items-center justify-center text-base font-normal rounded-sm'
              href='#'
              variant='primary'
            >
              {t('Get Started')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
});
