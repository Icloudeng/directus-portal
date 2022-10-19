import { useRouter } from 'next/router';

import NextImage from '@/components/ui/NextImage';

import { MDLanguage } from '@/cms/items/types';

export const LangList = ({ icon_flag, name, code }: Partial<MDLanguage>) => {
  const router = useRouter();

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className='lang-switcher__item px-5 py-2 hover:bg-textGray'>
      <a
        className='flex items-center gap-[6px] cursor-pointer'
        onClick={() => onToggleLanguageClick(code || '')}
      >
        <span>
          <NextImage
            useSkeleton
            src={icon_flag?.src || ''}
            width='15'
            height='15'
            alt='Icon'
          />
        </span>
        <span>{name}</span>
      </a>
    </div>
  );
};
