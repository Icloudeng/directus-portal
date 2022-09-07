import { StaticImageData } from 'next/image';

export type ITopBar = {
    message: string
    href: string
}


export type ITopBarLang = {
    name: string,
    imgSrc: StaticImageData | string,
    href: string,
}