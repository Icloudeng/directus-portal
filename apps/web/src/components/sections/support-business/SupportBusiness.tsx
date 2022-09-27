import Image from 'next/image';
import { useEffect } from "react"

import Skeleton from "@/components/Skeleton";

import { Accordion, AccordionChild } from "./components/Accordion"
import { SupportBusinessItemList } from "./components/SupportBusinessItemList"


export const SupportBusiness = () => {

    return (
        <div className='x-container max-w-7xl mx-auto py-10 flex flex-col items-center gap-10 ss:px-12'>
            <div className='flex flex-col items-center justify-center gap-7'>
                <h1 className='text-center'>Support business development</h1>
                <span className='max-w-xl text-center'>
                    Cloud computing provides a way for your business to manage your
                    computing resources online by providing it with
                    a flexible and global way of accessing data any where, any time.
                </span>
            </div>

            {/* <div className="accordion__top-container pt-5 w-full">
                <div className="relative w-full accordion__main-container">
                    <div className="w-full flex flex-col items-center">
                        {ISBItemData.map(({ accordion, img }, index) => (
                            <SupportBusinessItemList key={index} accordion={accordion} img={img} />
                        ))}
                    </div>

                    <div className="relative float-right mt-10">
                        <button
                            type='button'
                            onClick={() => { null }}
                            disabled={false}
                            className='absolute -left-[3.5rem] flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
                            data-carousel-prev=''
                        >
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-1 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none`}>
                                <svg aria-hidden='true' className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                                </svg>
                                <span className='sr-only'>Previous</span>
                            </span>
                        </button>

                        <button
                            type='button'
                            onClick={() => { null }}
                            disabled={true}
                            className='absolute right-10 flex items-center justify-center px-4 cursor-pointer group focus:outline-none'
                            data-carousel-next=''
                        >
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 ring-1 group-focus:ring-3 group-focus:ring-primary-400 group-focus:outline-none`}>
                                <svg aria-hidden='true' className={`w-5 h-5 text-primary-400 sm:w-6 sm:h-6`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
                                </svg>
                                <span className='sr-only'>Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div> */}

            <Accordion loader>
                <AccordionChild title="Ultra-fast deploy" description="To reduce the time it takes to deploy VMs, we keep them in a dedicated, renewable pool. When you create a VM, the control panel requests this pool. It reduces the average deployment time to 40 seconds.">
                    <Image
                        className='image object-cover'
                        src={'https://flowbite.com/docs/images/blog/image-2.jpg'}
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                </AccordionChild>
                <AccordionChild title="Freeze Protection" description="A control panel is designed within the Single Page Application architecture. After the first page has been loaded, all pages load instantly, without lag. Focus entirely on your project.">
                    <Image
                        className='image object-cover'
                        src={'https://flowbite.com/docs/images/blog/image-1.jpg'}
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                </AccordionChild>

                <AccordionChild title="2FA guard" description="We bring you the best options for protecting your control panel. You can set up two-factor authentication via mobile app or SMS, right in the panel settings.">
                    <Image
                        className='image object-cover'
                        src={'https://flowbite.com/docs/images/blog/image-4.jpg'}
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                </AccordionChild>
            </Accordion>
        </div>
    )
}
