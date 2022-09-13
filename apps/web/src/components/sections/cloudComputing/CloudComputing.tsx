/* eslint-disable react/no-unescaped-entities */

import { Carousel } from "flowbite-react"

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
                        <CarouselItem />
                    </div>
                    <div className="container__block max-w-5xl w-full grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-10 px-4">
                        <CarouselItem />
                    </div>
                    <div className="container__block max-w-5xl w-full grid grid-cols-1 sd:grid-cols-2 gap-16 lg:flex items-center justify-center lg:gap-10 px-4">
                        <CarouselItem />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
