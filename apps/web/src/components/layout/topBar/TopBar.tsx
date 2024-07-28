import { useTranslation } from 'next-i18next';
import React from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

import cn from '@/lib/cn';

import { LangList } from '@/components/layout/topBar/components/ListData';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import NextImage from '@/components/ui/NextImage';

import { useOutsideClick } from '@/app/hooks/useOutsideClick';
import { useSharedData } from '@/app/store';
import { useMut } from '@/cms/mut';

export const TopBar: React.FC = () => {
  const { languages, locale, News } = useSharedData();
  const { targetEl } = useOutsideClick((el) => el.classList.remove('active'));
  const { t } = useTranslation();

  const toggleLang = () => {
    targetEl.current?.classList.toggle('active');
  };

  const closeLangDropdown = () => {
    targetEl.current?.classList.remove('active');
  };

  const language = languages.find((lg) => lg.code === locale);

  return (
    <div className='block border-b border-b-slate-100 bg-white px-3 sd:px-10 z-50 topbar--line'>
      <div className='h-10 flex items-center justify-start'>
        <div className='flex flex-1 items-center mr-auto overflow-hidden flex-nowrap'>
          {News && News.length > 0 && (
            <>
              <UnstyledLink href='/news' className='hidden sd:block'>
                <div className=' h-5 px-2 border border-primary-400 flex items-center justify-center rounded-sm'>
                  <span className='uppercase text-[0.6rem] text-primary-400'>
                    {t('TOPBAR_NEWS')}
                  </span>
                </div>
              </UnstyledLink>
              <TopbarNews />
            </>
          )}
        </div>
        <div className=' mr-5'>
          <TopbarLinks />
        </div>
        <div className='text-xs text-primary-950 h-full relative flex items-center'>
          {language && (
            <nav ref={targetEl} className='lang-switcher block'>
              <button
                type='button'
                onClick={toggleLang}
                className='flex items-center gap-[6px]'
              >
                <span>
                  <NextImage
                    useSkeleton
                    src={language.icon_flag?.src || ''}
                    width='15'
                    height='15'
                    alt='Icon'
                  />
                </span>

                <span className='flex items-center gap-[1px]'>
                  <span>{language?.name}</span>
                  <VscChevronDown className='lang-switcher__chevron text-primary-950 text-sm' />
                </span>
              </button>
              <div className='lang-switcher__submenu absolute flex flex-col gap-[1px] border border-b-slate-100 py-2 top-full -left-5 bg-white z-50 invisible opacity-0'>
                {languages.map((lang, i) => (
                  <LangList key={i} onClick={closeLangDropdown} {...lang} />
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

function TopbarNews() {
  const { News } = useSharedData();
  const data = useMut(News);
  const $data = data[0] as (typeof data)[0] | undefined;
  const title = $data?.translations?.title || '';

  return (
    <>
      {$data && (
        <>
          <UnstyledLink
            title={title}
            href={'/news/' + $data.slug}
            className={cn(
              'animated-underline ml-2 text-xs flex items-center justify-start text-primary-950',
              'truncate'
            )}
          >
            {title.length > 50 ? title.substring(0, 50) + '...' : title}
          </UnstyledLink>
          <VscChevronRight className='text-primary-950 text-sm' />
        </>
      )}
    </>
  );
}

function TopbarLinks() {
  const { TopbarLinks } = useSharedData();
  const datas = useMut(TopbarLinks);

  return (
    <ul className='no-underline hidden sm:flex gap-5 text-xs text-primary-950 list-none'>
      {datas.map(({ translations, url, id, external }) => (
        <li key={id}>
          <UnstyledLink
            href={url}
            target={external ? '_blank' : undefined}
            className='animated-underline border-b-0'
          >
            {translations?.name}
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
}
