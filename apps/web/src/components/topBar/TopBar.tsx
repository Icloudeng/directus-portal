import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import FrFlag from "~/images/france.png";
import UsFlag from "~/images/united-states.png";
import React from 'react';

type TopBarPropsType = {
    message: string
}

export const TopBar: React.FC<TopBarPropsType> = ({ message }) => {
    const langRef = React.useRef<HTMLElement>(null)
    const toggleLang = () => {
        langRef.current?.classList.toggle('active');
    }

  return (
    <div className=" w-full h-10 bg-white border-b border-b-textGray px-10 flex items-center justify-start">
        <UnstyledLink href="#" className="flex flex-1 items-center mr-auto overflow-hidden flex-nowrap">
            <div className=" h-5 px-2 border border-primary-400 flex items-center justify-center rounded-sm">
                <span className="uppercase text-[0.6rem] text-primary-400">news</span>
            </div>
            <span className="animated-underline mx-3 text-xs flex items-center justify-start text-textDark">{message}</span>
            <VscChevronRight className="text-textDark text-sm"/>
        </UnstyledLink>
        <div className=" mr-5">
            <ul className="no-underline flex gap-5 text-xs text-textDark list-none">
                <li>
                    <UnstyledLink href="#" className="animated-underline border-b-0">Cloud comparison</UnstyledLink>
                </li>
                <li>
                    <UnstyledLink href="#" className="animated-underline border-b-0">Pricing</UnstyledLink>
                </li>
                <li>
                    <UnstyledLink href="#" className="animated-underline border-b-0">Changelog</UnstyledLink>
                </li>
            </ul>
        </div>
        <div className='text-xs text-textDark h-full relative flex items-center'>
            <nav ref={langRef} className='lang-switcher block'>
                <button type='button' onClick={toggleLang} className='flex items-center gap-[6px]'>
                    <span>
                        <NextImage useSkeleton src={UsFlag.src} width='15' height='15' alt='Icon'/>
                    </span>
                    <span className='flex items-center gap-[1px]'>
                        <span>EN</span>
                        <VscChevronDown className="lang-switcher__chevron text-textDark text-sm"/>
                    </span>
                </button>
                <div className='lang-switcher__submenu absolute flex flex-col gap-[1px] border border-b-textGray py-2 top-full -left-5 bg-white z-50 invisible opacity-0'>
                    <div className='lang-switcher__item px-5 py-2 hover:bg-textGray'>
                        <UnstyledLink href='#' className='flex items-center gap-[6px]'>
                            <span>
                                <NextImage useSkeleton src={FrFlag.src} width='15' height='15' alt='Icon'/>
                            </span>
                            <span>French</span>
                        </UnstyledLink>
                    </div>
                    <div className='lang-switcher__item px-5 py-2 hover:bg-textGray'>
                        <UnstyledLink href='#' className='flex items-center gap-[6px]'>
                            <span>
                                <NextImage useSkeleton src={UsFlag.src} width='15' height='15' alt='Icon'/>
                            </span>
                            <span>English</span>
                        </UnstyledLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}
