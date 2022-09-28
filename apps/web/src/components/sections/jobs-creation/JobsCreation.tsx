import Image from 'next/image'
import React from 'react'

export const JobsCreation = () => {
    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h1 className='text-center'>Lead to massive jobs</h1>
                <span className='max-w-xl text-center'>
                    Multi-cloud skills are in high demand, so you can easily hop around
                    between cloud computing providers and make yourself even more desirable
                    to potential employers in the process.
                </span>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-5 md:gap-16'>
                <div className="left__container flex-1 flex flex-col gap-7">
                    <div className="image-container relative h-[19rem]">
                        <Image
                            className="image object-cover rounded-sm"
                            src='https://flowbite.com/docs/images/blog/image-2.jpg'
                            layout="fill"
                            objectFit="cover"
                            alt='hero banner image'
                        />
                    </div>
                    <div className='flex flex-col items-center md:items-start gap-3'>
                        <h4 className='text-center md:text-start'>Be curious enough to play in the cloud</h4>
                        <span className='text-center md:text-start max-w-2xl md:max-w-lg'>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </span>
                    </div>
                </div>

                <div className='right__container flex-1 flex flex-col gap-5'>
                    <div className='flex flex-col items-center md:items-start gap-3'>
                        <h4 className='text-center md:text-start'>Network (yes, with humans)</h4>
                        <span className='text-center md:text-start max-w-2xl md:max-w-lg'>
                        Other cloud providers offer you to pay monthly or hourly — our
                        system bills in 10 minutes increments. If you use the VM for 30 minutes and delete it, 
                        you will only pay for 30 minutes. No more
                        </span>
                    </div>
                    <div className='flex flex-col items-center md:items-start gap-3'>
                        <h4 className='text-center md:text-start'>Have reputable references</h4>
                        <span className='text-center md:text-start max-w-2xl md:max-w-lg'>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using content here,
                        </span>
                    </div>
                    <div className='flex flex-col items-center md:items-start gap-3'>
                        <h4 className='text-center md:text-start'>Build your cloud portfolio</h4>
                        <span className='text-center md:text-start max-w-2xl md:max-w-lg'>
                        We use an innovative hyper-converged vStack platform. 
                        The platform is powered by Open Source technologies that provide fantastic performance. 
                        It is the first of its kind, the unique one.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
