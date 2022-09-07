import React, { useRef } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { VscChevronDown } from "react-icons/vsc"

import { useScrollPosition } from '@/hooks/useScrollPosition';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { navbarData } from '@/models/navbarData';

import { INavBarMenuList } from '@/types/navbarTypes';

import Logo from "~/images/icloudenglogo.png";

export const NavBarMenuList = ({ title, link, external, subMenu }: INavBarMenuList) => {
    const pagePosition = useScrollPosition();
    const btnRef = useRef<HTMLButtonElement>(null)
    const onMouseHover = () => {
        btnRef.current?.classList.add('active');
    }
    const onMouseOut = () => {
        btnRef.current?.classList.remove('active');
    }

    const withDropdown = (
        <div className={`submenu absolute rounded-3xl pt-[2.5rem] ${pagePosition > 40 ? 'top-[.45rem]': 'top-[1.4rem]'} -left-[100%] invisible opacity-0`}>
            <div className="flex rounded-lg shadow-lg bg-primary-50 ring-1 ring-black divide-x-[1px] ring-opacity-5 overflow-hidden">
                {subMenu?.map(({ title, featured, items }, i) => (
                    <div key={i} className={`flex w-[17rem] ${featured ? 'flex-col p-7' : 'items-center justify-between bg-white'}`}>
                        <div className={`flex flex-col ${featured ? 'items-start gap-10 h-full' : 'items-center'}`}>
                            <span className={`text-sm text-gray-300 ${featured ? 'mt-1 font-bold underline underline-offset-8' : 'mb-1 mt-7'}`}>{featured ? 'FEATURED' : title}</span>
                            <div className={`${featured ? 'flex flex-col items-center justify-center flex-1 h-full gap-10' : 'relative grid gap-6 px-5 py-6 sm:gap-6 sm:p-8'}`}>
                                {items.map(({ title, icon, description, link, external }, i) => {
                                    return (
                                        <UnstyledLink key={i} href={link} className={`-m-3 p-3 flex items-start rounded-lg ${featured ? 'hover:bg-primary-100' : 'hover:bg-gray-50'} animated-underline`}>
                                            {featured ? null : icon && React.createElement(icon, {className: 'flex-shrink-0 h-6 w-6 text-primary-400'}) }
                                            <div className="ml-4">
                                                <p className="text-sm font-bold text-gray-900">{title}</p>
                                                <p className="mt-1 text-xs text-gray-400 font-normal">{description}</p>
                                            </div>
                                        </UnstyledLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

    const chevron = <VscChevronDown className="submenu-show__chevron text-primary-500 text-sm" />

    return (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <li onMouseOver={subMenu ? onMouseHover : () => { }} onMouseOut={subMenu ? onMouseOut : () => { }} className={`menu-top__item ${subMenu && 'relative dropdown'} hover:text-primary-400`}>
            <button ref={btnRef} type='button' className='menu-top__link flex items-center gap-1'>
                <UnstyledLink href={link}>{title}</UnstyledLink>
                {subMenu && chevron}
            </button>
            {subMenu && withDropdown}
        </li>
    )
}


export const Navbar2 = () => {
    const pagePosition = useScrollPosition();

    return (
        <div className={`sticky top-0 h-[70px] xl:h-[100px] flex items-center px-10 mb-10 z-40 transition-all ease-in-out duration-100 ${pagePosition > 40 ?
            'xl:h-[70px] shadow-sm backdrop-blur-sm bg-white/90 text-black' : 'xl:hover:bg-white xl:hover:text-black text-white'}`}>
            <div className='x-container-fluid flex items-center justify-between gap-4'>
                <div className='nav__logo xl:w-[20%]'>
                    <UnstyledLink href='#'>
                        <NextImage useSkeleton src={Logo.src} width={80} height={60} alt="icloudeng logo" />
                    </UnstyledLink>
                </div>
                <div className='w-full flex items-center justify-between font-normal'>
                    <div className='hidden nav__menu xl:flex items-center'>
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
                        <ButtonLink className='py-[4px] text-center text-sm font-light rounded-sm' href='#' variant='outline'>Contact Us</ButtonLink>
                        <ButtonLink className='py-[4px] text-center text-sm font-light rounded-sm' href='#' variant='primary'>Get Started</ButtonLink>
                    </div>
                </div>
                <div className='nav__burger block ml-3 xl:hidden'>
                    <AiOutlineMenuFold className="submenu-burger text-4xl" />
                </div>
            </div>
        </div>
    )
}