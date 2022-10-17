import { useRef, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink'

type IHTagNavItem = {
    itemName: string;
    itemUrl: string;
    isActive?: boolean;
}

export const HTagNavItem = ({ itemName, itemUrl, isActive }:IHTagNavItem) => {
    const itemRef = useRef<HTMLLIElement>(null)
    
    itemRef.current?.addEventListener('click', (ev: MouseEvent) => {
        ev.preventDefault();

        const el =  document.querySelector(`#htag-${itemUrl}`);
        el?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"})
    })

    return (
        <li ref={itemRef} className={`aside-menu__item mb-5 hover:text-primary-500 ${isActive? 'border-l border-primary-500': ''}`}>
            <UnstyledLink href={`#${itemUrl}`} className="pl-7">{itemName}</UnstyledLink>
        </li>
    )
}
