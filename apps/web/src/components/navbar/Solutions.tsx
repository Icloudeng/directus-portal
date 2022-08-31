import { BsArrowRepeat } from 'react-icons/bs';
import { HiOutlineCursorClick, HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbChartLine } from 'react-icons/tb';

import UnstyledLink from '@/components/links/UnstyledLink';

import { ISolutionsItem } from '@/types/navbarTypes';

const SolutionsItemsData = [
    { smallTitle: 'Analytics', href: '#', icon: <TbChartLine className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Get a better understanding of where your traffic is coming from.' },
    { smallTitle: 'Engagement', href: '#', icon: <HiOutlineCursorClick className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Get a better understanding of where your traffic is coming from.' },
    { smallTitle: 'Security', href: '#', icon: <HiOutlineShieldCheck className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Your customers&#039; data will be safe and secure.' },
    { smallTitle: 'Integrations', href: '#', icon: <MdOutlineDashboardCustomize className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Connect with third-party tools that you&#039;re already using.' },
    { smallTitle: 'Automation', href: '#', icon: <BsArrowRepeat className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Build strategic funnels that will drive your customers to convert' },
]

const SolutionsItem = ({ smallTitle, icon, description, href }: ISolutionsItem) => {
    return (
        <div className='flex flex-col items-center'>
            <UnstyledLink href={href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                {icon}
                <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{smallTitle}</p>
                    <p className="mt-1 text-xs text-gray-400 font-light">{description}</p>
                </div>
            </UnstyledLink>
        </div>
    )
}

export const SolutionSubmenu = () => {
    return (
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {SolutionsItemsData.map(({ smallTitle, icon, description, href }, i) => (
                    <SolutionsItem
                        key={i}
                        href={href}
                        smallTitle={smallTitle}
                        icon={icon}
                        description={description}
                    />
                ))}
            </div>
        </div>
    )
}

