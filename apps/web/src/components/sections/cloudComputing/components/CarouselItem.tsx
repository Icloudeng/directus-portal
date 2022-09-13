import Image from "next/image"

import ButtonLink from "@/components/links/ButtonLink"

export const CarouselItem = () => {
    return (
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
            <div className="w-full h-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-50">
                <div className="image-container relative md:h-[31rem] w-full flex flex-[1.2] flex-col justify-between p-24 md:p-4">
                    <Image
                        // useSkeleton
                        className="image object-cover  rounded-t-lg md:rounded-sm md:rounded-l-lg"
                        src="https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        layout="fill"
                        // width={200}
                        objectFit="cover"
                        alt='hero banner image'
                    />
                </div>
                <div className="flex flex-[2] flex-col justify-between p-5 md:p-16 leading-normal">
                    <div className="mb-4 sm:mb-7">
                        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900">What is public cloud? Everything you need to know</h5>
                        <p className="mb-3 font-normal text-gray-700">Explain the global advantages of cloud computing for companies and structure.</p>
                    </div>
                    <div className="flex flex-col sd:flex-row items-center justify-between md:block">
                        <div className="mb-7">
                            <h6 className="mb-3 text-center sd:text-start text-lg font-semibold tracking-tight text-gray-900">Noteworthy technology</h6>
                            <ul className="list-disc ml-5 text-xs sd:text-sm text-gray-400">
                                <li>Simply put, cloud computing is the delivery</li>
                                <li>Here are the biggest enterprise technology</li>
                                <li>(“the cloud”) to offer faster innovation</li>
                                <li>Noteworthy technology acquisitions</li>
                            </ul>
                        </div>
                        <ButtonLink variant='outline' href="#" className="float-right text-center text-sm font-base rounded-sm">Read More</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
