import UnstyledLink from '@/components/links/UnstyledLink';

import { ISocialIcon } from '@/types/footerTypes';

export const SocialMedia = ({ icon, href, title }: ISocialIcon) => {
  return (
    <UnstyledLink title={title} className='hover:text-primary-500' href={href}>
      {typeof icon === 'string' ? (
        <img width={17} height={17} src={icon} alt={title || ''} />
      ) : (
        icon
      )}
    </UnstyledLink>
  );
};
