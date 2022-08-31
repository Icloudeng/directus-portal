import UnstyledLink from "@/components/links/UnstyledLink"

import { IProductFeaturedItem } from "@/types/navbarTypes"

export const ProductFeaturedItem = ({ title, description, href }: IProductFeaturedItem) => {
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