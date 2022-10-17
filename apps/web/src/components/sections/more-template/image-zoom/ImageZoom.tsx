// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// // import ReactImageMagnify from 'react-image-magnify';
// import ReactPlayer from 'react-player'

// const imagesLink = [
//     'https://flowbite.com/docs/images/blog/image-1.jpg',
//     'https://flowbite.com/docs/images/blog/image-2.jpg',
//     'https://flowbite.com/docs/images/blog/image-3.jpg',
//     'https://flowbite.com/docs/images/blog/image-4.jpg'
// ]

// export const ImageZoom = () => {
//     const [imgDirection, setImageDirection] = useState<any>(null);
//     const [activeIndex, setActiveIndex] = useState<number>(0);
//     // const [activeItem, setActiveIndex] = useState<{index:number, urlLink:string}>({index:0, urlLink:''});
//     const [bigImgUrl, setBigImgUrl] = useState<string>(imagesLink[activeIndex])

//     const getImg = async () => {
//         const img = await document.querySelectorAll('.img-direction')
//         setImageDirection(img)
//     }

//     useEffect(() => {
//         getImg();
//         if (imgDirection !== null) {
//             imgDirection[activeIndex].classList.add('image-zoom-active')
//             // setBigImgUrl(imagesLink[activeIndex])
//             // setBigImgUrl(imgDirection[activeIndex].firstChild.firstChild.src)
//         }
//     }, [imgDirection])



//     const handleChange: any = (itemLink: string, index: number) => {

//         imgDirection.forEach((val: any, key: number) => {
//             val.classList.remove('image-zoom-active')
//         })

//         imgDirection[index].classList.add('image-zoom-active')
//         setActiveIndex(index)
//         setBigImgUrl(itemLink)
//         console.log(bigImgUrl);

//     }

//     return (
//         <div className='flex items-center gap-3'>
//             <div className="img-zoom__carousel flex flex-col gap-1">
//                 {imagesLink.map((itemLink, index) => {
//                     return <div
//                         onMouseOver={() => handleChange(itemLink, index)}
//                         key={index} className="img-direction relative h-[4rem] w-[3rem] rounded-sm">
//                         <Image
//                             className="image object-cover"
//                             src={itemLink}
//                             layout="fill"
//                             objectFit="cover"
//                             alt='hero banner image'
//                             loading="lazy"
//                         />
//                     </div>
//                 })}
//             </div>
//             <div className="img-zoom__view">
//                 <div className="relative h-[22rem] w-[25rem] rounded-sm">
//                     <Image
//                         className="image object-cover"
//                         src={bigImgUrl}
//                         layout="fill"
//                         objectFit="cover"
//                         alt='hero banner image'
//                         loading="lazy"
//                     />
//                     {/* <ReactImageMagnify {...{
//                         // style:{width:'20rem', height:'30rem!important'},
//                         smallImage: {
//                             alt: 'Wristwatch by Ted Baker London',
//                             isFluidWidth: false,
//                             src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
//                             height:320,
//                             width:320
                            
//                         },
//                         largeImage: {
//                             src: 'https://flowbite.com/docs/images/blog/image-1.jpg',
//                             width: 600,
//                             height: 500,
//                         }
//                     }} /> */}
//                     {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
//                         <source src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
//                     </video> */}
//                     {/* <video loop autoPlay src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"></video> */}
//                 </div>
//                 {/* <div className="view-zoom"></div> */}
//             </div>
//         </div>
//     )
// }


import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import Skeleton from '@/components/Skeleton'
import { useHasMounted } from '@/hooks/useHasMounted'

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

    const [imgDirection, setImageDirection] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    // const [activeItem, setActiveIndex] = useState<{index:number, urlLink:string}>({index:0, urlLink:''});
    const [bigImgUrl, setBigImgUrl] = useState<IImagesLink>(imagesLink[activeIndex])

    const getImg = async () => {
        const img = await document.querySelectorAll('.img-direction')
        setImageDirection(img)
    }

    useEffect(() => {
        getImg();
        if (imgDirection !== null) {
            imgDirection[activeIndex].classList.add('image-zoom-active')
            setBigImgUrl(imagesLink[activeIndex])
            // setBigImgUrl(imgDirection[activeIndex].firstChild.firstChild.src)
        }
    }, [imgDirection, activeIndex])



    const handleChange: any = (itemLink: IImagesLink, index: number) => {

        imgDirection.forEach((val: any) => {
            val.classList.remove('image-zoom-active')
        })

        imgDirection[index].classList.add('image-zoom-active')
        setActiveIndex(index)
        setBigImgUrl(itemLink)
        // console.log(bigImgUrl);

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
