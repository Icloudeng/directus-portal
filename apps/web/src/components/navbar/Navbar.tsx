import { AiOutlineMenuFold } from 'react-icons/ai';

import { useScrollPosition } from '@/hooks/useScrollPosition';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { navbarData } from '@/models/navbarData';

import { NavBarMenuList } from './components/SubMenu';

import Logo from '~/images/icloudenglogo.png';

export const Navbar = () => {
  const pagePosition = useScrollPosition();
  const onMouseClick = () => {
    const sidebarEl = document.querySelector('#mob--menu-El');
    document.body.classList.add('mobile__model-open');
    sidebarEl?.classList.add('mobile__menu-active');
  };

  return (
    <div
      className={`nav__parent h-[70px] xl:h-[100px] flex items-center xl:px-10 transition-all ease-in-out duration-100 ${
        pagePosition > 40
          ? 'xl:h-[70px] shadow-sm backdrop-blur-sm bg-white/90 text-black'
          : 'text-white'
      }`}
    >
      <div className='relative x-container-fluid flex items-center justify-between gap-4 h-full'>
        <div className='nav__logo xl:w-[20%]'>
          <UnstyledLink href='#'>
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
            <ul className='menu-top flex items-center gap-9'>
              {navbarData.map((menu, i) => (
                <NavBarMenuList
                  key={i}
                  title={menu.title}
                  link={menu.link}
                  external={menu.external}
                  subMenu={menu.subMenu}
                />
              ))}
            </ul>
          </div>
          <div className='hidden nav__buttons md:flex items-center flex-1 xl:flex-0 justify-end gap-5 ml-3'>
            <ButtonLink
              className='py-[4px] text-center text-sm font-light rounded-sm hover:p'
              href='#'
              variant='outline'
            >
              Contact Us
            </ButtonLink>
            <ButtonLink
              className='py-[4px] text-center text-sm font-light rounded-sm'
              href='#'
              variant='primary'
            >
              Get Started
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
