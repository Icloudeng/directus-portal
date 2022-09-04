import { TypeAnimation } from 'react-type-animation';

import NextImage from "@/components/NextImage"

import Vulnerability from "~/images/vulnerability.png";

export const HeroSection = () => {
    return (
        <div className="x-container flex items-center justify-between text-white px-9 gap-3">
            <div className="hero-left flex flex-col w-1/2 gap-7">
                <h1 className="font-extrabold md:text-5xl -mb-4">We bring solutions </h1>
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
                    className="font-extrabold md:text-5xl"
                    wrapper="h1" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                    cursor={true}
                />

                <span className="text-gray-300 max-w-lg leading-[1.5] text-[20px]">Cloud IT Engineering LTD is a leading global provider
                    of cloud computing services solutions to leverage
                    and speed-up development in different areas.</span>
            </div>
            <div className="hero-right flex items-center justify-end w-1/2">
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
