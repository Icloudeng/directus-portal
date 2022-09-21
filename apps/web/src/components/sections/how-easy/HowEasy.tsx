import Image from "next/image"

export const HowEasy = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h1 className='text-center'>How easy is cloud computing with Us</h1>
                <span className='max-w-xl text-center'>
                    A new study confirms what most of us have said for years: cloud
                    computing has a high degree of difficulty. However, worthwhile
                    endeavours are rarely easy.
                </span>
            </div>
            <div className='w-full h-full flex flex-col md:flex-row items-center justify-center'>
                <div className='easy__left flex-1 flex flex-col mr-2 p-7'>
                    <div className='flex flex-col items-center md:items-start gap-7'>
                        <h6 className='mb-3 text-center md:text-start text-lg font-semibold tracking-tight'>Icloueng Makes It Simple to Embrace the Cloud</h6>
                        <div className='flex flex-col gap-3'>
                            <span className='max-w-sm ss:max-w-lg'>We take a hands-on approach to designing and implementing cloud solutions that make sense for the needs of your organization. We’ll help you assess if and when a move to the cloud is right and create a smooth transition for your team.</span>
                            <ul className='list-disc max-w-xs ss:max-w-sm ml-5 text-xs sd:text-sm text-gray-400'>
                                <li>Require extra IT support</li>
                                <li>Adherence to industry compliance</li>
                                <li>Increase maintenance costs</li>
                                <li>Require a greater capital investment</li>
                                <li>Increase the risk of data loss</li>
                                <li>Limit your company’s ability to scale</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="image-container relative h-[21rem]">
                            <Image
                                className="image object-cover rounded-t-lg md:rounded-sm md:rounded-l-lg"
                                src='https://flowbite.com/docs/images/blog/image-2.jpg'
                                layout="fill"
                                objectFit="cover"
                                alt='hero banner image'
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className='easy__right flex-1 flex flex-col md:flex-col-reverse ml-2 p-7'>
                    <div className='flex flex-col items-center md:items-start gap-7'>
                        <h6 className='mb-3 text-center md:text-start text-lg font-semibold tracking-tight'>Icloueng Makes It Simple to Embrace the Cloud</h6>
                        <div className='flex flex-col gap-3'>
                            <span className='max-w-sm ss:max-w-lg'>We take a hands-on approach to designing and implementing cloud solutions that make sense for the needs of your organization. We’ll help you assess if and when a move to the cloud is right and create a smooth transition for your team.</span>
                            <ul className='list-disc max-w-xs ss:max-w-sm ml-5 text-xs sd:text-sm text-gray-400'>
                                <li>Require extra IT support</li>
                                <li>Adherence to industry compliance</li>
                                <li>Increase maintenance costs</li>
                                <li>Require a greater capital investment</li>
                                <li>Increase the risk of data loss</li>
                                <li>Limit your company’s ability to scale</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 md:mb-10">
                        <div className="image-container relative h-[21rem]">
                            <Image
                                className="image object-cover rounded-t-lg md:rounded-sm md:rounded-r-lg"
                                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                                layout="fill"
                                objectFit="cover"
                                alt='hero banner image'
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                
                <div className='easy__right'>
                    <div className=''></div>
                </div>
            </div>
        </div>
    )
}
