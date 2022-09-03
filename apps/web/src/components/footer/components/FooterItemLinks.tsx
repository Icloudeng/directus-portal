import UnstyledLink from "@/components/links/UnstyledLink"

import { IFooterItemLinks } from "@/types/footerTypes"

export const FooterItemLinks = ({ bigTitle, childItems }: IFooterItemLinks) => {
    return (
      <div className="flex flex-col gap-4">
        <p className='text-primary-400 font-medium'>{bigTitle}</p>
        <div className='flex flex-col text-sm text-gray-400 gap-2'>
          {childItems.map(({ smallTitle, href }, i) => {
            return <UnstyledLink key={i} href={href} className='hover:text-gray-300'>{smallTitle}</UnstyledLink>
          })}
        </div>
      </div>
    )
  }