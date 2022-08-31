import { BsArrowRepeat } from 'react-icons/bs';
import { HiOutlineCursorClick, HiOutlineShieldCheck } from 'react-icons/hi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbChartLine } from 'react-icons/tb';

import UnstyledLink from '@/components/links/UnstyledLink';

type ProductFeaturedItemProps = {
    title: string,
    description: string,
    href: string,
}

const ProductFeaturedItemsData = [
    { title: 'App Platforms', href: '#', description: 'Get a better understanding of where your traffic is coming from.' },
    { title: 'Databases', href: '#', description: 'Get a better understanding of where your traffic is coming from.' },
    { title: 'Business Intelligence', href: '#', description: 'Your customers&#039; data will be safe and secure.' },
]

const ProductFeaturedItem = ({ title, description, href }: ProductFeaturedItemProps) => {
    return (
        <div className='flex flex-col items-center'>
            <UnstyledLink href={href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-primary-100 animated-underline">
                <div className="ml-4">
                    <p className="text-sm font-bold text-gray-900">{title}</p>
                    <p className="mt-1 text-xs text-gray-400 font-normal">{description}</p>
                </div>
            </UnstyledLink>
        </div>
    )
}

type ProductItemProps = {
    bigTitle: string,
    childItems: {
        smallTitle: string,
        icon: JSX.Element,
        description: string,
        href: string
    }[]
}

const ProductItemsData = [
    {
        bigTitle: 'COMPUTE',
        childItems: [
            { smallTitle: 'Analytics', href: '#', icon: <TbChartLine className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Get a better understanding of where your traffic is coming from.' },
            { smallTitle: 'Engagement', href: '#', icon: <HiOutlineCursorClick className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Get a better understanding of where your traffic is coming from.' },
            { smallTitle: 'Security', href: '#', icon: <HiOutlineShieldCheck className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Your customers&#039; data will be safe and secure.' },
            { smallTitle: 'Integrations', href: '#', icon: <MdOutlineDashboardCustomize className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Connect with third-party tools that you&#039;re already using.' },
            { smallTitle: 'Automation', href: '#', icon: <BsArrowRepeat className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Build strategic funnels that will drive your customers to convert' },
        ]
    },
    {
        bigTitle: 'SERVICES',
        childItems: [
            { smallTitle: 'Analytics', href: '#', icon: <TbChartLine className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Get a better understanding of where your traffic is coming from.' },
            { smallTitle: 'Engagement', href: '#', icon: <HiOutlineCursorClick className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Get a better understanding of where your traffic is coming from.' },
            { smallTitle: 'Security', href: '#', icon: <HiOutlineShieldCheck className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Your customers&#039; data will be safe and secure.' },
            { smallTitle: 'Integrations', href: '#', icon: <MdOutlineDashboardCustomize className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Connect with third-party tools that you&#039;re already using.' },
            { smallTitle: 'Automation', href: '#', icon: <BsArrowRepeat className='flex-shrink-0 h-6 w-6 text-primary-400' />, description: 'Build strategic funnels that will drive your customers to convert' },
        ]
    },
]

const ProductItem = ({ bigTitle, childItems }: ProductItemProps) => {
    return (
        <div className='flex flex-col items-center'>
            <span className='mb-1 text-sm text-gray-300 mt-7'>{bigTitle}</span>
            <div className="relative grid gap-6 px-5 py-6 sm:gap-6 sm:p-8">
                {childItems.map(({ smallTitle, icon, description, href }, i) => {
                    return <UnstyledLink key={i} href={href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 animated-underline">
                        {icon}
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">{smallTitle}</p>
                            <p className="mt-1 text-xs text-gray-400 font-light">{description}</p>
                        </div>
                    </UnstyledLink>
                })}
            </div>
        </div>
    )
}

export const ProductSubmenu = () => {
    return (
        <div className="flex rounded-lg shadow-lg bg-primary-50 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="flex flex-col p-7 max-w-[17rem]">
                <div className="flex flex-col items-start gap-10 h-full">
                    <span className='text-sm text-gray-300 mt-1 font-bold underline underline-offset-8'>FEATURED</span>
                    <div className="flex flex-col items-center justify-center flex-1 h-full gap-10">
                        {ProductFeaturedItemsData.map(({ title, description, href }, i) => (
                            <ProductFeaturedItem
                                key={i}
                                title={title}
                                href={href}
                                description={description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between divide-x-[1px] bg-white p-2'>
                {ProductItemsData.map((itemData, i) => (
                    <ProductItem
                        key={i}
                        bigTitle={itemData.bigTitle}
                        childItems={itemData.childItems}
                    />
                ))}
            </div>
        </div>
    )
}
