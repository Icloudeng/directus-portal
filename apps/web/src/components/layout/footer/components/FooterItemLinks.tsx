import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { MDFooterLink } from '@/cms/items/types';
import { useMut } from '@/cms/mut';

export const FooterItemLinks = ({
  title,
  links,
}: {
  title: string;
  links: MDFooterLink['links'];
}) => {
  const items = useMut(links);

  return (
    <div className='flex flex-col gap-4'>
      <p className='text-primary-400 font-medium'>{title}</p>
      <div className='flex flex-col text-sm text-gray-400 gap-2'>
        {items.map(({ translations, url, id, external }) => {
          return (
            <UnstyledLink
              key={id}
              href={url}
              target={external ? '_blank' : undefined}
              className='hover:text-gray-300'
            >
              {translations?.name}
            </UnstyledLink>
          );
        })}
      </div>
    </div>
  );
};