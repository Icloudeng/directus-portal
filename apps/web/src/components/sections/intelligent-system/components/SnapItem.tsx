import Image from 'next/image'

import ButtonLink from '@/components/links/ButtonLink'

import { ISnapItem } from '@/types/intelligentSystemTypes';


export const SnapItem = (props:ISnapItem) => {
    const {imgLink, title, description, btnLink, extraStyles} = props;

    return (
        <div className='snap-center'>
            <div className={`relative flex-shrink-0 max-w[95vw] overflow-hidden rounded-3xl ${extraStyles} scl transition-all duration-500`}>
                <Image src={imgLink} layout='fill' alt="" className='absolute inset-0 w-full h-full object-cover object-bottom' />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 w-[768px] p-12 flex flex-col justify-between items-start">
                    <div className="">
                        <h2 className="mb-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                            {title}
                        </h2>
                        <p className="font-medium text-white">
                            {description}
                        </p>
                    </div>
                    <ButtonLink href={btnLink} className="px-4 py-3 rounded-lg text-center border-none bg-white hover:bg-primary-400 text-slate-900 text-sm font-medium">
                        Explore more
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}
