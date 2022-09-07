import { AiOutlineMenuFold } from 'react-icons/ai';

import { xclassnames } from '@/lib/xclassnames';
import { useScrollPosition } from '@/hooks/useScrollPosition';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink'
import MenuList from '@/components/navbar/components/MenuList';
import { PartnersSubmenu } from '@/components/navbar/components/Partners';
import { ProductSubmenu } from '@/components/navbar/components/ProductSubmenu';
import { SolutionSubmenu } from '@/components/navbar/components/Solutions';
import NextImage from '@/components/NextImage';

import { CompanySubmenu } from './components/Company';

import Logo from "~/images/icloudenglogo.png";


const menuListData = [
    { name: 'Products', isDropdown: true, extraStyles: 'absolute -ml-4 mt-3 px-2 sm:px-0 top-[.7rem] z-10 pt-6 transform w-screen max-w-4xl sm:px-0 lg:ml-0 lg:-translate-x-44', subMenu: <ProductSubmenu /> },
    { name: 'Solutions', isDropdown: true, extraStyles: 'absolute z-10 -ml-4 pt-[1.45rem] lg:pt-6 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:-translate-x-36', subMenu: <SolutionSubmenu /> },
    { name: 'Pricing', isDropdown: false  },
    { name: 'Tutorials', isDropdown: false },
    { name: 'Partners', isDropdown: true, extraStyles: 'absolute z-10 -ml-4 pt-[1.45rem] lg:pt-6 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:-translate-x-36', subMenu: <PartnersSubmenu />  },
    { name: 'Company', isDropdown: true, extraStyles: 'absolute -ml-4 mt-3 px-2 sm:px-0 top-[.7rem] z-10 pt-6 transform w-screen max-w-3xl sm:px-0 lg:ml-0 lg:-translate-x-64', subMenu: <CompanySubmenu /> },
]


export const Navbar = () => {
    const pagePosition = useScrollPosition();
    
    return (
        <div className={`sticky top-0 h-[70px] xl:h-[100px] flex items-center md:px-10 mb-10 z-50 transition-all ease-in-out duration-100 ${pagePosition > 40? 
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
                            {menuListData.map((menu, i) => (
                                <MenuList
                                    key={i}
                                    name={menu.name}
                                    isDropdown={menu.isDropdown}
                                    subMenu={menu.subMenu}
                                    subMenuExtraStyles={menu.extraStyles}
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
