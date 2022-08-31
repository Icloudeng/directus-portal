import UnstyledLink from "@/components/links/UnstyledLink"

import { ICompanyItem } from "@/types/navbarTypes"

export const CompanyItem = ({ bigTitle, childItems }: ICompanyItem) => {
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