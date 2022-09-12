import React from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import { LangList } from '@/components/topBar/components/ListData';

import { useSharedData } from '@/store';

import { useMut } from '@/cms/mut';
import { useOutsideClick } from '@/hooks/useOutsideClick';

export const TopBar: React.FC = () => {
  const { languages, locale } = useSharedData();
  const { targetEl } = useOutsideClick((el) => el.classList.remove('active'));

  const toggleLang = () => {
    targetEl.current?.classList.toggle('active');
  };

  const language = languages.find((lg) => lg.code === locale);

  return (
    <div className='hidden sd:block border-b border-b-textGray bg-white px-10 z-50'>
      <div className='h-10 flex items-center justify-start'>
        <div className='flex flex-1 items-center mr-auto overflow-hidden flex-nowrap'>
          <div className=' h-5 px-2 border border-primary-400 flex items-center justify-center rounded-sm'>
            <UnstyledLink href='/news/'>
              <span className='uppercase text-[0.6rem] text-primary-400'>
                news
              </span>
            </UnstyledLink>
          </div>
          <TopbarNews />
        </div>
        <div className=' mr-5'>
          <TopbarLinks />
        </div>
        <div className='text-xs text-textDark h-full relative flex items-center'>
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
                    src={language.icon_flag.src!}
                    width='15'
                    height='15'
                    alt='Icon'
                  />
                </span>

                <span className='flex items-center gap-[1px]'>
                  <span>{language?.name}</span>
                  <VscChevronDown className='lang-switcher__chevron text-textDark text-sm' />
                </span>
              </button>
              <div className='lang-switcher__submenu absolute flex flex-col gap-[1px] border border-b-textGray py-2 top-full -left-5 bg-white z-50 invisible opacity-0'>
                {languages.map((lang, i) => (
                  <LangList key={i} {...lang} />
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
  const data = useMut(News)[0];
  const title = data?.translations?.title || '';

  return (
    <>
      {data && (
        <>
          <UnstyledLink
            title={title}
            href={'/news/' + data.id}
            className='animated-underline mx-3 text-xs flex items-center justify-start text-textDark'
          >
            {title.length > 50 ? title.substring(0, 50) + '...' : title}
          </UnstyledLink>
          <VscChevronRight className='text-textDark text-sm' />
        </>
      )}
    </>
  );
}

function TopbarLinks() {
  const { TopbarLinks } = useSharedData();
  const datas = useMut(TopbarLinks);

  return (
    <ul className='no-underline hidden sm:flex gap-5 text-xs text-textDark list-none'>
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
