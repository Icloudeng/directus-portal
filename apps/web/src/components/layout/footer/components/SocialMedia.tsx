import Image from 'next/legacy/image';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { ISocialIcon } from '@/types';

export const SocialMedia = ({ icon, href, title }: ISocialIcon) => {
  return (
    <UnstyledLink title={title} className='hover:text-primary-500' href={href}>
      {typeof icon === 'string' ? (
        <Image width={17} height={17} src={icon} alt={title || ''} />
      ) : (
        icon
      )}
    </UnstyledLink>
  );
};
