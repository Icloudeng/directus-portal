import NextImage from '@/components/NextImage';
import { useCallback } from 'react';
import { setCookie } from 'cookies-next';
import { USER_LANG_COOKIE } from '@/constant/vars';
import { MDLanguage } from '@/cms/items/types';

export const LangList = ({ icon_flag, name, code }: Partial<MDLanguage>) => {
  const changeUserLang = useCallback(() => {
    setCookie(USER_LANG_COOKIE, code);
    window.location.reload();
  }, [code]);

  return (
    <div className='lang-switcher__item px-5 py-2 hover:bg-textGray'>
      <a
        className='flex items-center gap-[6px] cursor-pointer'
        onClick={changeUserLang}
      >
        <span>
          <NextImage
            useSkeleton
            src={icon_flag?.src!}
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
