/* eslint-disable react/no-unescaped-entities */

import { Carousel } from "flowbite-react"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"

import NextImage from "@/components/NextImage"
import ButtonLink from "@/components/links/ButtonLink"

export const CloudComputing = () => {

    const ArrowRight: React.FunctionComponent = () => {
        return (
            <span className="w-12 h-12 bg-gray-200">
                <MdOutlineArrowForwardIos className=" text-red-500" />
            </span>
        )
    }

    const ArrowLeft: React.FunctionComponent = () => {
        return (
            <span className="bg-gray-200">
                <MdOutlineArrowBackIosNew className=" text-red-500" />
            </span>
        )
    }

    return (
        <div className="container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center justify-center gap-7 mb-7">
                <h1>What's Cloud Computing</h1>
                <span className="max-w-xl text-center">Managing a cloud infrastructure has never been so enjoyable. It's lightning-fast and stunning simple.</span>
            </div>
            <div className="w-full h-[29rem]">
                <Carousel slideInterval={55000}>
                    <div className="container__block max-w-5xl w-full grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-10 px-4">
                        <div className="card-wrapper w-full">
                            <div className="w-full flex flex-col items-start bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-50">
                                <div className="relative flex flex-[1.2] flex-col justify-between p-4">
                                    <NextImage
                                        useSkeleton
                                        className="object-cover w-full h-[27rem] rounded-t-lg md:rounded-sm md:rounded-l-lg"
                                        src="https://flowbite.com/docs/images/blog/image-1.jpg"
                                        layout="fill"
                                        width={100}
                                        objectFit="cover"
                                        alt='hero banner image'
                                    />
                                </div>
                                <div className="flex flex-[2] flex-col justify-between p-16 leading-normal">
                                    <div className="mb-7">
                                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                                        <ul className="list-disc ml-5 mb-7">
                                            <li>suscipit deleniti facilis</li>
                                            <li>Here are the biggest enterprise technology</li>
                                            <li>portal Lorem ipsum dolor sit</li>
                                            <li>Noteworthy technology acquisitions</li>
                                        </ul>
                                        <ButtonLink variant='outline' href="#" className="float-right text-center text-sm font-base rounded-sm">Read More</ButtonLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__block max-w-5xl w-full grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-10 px-4">
                        <div className="card-wrapper w-full">
                            <div className="w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-50">
                                <div className="relative flex flex-[1.2] flex-col justify-between p-4">
                                    <NextImage
                                        useSkeleton
                                        className="object-cover w-full h-[27rem] rounded-t-lg md:rounded-sm md:rounded-l-lg"
                                        src="https://flowbite.com/docs/images/blog/image-3.jpg"
                                        layout="fill"
                                        width={100}
                                        objectFit="cover"
                                        alt='hero banner image'
                                    />
                                </div>
                                <div className="flex flex-[2] flex-col justify-between p-16 leading-normal">
                                    <div className="mb-7">
                                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                                        <ul className="list-disc ml-5 mb-7">
                                            <li>suscipit deleniti facilis</li>
                                            <li>Here are the biggest enterprise technology</li>
                                            <li>portal Lorem ipsum dolor sit</li>
                                            <li>Noteworthy technology acquisitions</li>
                                        </ul>
                                        <ButtonLink variant='outline' href="#" className="float-right text-center text-sm font-base rounded-sm">Read More</ButtonLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__block max-w-5xl w-full grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-10 px-4">
                        <div className="card-wrapper w-full">
                            <div className="w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-50">
                                <div className="relative flex flex-[1.2] flex-col justify-between p-4">
                                    <NextImage
                                        useSkeleton
                                        className="object-cover w-full h-[27rem] rounded-t-lg md:rounded-sm md:rounded-l-lg"
                                        src="https://flowbite.com/docs/images/blog/image-4.jpg"
                                        layout="fill"
                                        width={100}
                                        objectFit="cover"
                                        alt='hero banner image'
                                    />
                                </div>
                                <div className="flex flex-[2] flex-col justify-between p-16 leading-normal">
                                    <div className="mb-7">
                                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                                        <ul className="list-disc ml-5 mb-7">
                                            <li>suscipit deleniti facilis</li>
                                            <li>Here are the biggest enterprise technology</li>
                                            <li>portal Lorem ipsum dolor sit</li>
                                            <li>Noteworthy technology acquisitions</li>
                                        </ul>
                                        <ButtonLink variant='outline' href="#" className="float-right text-center text-sm font-base rounded-sm">Read More</ButtonLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
