import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import { useHasMounted } from '@/hooks/useHasMounted'

import Skeleton from '@/components/ui/Skeleton'

type IImagesLink = {
    type: string;
    itemLink: string;
}

const imagesLink = [
    {
        type: 'image',
        itemLink: 'https://flowbite.com/docs/images/blog/image-1.jpg',
    },
    {
        type: 'image',
        itemLink: 'https://flowbite.com/docs/images/blog/image-2.jpg',
    },
    {
        type: 'video',
        itemLink: 'https://www.youtube.com/watch?v=wWgIAphfn2U'
    },
    {
        type: 'image',
        itemLink: 'https://flowbite.com/docs/images/blog/image-3.jpg',
    },
    {
        type: 'video',
        itemLink: 'https://www.youtube.com/watch?v=HtTUsOKjWyQ',
    }
] as const

export const ImageZoom = () => {
    const {mounted} = useHasMounted();

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const imgData = useRef(
        () => document.querySelectorAll('.img-direction')
    );
    const [bigImgUrl, setBigImgUrl] = useState<IImagesLink>(imagesLink[activeIndex])

    useEffect(() => {
        // getImg();
        const element = Array.from(imgData.current()).at(activeIndex)
        element?.classList.add('image-zoom-active')
        setBigImgUrl(imagesLink[activeIndex])

    }, [activeIndex])



    const handleChange: any = (itemLink: IImagesLink, index: number) => {
        const elements = Array.from(imgData.current())
        elements.forEach((val: any) => {
            val.classList.remove('image-zoom-active')
        })

        elements.at(index)?.classList.add('image-zoom-active')

        setActiveIndex(index)
        setBigImgUrl(itemLink)

    }

    return (
        <div className='flex items-center gap-3'>
            <div className="img-zoom__carousel flex flex-col gap-1">
                {imagesLink.map(({ itemLink, type }, index) => {
                    return <div
                        onMouseOver={() => handleChange({ type, itemLink }, index)}
                        key={index} className="img-direction relative h-[4rem] w-[3rem] rounded-sm">
                        {
                            type === 'image' ?
                                <Image
                                    className="image object-cover"
                                    src={itemLink}
                                    layout="fill"
                                    objectFit="cover"
                                    alt='hero banner image'
                                    loading="lazy"
                                /> :
                                mounted && <ReactPlayer
                                    url={itemLink}
                                    light
                                    width='48px'
                                    height='64px'
                                    style={{ pointerEvents: 'none' }}
                                />

                        }
                    </div>
                })}
            </div>
            <div className="img-zoom__view">
                <div className="relative h-[22rem] w-[40rem] rounded-sm z-[1]">
                    <Skeleton className="absolute inset-0 bg-primary-100 -z-[1]" />
                    {
                        bigImgUrl.type === 'image' ?
                            <Image
                                className="image object-cover"
                                src={bigImgUrl.itemLink}
                                layout="fill"
                                objectFit="cover"
                                alt='hero banner image'
                                loading="lazy"
                            /> :
                            mounted && <ReactPlayer
                                url={bigImgUrl.itemLink}
                                muted
                                light
                            />
                    }
                </div>
            </div>
        </div>
    )
}
