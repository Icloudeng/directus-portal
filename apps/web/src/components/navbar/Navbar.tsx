import { AiOutlineMenuFold } from 'react-icons/ai';

import { xclassnames } from '@/lib/xclassnames';
import { useScrollPosition } from '@/hooks/useScrollPosition';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink'
import MenuList from '@/components/navbar/components/MenuList';
import { PartnersSubmenu } from '@/components/navbar/Partners';
import { ProductSubmenu } from '@/components/navbar/ProductSubmenu';
import { SolutionSubmenu } from '@/components/navbar/Solutions';
import NextImage from '@/components/NextImage';

import { CompanySubmenu } from './Company';

import Logo from "~/images/icloudenglogo.png";


const menuListData = [
    { name: 'Products', isDropdown: true, extraStyles: 'absolute -ml-4 mt-3 px-2 sm:px-0 top-[.7rem] z-10 pt-6 transform w-screen max-w-4xl sm:px-0 lg:ml-0 lg:-translate-x-44', subMenu: <ProductSubmenu /> },
    { name: 'Solutions', isDropdown: true, extraStyles: 'absolute z-10 -ml-4 pt-[1.45rem] lg:pt-6 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:-translate-x-36', subMenu: <SolutionSubmenu /> },
    { name: 'Pricing', isDropdown: false  },
    { name: 'Tutorials', isDropdown: false },
    { name: 'Partners', isDropdown: true, extraStyles: 'absolute z-10 -ml-4 pt-[1.45rem] lg:pt-6 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:-translate-x-36', subMenu: <PartnersSubmenu />  },
    { name: 'Company', isDropdown: true, extraStyles: 'absolute -ml-4 mt-3 px-2 sm:px-0 top-[.7rem] z-10 pt-6 transform w-screen max-w-3xl sm:px-0 lg:ml-0 lg:-translate-x-64', subMenu: <CompanySubmenu /> },
]

{/* <div className={pagePosition > 40?
        'sticky top-0 h-[70px] shadow-sm backdrop-blur-sm bg-white text-black w-full flex items-center px-10 mb-10 ease-out duration-100 z-50' : 
        'transition-shadow sticky top-0 h-[70px] w-full flex items-center px-10 mb-10 hover:bg-white hover:text-black ease-linear duration-100 text-white'}> */}

export const Navbar = () => {
    const pagePosition = useScrollPosition();
    
    return (
        <div className={`sticky top-0 h-[70px] flex items-center px-10 mb-10 z-50 transition-all ease-in-out duration-100 ${pagePosition > 40? 
            'shadow-sm backdrop-blur-sm bg-white/90 text-black' : 'hover:bg-white hover:text-black text-white'}`}>
            <div className='x-container-fluid flex items-center gap-4'>
                <div className='nav__logo mr-60'>
                    <UnstyledLink href='#'>
                        <NextImage useSkeleton src={Logo.src} width={80} height={60} alt="icloudeng logo" />
                    </UnstyledLink>
                </div>
                <div className='w-full flex items-center font-normal'>
                    <div className='nav__menu flex items-center flex-1'>
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
                    <div className='nav__buttons flex items-center gap-5 ml-3'>
                        <ButtonLink className='py-[4px] text-center font-light rounded-sm' href='#' variant='outline'>Contact Us</ButtonLink>
                        <ButtonLink className='py-[4px] text-center font-light rounded-sm' href='#' variant='primary'>Get Started</ButtonLink>
                    </div>
                </div>
                <div className='nav__burger text-primary-600 ml-3 hidden'>
                    <AiOutlineMenuFold className="submenu-burger text-textDark text-4xl" />
                </div>
            </div>
        </div>
    )
}
