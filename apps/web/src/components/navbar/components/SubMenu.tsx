import React, { useRef } from 'react';
import { VscChevronDown } from 'react-icons/vsc';

import { useScrollPosition } from '@/hooks/useScrollPosition';

import UnstyledLink from '@/components/links/UnstyledLink';

import { INavBarMenuList } from '@/types/navbarTypes';

export const NavBarMenuList = ({ title, link, subMenu }: INavBarMenuList) => {
  const pagePosition = useScrollPosition();
  const btnRef = useRef<HTMLButtonElement>(null);
  const onMouseHover = () => {
    btnRef.current?.classList.add('active');
  };
  const onMouseOut = () => {
    btnRef.current?.classList.remove('active');
  };

  const withDropdown = (
    <div
      className={`submenu absolute rounded-3xl pt-[2.5rem] ${
        pagePosition > 40 ? 'top-[.45rem]' : 'top-[1.4rem]'
      } -left-[100%] invisible opacity-0`}
    >
      <div className='flex rounded-lg shadow-lg bg-primary-50 ring-1 ring-black divide-x-[1px] ring-opacity-5 overflow-hidden'>
        {subMenu?.map(({ title, featured, items }, i) => (
          <div
            key={i}
            className={`flex w-[17rem] ${
              featured
                ? 'flex-col p-7'
                : 'items-center justify-between bg-white'
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
                {featured ? 'FEATURED' : title}
              </span>
              <div
                className={`${
                  featured
                    ? 'flex flex-col items-center justify-center flex-1 h-full gap-10'
                    : 'relative grid gap-6 px-5 py-6 sm:gap-6 sm:p-8'
                }`}
              >
                {items.map(
                  ({ title, icon, description, link, external }, i) => {
                    return (
                      <UnstyledLink
                        key={i}
                        href={link}
                        className={`-m-3 p-3 flex items-start rounded-lg ${
                          featured ? 'hover:bg-primary-100' : 'hover:bg-gray-50'
                        } animated-underline`}
                      >
                        {featured
                          ? null
                          : icon &&
                            React.createElement(icon, {
                              className:
                                'flex-shrink-0 h-6 w-6 text-primary-400',
                            })}
                        <div className='ml-4'>
                          <p className='text-sm font-bold text-gray-900'>
                            {title}
                          </p>
                          <p className='mt-1 text-xs text-gray-400 font-normal'>
                            {description}
                          </p>
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

  const chevron = (
    <VscChevronDown className='submenu-show__chevron text-primary-500 text-sm' />
  );

  return (
    <li
      onMouseOver={subMenu ? onMouseHover : undefined}
      onMouseOut={subMenu ? onMouseOut : undefined}
      className={`menu-top__item ${
        subMenu && 'relative dropdown'
      } hover:text-primary-400`}
    >
      <button
        ref={btnRef}
        type='button'
        className='menu-top__link flex items-center gap-1'
      >
        <UnstyledLink href={link}>{title}</UnstyledLink>
        {subMenu && chevron}
      </button>
      {subMenu && withDropdown}
    </li>
  );
};
