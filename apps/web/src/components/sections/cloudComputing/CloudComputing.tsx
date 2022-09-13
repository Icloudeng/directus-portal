/* eslint-disable react/no-unescaped-entities */

import { Carousel } from "flowbite-react"

import ButtonLink from "@/components/links/ButtonLink"
import NextImage from "@/components/NextImage"

import { CarouselItem } from "./components/CarouselItem"

export const CloudComputing = () => {

    return (
        <div className="container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10">
            <div className="flex flex-col items-center justify-center gap-7 mb-7">
                <h1>What's Cloud Computing</h1>
                <span className="max-w-xl text-center">Managing a cloud infrastructure has never been so enjoyable. It's lightning-fast and stunning simple.</span>
            </div>
            <div className="w-full h-[29rem]">
                <Carousel slideInterval={5000}>
                    <div className="container__block max-w-5xl w-full grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-10 px-4">
                        <div className="card-wrapper w-full">
                            <div className="w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-50">
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
                                        <p className="mb-3 font-normal text-gray-700">Explain the importance of IT System in a company</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                                        <ul className="list-disc ml-5 mb-7">
                                            <li>Large clouds often have functions</li>
                                            <li>Here are the biggest enterprise technology</li>
                                            <li>platform on which applications and systems</li>
                                            <li>Cloud computing is the delivery of different services</li>
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
                                        src="https://flowbite.com/docs/images/blog/image-2.jpg"
                                        layout="fill"
                                        width={100}
                                        objectFit="cover"
                                        alt='hero banner image'
                                    />
                                </div>
                                <div className="flex flex-[2] flex-col justify-between p-16 leading-normal">
                                    <div className="mb-7">
                                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">consumption-based pricing model</h5>
                                        <p className="mb-3 font-normal text-gray-700">Explain what problems occur in companies when IT System are on premise.</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                                        <ul className="list-disc ml-5 mb-7">
                                            <li>functions distributed over multiple locations</li>
                                            <li>Here are the biggest enterprise technology</li>
                                            <li>each location being a data center</li>
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
                                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">Dig Deeper on Cloud infrastructure design and management</h5>
                                        <p className="mb-3 font-normal text-gray-700">Explain solutions of problems the moving of IT system in the cloud solves and how it ends all those problems.</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                                        <ul className="list-disc ml-5 mb-7">
                                            <li>Cloud computing is the on-demand availability</li>
                                            <li>Here are the biggest enterprise technology</li>
                                            <li>portal Lorem ipsum dolor sit</li>
                                            <li>without direct active management by the user</li>
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
                                        src="https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        layout="fill"
                                        width={100}
                                        objectFit="cover"
                                        alt='hero banner image'
                                    />
                                </div>
                                <div className="flex flex-[2] flex-col justify-between p-16 leading-normal">
                                    <div className="mb-7">
                                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">What is public cloud? Everything you need to know</h5>
                                        <p className="mb-3 font-normal text-gray-700">Explain the global advantages of cloud computing for companies and structure.</p>
                                    </div>
                                    <div className="">
                                        <h6 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                                        <ul className="list-disc ml-5 mb-7">
                                            <li>Simply put, cloud computing is the delivery</li>
                                            <li>Here are the biggest enterprise technology</li>
                                            <li>(“the cloud”) to offer faster innovation</li>
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
