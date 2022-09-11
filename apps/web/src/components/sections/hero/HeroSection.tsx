import { TypeAnimation } from 'react-type-animation';

import NextImage from "@/components/NextImage"

import Vulnerability from "~/images/vulnerability.png";

export const HeroSection = () => {

    return (
        <div className="x-container flex flex-col sd:flex-row items-center justify-between text-white sm:px-7 md:px-9 gap-3">
            <div className="hero-left flex flex-col sd:w-1/2 gap-7">
                <div className="flex flex-col items-center sd:items-start gap-4 sm:gap-7">
                    <h1 className="font-extrabold text-4xl sd:text-2xl sm:text-[2.2rem] md:text-[2.7rem] -mb-4">We bring solutions </h1>
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            'to Companies',
                            1000,
                            'to Schools',
                            1000,
                            'to Governments',
                            1000,
                            'to Business of all size',
                            1000,
                        ]}
                        speed={30} // Custom Speed from 1-99 - Default Speed: 40
                        // style={{ fontSize: '2em' }}
                        className="font-extrabold leading-[1.3] text-4xl sd:text-2xl sm:text-[2.2rem] md:text-[2.7rem]"
                        wrapper="h1" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                        cursor={true}
                    />
                </div>

                <span className="text-gray-300 text-center sd:text-start max-w-lg leading-[1.5] sm:text-[1rem] md:text-[20px] sd:w-[95%]">Cloud IT Engineering LTD is a leading global provider
                    of cloud computing services solutions to leverage
                    and speed-up development in different areas.</span>
            </div>
            <div className="hero-right flex items-center justify-end max-w-xs sd:max-w-full sd:w-1/2">
                <NextImage
                    useSkeleton
                    src={Vulnerability.src}
                    imgClassName="!z-0"
                    width={500}
                    height={376}
                    alt="hero banner image"
                />
            </div>
        </div>
    )
}
