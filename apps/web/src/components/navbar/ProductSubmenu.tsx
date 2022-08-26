import { BsArrowRepeat } from 'react-icons/bs';
import { HiOutlineCursorClick, HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbChartLine } from 'react-icons/tb';

import UnstyledLink from '@/components/links/UnstyledLink';

export const ProductSubmenu = () => {
    return (
        // <div className="">
        <div className="flex rounded-lg shadow-lg bg-primary-50 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="flex flex-col p-7 max-w-[17rem]">
                <div className="flex flex-col items-start gap-10 h-full">
                    <span className='text-sm text-gray-300 mt-1 font-bold underline underline-offset-8'>FEATURED</span>
                    <div className="flex flex-col items-center justify-center flex-1 h-full gap-10">
                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-primary-100 animated-underline">
                            <div className="ml-4">
                                <p className="text-sm font-bold text-gray-900">App Platform</p>
                                <p className="mt-1 text-xs text-gray-400 font-normal">Get a better understanding of where your traffic.</p>
                            </div>
                        </UnstyledLink>
                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-primary-100 animated-underline">
                            <div className="ml-4">
                                <p className="text-sm font-bold text-gray-900">Databases</p>
                                <p className="mt-1 text-xs text-gray-400 font-normal">Get a better understanding of where your traffic.</p>
                            </div>
                        </UnstyledLink>
                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-primary-100 animated-underline">
                            <div className="ml-4">
                                <p className="text-sm font-bold text-gray-900">Business Intelligence</p>
                                <p className="mt-1 text-xs text-gray-400 font-normal">Get a better understanding of where your traffic.</p>
                            </div>
                        </UnstyledLink>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between divide-x-[1px] bg-white p-2'>
                <div className='flex flex-col items-center'>
                    <span className='mb-1 text-sm text-gray-300 mt-7'>COMPUTE</span>
                    <div className="relative grid gap-6 px-5 py-6 sm:gap-6 sm:p-8">
                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <TbChartLine className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Analytics</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Get a better understanding of where your traffic is coming from.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Engagement</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Speak directly to your customers in a more meaningful way.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Security</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Your customers&#039; data will be safe and secure.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <MdOutlineDashboardCustomize className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Integrations</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Connect with third-party tools that you&#039;re already using.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <BsArrowRepeat className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Automation</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Build strategic funnels that will drive your customers to convert</p>
                            </div>
                        </UnstyledLink>
                    </div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className='flex flex-col items-center'>
                    <span className='mb-1 text-sm text-gray-300 mt-7'>SERVICES</span>
                    <div className="relative grid gap-6 px-5 py-6 sm:gap-6 sm:p-8">
                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <TbChartLine className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Analytics</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Get a better understanding of where your traffic is coming from.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Engagement</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Speak directly to your customers in a more meaningful way.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Security</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Your customers&#039; data will be safe and secure.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <MdOutlineDashboardCustomize className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Integrations</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Connect with third-party tools that you&#039;re already using.</p>
                            </div>
                        </UnstyledLink>

                        <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                            <BsArrowRepeat className="flex-shrink-0 h-6 w-6 text-primary-400" />
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">Automation</p>
                                <p className="mt-1 text-xs text-gray-400 font-light">Build strategic funnels that will drive your customers to convert</p>
                            </div>
                        </UnstyledLink>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}




// import { TbChartLine } from 'react-icons/tb';
// import { HiOutlineCursorClick, HiOutlineShieldCheck } from 'react-icons/hi';
// import { MdOutlineDashboardCustomize } from 'react-icons/md';
// import { BsArrowRepeat, BsTelephone } from 'react-icons/bs';
// import { AiOutlinePlayCircle } from 'react-icons/ai';
// import UnstyledLink from '../links/UnstyledLink';

// export const ProductSubmenu = () => {
//     return (
//         <div className="absolute z-10 -ml-4 mt-6 transform px-2 w-screen max-w-4xl sm:px-0 lg:ml-0 lg:-translate-x-44">
//             <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                 <div className='flex items-center justify-between divide-x-[1px]'>
//                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <TbChartLine className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Analytics</p>
//                                 <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Engagement</p>
//                                 <p className="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Security</p>
//                                 <p className="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <MdOutlineDashboardCustomize className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Integrations</p>
//                                 <p className="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <BsArrowRepeat className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Automations</p>
//                                 <p className="mt-1 text-sm text-gray-500">Build strategic funnels that will drive your customers to convert</p>
//                             </div>
//                         </UnstyledLink>
//                     </div>
//                     {/* ------------------------------------------------------ */}
//                     <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <TbChartLine className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Analytics</p>
//                                 <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <HiOutlineCursorClick className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Engagement</p>
//                                 <p className="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <HiOutlineShieldCheck className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Security</p>
//                                 <p className="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <MdOutlineDashboardCustomize className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Integrations</p>
//                                 <p className="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
//                             </div>
//                         </UnstyledLink>

//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
//                             <BsArrowRepeat className="flex-shrink-0 h-6 w-6 text-primary-400" />
//                             <div className="ml-4">
//                                 <p className="text-base font-medium text-gray-900">Automations</p>
//                                 <p className="mt-1 text-sm text-gray-500">Build strategic funnels that will drive your customers to convert</p>
//                             </div>
//                         </UnstyledLink>
//                     </div>
//                 </div>
//                 {/* ------------------------------------------------------ */}
//                 <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
//                     <div className="flow-root">
//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
//                             <AiOutlinePlayCircle className="flex-shrink-0 h-6 w-6 text-gray-400" />
//                             <span className="ml-3">Watch Demo</span>
//                         </UnstyledLink>
//                     </div>

//                     <div className="flow-root">
//                         <UnstyledLink href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
//                             <BsTelephone className="flex-shrink-0 h-6 w-6 text-gray-400" />
//                             <span className="ml-3">Contact Sales</span>
//                         </UnstyledLink>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
