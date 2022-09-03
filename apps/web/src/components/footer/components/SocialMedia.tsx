import UnstyledLink from "@/components/links/UnstyledLink"

import { ISocialIcon } from "@/types/footerTypes"

export const SocialMedia = ({ icon, href }: ISocialIcon) => {
    return (
      <UnstyledLink className='hover:text-primary-500' href={href}>
        {icon}
      </UnstyledLink>
    )
  }