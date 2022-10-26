import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react";

type IServerElement = {
    logoLink: string | StaticImageData
    text: string
}
export const ServerElement = ({ logoLink, text }: IServerElement) => {
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="relative w-16 h-16 p-2">
                <Image
                    className='image object-cover'
                    src={logoLink}
                    layout='fill'
                    objectFit='cover'
                    alt='logo image'
                    loading='lazy'
                />
            </div>
            <span>{text}</span>
        </div>
    )
}
