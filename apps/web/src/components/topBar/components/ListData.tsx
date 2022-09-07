import { MDLanguages } from '@/cms/items';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { ITopBarLang } from '@/types/topBarTypes';

export const LangList = ({
  link = '#',
  icon_flag,
  name,
}: Partial<MDLanguages>) => {
  return (
    <div className='lang-switcher__item px-5 py-2 hover:bg-textGray'>
      <UnstyledLink href={link} className='flex items-center gap-[6px]'>
        <span>
          <NextImage
            useSkeleton
            src={icon_flag!}
            width='15'
            height='15'
            alt='Icon'
          />
        </span>
        <span>{name}</span>
      </UnstyledLink>
    </div>
  );
};
