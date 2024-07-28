import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import type { I_MDWithUserTranslation } from '@packages/contracts';
import type { MDNavbarLink } from '@packages/contracts';
import { Fragment, useState } from 'react';
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
            {CompanyDetails?.logo?.src && (
              <NextImage
                useSkeleton
                imgClassName={
                  NavbarLayout?.navbar_logo_rounded ? 'rounded-full' : undefined
                }
                src={CompanyDetails?.logo?.src}
                width={NavbarLayout?.navbar_logo_width || 60}
                height={NavbarLayout?.navbar_logo_height || 60}
                alt={CompanyDetails?.company_name || COMPANY_NAME || 'Smatflow'}
              />
            )}
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
    <PopoverGroup>
      <ul className='menu-top flex items-center gap-9'>
        {links.map((link) => {
          return (
            <NavbarLink key={link.id} {...link} pagePosition={pagePosition} />
          );
        })}
      </ul>
    </PopoverGroup>
  );
}

function NavbarLink({
  submenus,
  id,
  translations,
  url,
  external,
}: I_MDWithUserTranslation<MDNavbarLink> & { pagePosition: number }) {
  const hasSubmenus = submenus.length > 0;

  const [opened, setOpened] = useState(false);

  const onMouseHover = () => hasSubmenus && setOpened(true);
  const onMouseOut = () => hasSubmenus && setOpened(false);

  return (
    <li
      key={id}
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseOut}
      className={clsxm(
        'menu-top__item hover:text-primary-100',
        hasSubmenus && ['relative dropdown']
      )}
    >
      <Popover className='group relative'>
        <PopoverButton
          type='button'
          onClick={(e) => e.preventDefault()}
          className={clsxm(
            'menu-top__link flex items-center gap-1 py-2 outline-none border-none',
            'hover:text-primary-300',
            opened && 'text-primary-400'
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
            <VscChevronDown
              className={clsxm(
                'text-primary-500 text-sm transition-transform',
                opened && 'rotate-180'
              )}
            />
          )}
        </PopoverButton>

        {hasSubmenus && (
          <Transition
            show={opened}
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel
              static
              anchor='bottom'
              className='submenu z-50 shadow-lg'
            >
              <div className='flex rounded-lg bg-primary-50 ring-1 ring-black divide-x-[1px] ring-opacity-5 overflow-hidden'>
                {submenus.map((submenu) => {
                  return <Submenu key={submenu.id} data={submenu} />;
                })}
              </div>
            </PopoverPanel>
          </Transition>
        )}
      </Popover>
    </li>
  );
}
