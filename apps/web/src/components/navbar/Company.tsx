import { BsArrowRepeat } from 'react-icons/bs';
import { HiOutlineCursorClick, HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbChartLine } from 'react-icons/tb';

import UnstyledLink from '@/components/links/UnstyledLink';

export const CompanySubmenu = () => {
    return (
        // <div className="">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
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
