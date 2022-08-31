import UnstyledLink from "@/components/links/UnstyledLink"

import { ISolutionsItem } from "@/types/navbarTypes"

export const SolutionsItem = ({ smallTitle, icon, description, href }: ISolutionsItem) => {
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