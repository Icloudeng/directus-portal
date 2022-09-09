import UnstyledLink from '@/components/links/UnstyledLink';
import { MDFooterLinkRes } from '@/cms/items';

export const FooterItemLinks = ({
  title,
  links,
}: {
  title: string;
  links: MDFooterLinkRes['links'];
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-primary-400 font-medium'>{title}</p>
      <div className='flex flex-col text-sm text-gray-400 gap-2'>
        {links.map(({ translations, url, id, external }) => {
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
