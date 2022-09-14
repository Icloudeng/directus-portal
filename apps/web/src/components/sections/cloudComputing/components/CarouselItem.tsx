import Image from "next/image"

import ButtonLink from "@/components/links/ButtonLink"

import { ICarouselData } from "@/types/carouselTypes"


export const CarouselItem = ({ bigTitle, description, href, items, imgSrc }:ICarouselData) => {
    return (
        <div className="duration-700 ease-in-out relative shrink-0 grow-0 basis-full max-w-full ml-[10px] transition-all transform translate-x-0 z-20" data-carousel-item="">
            <div className="w-full h-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-50">
                <div className="image-container relative md:h-[31rem] w-full flex flex-[1.2] flex-col justify-between p-24 md:p-4">
                    <Image
                        className="image object-cover rounded-t-lg md:rounded-sm md:rounded-l-lg"
                        src={imgSrc}
                        layout="fill"
                        objectFit="cover"
                        alt='hero banner image'
                    />
                </div>
                <div className="flex flex-[2] flex-col justify-between p-5 md:p-16 leading-normal">
                    <div className="mb-4 sm:mb-7">
                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">{bigTitle}</h5>
                        <p className="mb-3 font-normal text-gray-700">{description}</p>
                    </div>
                    <div className="flex flex-col sd:flex-row items-center justify-between md:block">
                        <div className="mb-7">
                            <h6 className="mb-3 text-center sd:text-start text-lg font-semibold tracking-tight text-gray-900">{items.title}</h6>
                            <ul className="list-disc ml-5 text-xs sd:text-sm text-gray-400">
                                {items.itemsList.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <ButtonLink variant='outline' href={href} className="float-right text-center text-sm font-base rounded-sm">Read More</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
