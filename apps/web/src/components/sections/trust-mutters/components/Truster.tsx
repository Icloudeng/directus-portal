import Image, { StaticImageData } from "next/image"

type ITruster = {
    logoLink: string | StaticImageData;
}

export const Truster = ({ logoLink }: ITruster) => {
    return (
        <div className="relative h-16 w-28">
            <Image
                className='image object-cover'
                src={logoLink}
                layout='fill'
                objectFit='contain'
                alt='logo image'
                loading='lazy'
            />
        </div>
    )
}
