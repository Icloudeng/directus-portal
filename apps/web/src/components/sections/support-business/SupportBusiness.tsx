import Image from 'next/image';

import { Accordion, AccordionChild } from "./components/Accordion"


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

            <Accordion loader>
                <AccordionChild title="Ultra-fast deploy" description="To reduce the time it takes to deploy VMs, we keep them in a dedicated, renewable pool. When you create a VM, the control panel requests this pool. It reduces the average deployment time to 40 seconds.">
                    <Image
                        className='image object-cover'
                        src='https://flowbite.com/docs/images/blog/image-2.jpg'
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                </AccordionChild>
                <AccordionChild title="Freeze Protection" description="A control panel is designed within the Single Page Application architecture. After the first page has been loaded, all pages load instantly, without lag. Focus entirely on your project.">
                    <Image
                        className='image object-cover'
                        src='https://flowbite.com/docs/images/blog/image-1.jpg'
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                </AccordionChild>

                <AccordionChild title="2FA guard" description="We bring you the best options for protecting your control panel. You can set up two-factor authentication via mobile app or SMS, right in the panel settings.">
                    <Image
                        className='image object-cover'
                        src='https://flowbite.com/docs/images/blog/image-4.jpg'
                        layout="fill"
                        objectFit="cover"
                        alt='accordion image'
                    />
                </AccordionChild>
            </Accordion>
        </div>
    )
}
