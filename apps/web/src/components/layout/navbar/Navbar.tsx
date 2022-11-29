import { useRef } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { VscChevronDown } from 'react-icons/vsc';

import { useScrollPosition } from '@/app/hooks/useScrollPosition';

import ButtonLink from '@/components/ui/links/ButtonLink';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import NextImage from '@/components/ui/NextImage';

import { useSharedData } from '@/app/store';

import { useMut } from '@/cms/mut';

import { Submenu } from './components/SubMenu';

import Logo from '~/images/icloudenglogo.png';
import { useTranslation } from 'next-i18next';
import type { I_MDWithUserTranslation } from '@apps/contracts';
import type { MDNavbarLink } from '@apps/contracts';

export const Navbar = ({ whiteNav }: { whiteNav?: boolean }) => {
  const pagePosition = useScrollPosition();
  const { t } = useTranslation();
  const onMouseClick = () => {
    const sidebarEl = document.querySelector('#mob--menu-El');
    document.body.classList.add('mobile__model-open');
    sidebarEl?.classList.add('mobile__menu-active');
  };

  return (
    <div
      className={`nav__parent h-[70px] xl:h-[100px] ${
        whiteNav ? 'bg-white text-black shadow-sm' : ''
      } flex items-center xl:px-10 transition-all ease-in-out duration-100 ${
        pagePosition > 40
          ? 'xl:h-[70px] shadow-md backdrop-blur-sm bg-white/90 text-black nav__fixed'
          : !whiteNav
          ? 'text-white'
          : ''
      }`}
    >
      <div className='relative x-container-fluid flex items-center justify-between gap-4 h-full'>
        <div className='nav__logo xl:w-[20%]'>
          <UnstyledLink href='/'>
            <NextImage
              useSkeleton
              src={Logo.src}
              width={80}
              height={60}
              alt='icloudeng logo'
            />
          </UnstyledLink>
        </div>
        <div className='w-full flex items-center justify-between font-normal h-full'>
          <div className='hidden nav__menu xl:flex items-center h-full'>
            <NavBarLinks />
          </div>
          <div className='hidden nav__buttons md:flex items-center flex-1 xl:flex-0 justify-end gap-5 ml-3'>
            <ButtonLink
              className='py-[4px] text-center text-sm font-light rounded-sm'
              href='#'
              variant='outline'
            >
              {t('Contact Us')}
            </ButtonLink>
            <ButtonLink
              className='py-[4px] text-center text-sm font-light rounded-sm'
              href='#'
              variant='primary'
            >
              {t('Get Started')}
            </ButtonLink>
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
    </div>
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

  const btnRef = useRef<HTMLButtonElement>(null);
  const onMouseHover = () => {
    btnRef.current?.classList.add('active');
  };
  const onMouseOut = () => {
    btnRef.current?.classList.remove('active');
  };

  return (
    <li
      key={id}
      onMouseOver={hasSubmenus ? onMouseHover : undefined}
      onMouseOut={hasSubmenus ? onMouseOut : undefined}
      className={`menu-top__item ${
        hasSubmenus ? 'relative dropdown' : ''
      } hover:text-primary-400`}
    >
      <button
        ref={btnRef}
        type='button'
        className='menu-top__link flex items-center gap-1'
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
          className={`submenu absolute rounded-3xl pt-[2.5rem] ${
            pagePosition > 40 ? 'top-[.45rem]' : 'top-[1.4rem]'
          } -left-[100%] invisible opacity-0`}
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
