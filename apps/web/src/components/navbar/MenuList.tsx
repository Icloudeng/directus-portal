import React from "react"
import { VscChevronDown } from "react-icons/vsc"

type MenuListPropsTypes = {
    name: string
    subMenu?: React.ReactElement | React.ReactNode
    subMenuExtraStyles?: string
    isDropdown: boolean
}

const MenuList:React.FC<MenuListPropsTypes> = ({ name, subMenu, subMenuExtraStyles, isDropdown }) => {
    const btnRef = React.useRef<HTMLButtonElement>(null)
    const onMouseHover = () => {
        btnRef.current?.classList.add('active');
    }
    const onMouseOut = () => {
        btnRef.current?.classList.remove('active');
    }

    const withDropdown = (
        <div className={`submenu ${subMenuExtraStyles} invisible opacity-0`}>
            {subMenu}
        </div>
    )

    const chevron = <VscChevronDown className="submenu-show__chevron text-primary-500 text-sm" />

    return (
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        <li onMouseOver={isDropdown? onMouseHover : () => {}} onMouseOut={isDropdown? onMouseOut : () => {}} className={`menu-top__item ${isDropdown && 'relative dropdown'} hover:text-primary-400`}>
            <button ref={btnRef} type='button' className='menu-top__link flex items-center gap-1'>
                <span>{name}</span>
                {isDropdown && chevron}
            </button>
            {isDropdown && withDropdown}
        </li>
    )
}

export default MenuList