import React, { forwardRef, useRef } from 'react';
import { GrClose } from 'react-icons/gr';
import { VscChevronDown } from 'react-icons/vsc';

import { ReactPortal } from '@/lib/reactPortal';

import { navbarData } from '@/models/navbarData';

import ButtonLink from '../links/ButtonLink';
import UnstyledLink from '../links/UnstyledLink';

import { INavBarMenuList } from '@/types/navbarTypes';
import { mergeRefs } from '@/utils/merge-refs';

export const NavBarMenuList = ({
  title,
  link,
  external,
  subMenu,
}: INavBarMenuList) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const onMouseClick = () => {
    btnRef.current?.classList.toggle('active');
  };
  // const onMouseOut = () => {
  //     btnRef.current?.classList.remove('active');
  // }

  const withDropdown = (
    <div className='submenu__mob hidden'>
      <div className='flex flex-col ring-opacity-5 min-h-full'>
        {subMenu?.map(({ title, featured, items }, i) => (
          <div key={i} className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-300 uppercase mb-1 mt-3'>
                {featured ? 'FEATURED' : title}
              </span>
              <div className='flex flex-col items-start py-4 gap-3'>
                {items.map(
                  ({ title, icon, description, link, external }, i) => {
                    return (
                      <UnstyledLink
                        key={i}
                        href={link}
                        className='-m-3 p-3 flex items-start'
                      >
                        {featured
                          ? null
                          : icon &&
                            React.createElement(icon, {
                              className: 'flex-shrink-0 h-3 w-3 text-[#889fbe]',
                            })}
                        <div className='ml-4'>
                          <p className='text-sm text-gray-500 hover:text-gray-900 '>
                            {title}
                          </p>
                          {/* <p className="mt-1 text-xs text-gray-400 font-normal">{description}</p> */}
                        </div>
                      </UnstyledLink>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const chevron = <VscChevronDown className='submenu-show__chevron text-xl' />;

  return (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <li
      onClick={subMenu ? onMouseClick : () => {}}
      className={`menu-top__item border-b-[1px] px-8 w-full ${
        subMenu && 'relative dropdown'
      } hover:text-primary-400`}
    >
      <button
        ref={btnRef}
        type='button'
        className='menu-top__link w-full flex items-center justify-between my-5'
      >
        <UnstyledLink className='text-lg' href={link}>
          {title}
        </UnstyledLink>
        {subMenu && chevron}
      </button>
      {subMenu && withDropdown}
    </li>
  );
};

export const MobileMenu = forwardRef<HTMLDivElement>((props, ref) => {
  const mobMenuEl = useRef<HTMLDivElement>(null);
  const onMouseClick = () => {
    document.body.classList.remove('mobile__model-open');
    mobMenuEl.current?.classList.remove('mobile__menu-active');
  };

  return (
    <ReactPortal containerId='#layout__container'>
      <div
        ref={mergeRefs([ref, mobMenuEl])}
        className='mobile__menu hidden fixed bg-white max-w-[496px] w-full top-0 sd:top-[40px] right-0 h-full z-50 shadow-lg ring-1 ring-black ring-opacity-5'
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
            <div className='nav__buttons absolute bottom-32 w-full flex flex-col-reverse items-center justify-end gap-3 ml-3 px-7'>
              <ButtonLink
                className='w-full py-3 flex items-center justify-center text-base font-normal rounded-sm'
                href='#'
                variant='outline'
              >
                Contact Us
              </ButtonLink>
              <ButtonLink
                className='w-full py-3 flex items-center justify-center text-base font-normal rounded-sm'
                href='#'
                variant='primary'
              >
                Get Started
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
});
