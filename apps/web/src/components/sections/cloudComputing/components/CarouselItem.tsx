import ButtonLink from "@/components/links/ButtonLink"
import NextImage from "@/components/NextImage"

export const CarouselItem = () => {
    return (
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
    )
}
