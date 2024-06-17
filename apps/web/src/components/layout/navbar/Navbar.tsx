import type { I_MDWithUserTranslation } from '@apps/contracts';
import type { MDNavbarLink } from '@apps/contracts';
import { useCallback, useRef, useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { VscChevronDown } from 'react-icons/vsc';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/ui/links/ButtonLink';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import NextImage from '@/components/ui/NextImage';

import { COMPANY_NAME } from '@/app/constant/env';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import { useSharedData } from '@/app/store';
import { mut, useMut } from '@/cms/mut';

import { Submenu } from './components/SubMenu';

import Logo from '~/images/logo.png';

export const Navbar = ({ whiteNav }: { whiteNav?: boolean }) => {
  const { CompanyDetails, NavbarButtons, locale, NavbarLayout } =
    useSharedData();
  const pagePosition = useScrollPosition();
  const onMouseClick = () => {
    const sidebarEl = document.querySelector('#mob--menu-El');
    document.body.classList.add('mobile__model-open');
    sidebarEl?.classList.add('mobile__menu-active');
  };

  return (
    <nav
      className={clsxm(
        'nav__parent h-[70px] xl:h-[100px]',
        whiteNav && ['bg-white text-black shadow-sm'],
        'flex items-center xl:px-10 transition-all ease-in-out duration-100',
        pagePosition > 40 && [
          'xl:h-[70px] shadow-md backdrop-blur-sm bg-white/90 text-black nav__fixed',
        ],
        pagePosition <= 40 && !whiteNav && ['text-white']
      )}
    >
      <div className='relative x-container-fluid flex items-center justify-between gap-4 h-full'>
        <div className='nav__logo'>
          <UnstyledLink href='/' className='inline-block'>
            <NextImage
              useSkeleton
              imgClassName={
                NavbarLayout?.navbar_logo_rounded ? 'rounded-full' : undefined
              }
              src={CompanyDetails?.logo?.src || Logo.src}
              width={NavbarLayout?.navbar_logo_width || 60}
              height={NavbarLayout?.navbar_logo_height || 60}
              alt={CompanyDetails?.company_name || COMPANY_NAME || 'Smatflow'}
            />
          </UnstyledLink>
        </div>

        <div className='w-full flex items-center justify-between font-normal h-full'>
          <div className='hidden nav__menu xl:flex items-center h-full flex-1 justify-center'>
            <NavBarLinks />
          </div>

          <div className='hidden nav__buttons md:flex items-center xl:flex-0 justify-end gap-5 ml-3'>
            {NavbarButtons?.map((button) => {
              const { translations } = mut(button, locale);
              return (
                <ButtonLink
                  key={button.id}
                  className='py-[4px] text-center text-sm font-light rounded-sm'
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
        <div
          id='nav__burger'
          onClick={onMouseClick}
          className='nav__burger block ml-3 xl:hidden cursor-pointer'
        >
          <AiOutlineMenuFold className='submenu-burger text-4xl' />
        </div>
      </div>
    </nav>
  );
};

function NavBarLinks() {
  const { NavbarLinks } = useSharedData();
  const links = useMut(NavbarLinks);
  const pagePosition = useScrollPosition();

  return (
    <ul className='menu-top flex items-center gap-9'>
      {links.map((link) => {
        return (
          <NavbarLink key={link.id} {...link} pagePosition={pagePosition} />
        );
      })}
    </ul>
  );
}

function NavbarLink({
  submenus,
  id,
  translations,
  url,
  external,
  pagePosition,
}: I_MDWithUserTranslation<MDNavbarLink> & { pagePosition: number }) {
  const hasSubmenus = submenus.length > 0;
  const submenuRef = useRef<HTMLDivElement | null>(null);

  const [opened, setOpened] = useState(false);

  const hanlder = useCallback(() => {
    if (!submenuRef.current) return;
    const el = submenuRef.current;
    const rect = el.getBoundingClientRect();
    const screenX = window.screen.width;
    const elX = rect.x + rect.width;
    if (elX <= screenX) return;

    const rest = elX - screenX;
    el.style.transform = `translateX(-${rest + 20}px)`;
  }, []);

  const onMouseHover = () => setOpened(true);
  const onMouseOut = () => setOpened(false);

  return (
    <li
      key={id}
      onMouseOver={hasSubmenus ? onMouseHover : undefined}
      onMouseOut={hasSubmenus ? onMouseOut : undefined}
      className={clsxm(
        'menu-top__item hover:text-primary-400',
        hasSubmenus && ['relative dropdown']
      )}
    >
      <button
        type='button'
        onMouseOver={hasSubmenus ? hanlder : undefined}
        className={clsxm(
          'menu-top__link flex items-center gap-1 py-2',
          opened && ['active']
        )}
      >
        {url && !hasSubmenus ? (
          <UnstyledLink target={external ? '_blank' : undefined} href={url}>
            {translations?.name}
          </UnstyledLink>
        ) : (
          <a className='cursor-pointer'>{translations?.name}</a>
        )}

        {hasSubmenus && (
          <VscChevronDown className='submenu-show__chevron text-primary-500 text-sm' />
        )}
      </button>

      {hasSubmenus && (
        <div
          ref={submenuRef}
          className={clsxm(
            'submenu absolute rounded-3xl pt-[2.5rem]',
            '-left-[100%] invisible opacity-0',
            pagePosition > 40 ? ['top-[.45rem]'] : ['top-[1.4rem]']
          )}
        >
          <div className='flex rounded-lg shadow-lg bg-primary-50 ring-1 ring-black divide-x-[1px] ring-opacity-5 overflow-hidden'>
            {submenus.map((submenu) => {
              return <Submenu key={submenu.id} data={submenu} />;
            })}
          </div>
        </div>
      )}
    </li>
  );
}
