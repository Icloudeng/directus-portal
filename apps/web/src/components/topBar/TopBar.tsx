import React, { useEffect } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import { LangList } from '@/components/topBar/components/ListData';

import { useSharedData } from '@/store';

import { useMut } from '@/cms/mut';

import { ITopBar } from '@/types/topBarTypes';

export const TopBar: React.FC<ITopBar> = ({ message, href }) => {
  const { languages, user_language } = useSharedData();
  const langRef = React.useRef<HTMLElement>(null);

  const toggleLang = () => {
    langRef.current?.classList.toggle('active');
  };

  useEffect(() => {
    if (!langRef.current) return;
    const onBodyClick = (ev: MouseEvent) => {
      if (!langRef.current?.contains(ev.target! as Node)) {
        langRef.current?.classList.remove('active');
      }
    };

    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const language = languages.find((lg) => lg.code === user_language);

  return (
    <div className='hidden sd:block border-b border-b-textGray bg-white px-10'>
      <div className='h-10 flex items-center justify-start'>
        <div className='flex flex-1 items-center mr-auto overflow-hidden flex-nowrap'>
          <div className=' h-5 px-2 border border-primary-400 flex items-center justify-center rounded-sm'>
            <a href='/news/'>
              <span className='uppercase text-[0.6rem] text-primary-400'>
                news
              </span>
            </a>
          </div>
          <TopbarNews />
        </div>
        <div className=' mr-5'>
          <TopbarLinks />
        </div>
        <div className='text-xs text-textDark h-full relative flex items-center'>
          <nav ref={langRef} className='lang-switcher block'>
            <button
              type='button'
              onClick={toggleLang}
              className='flex items-center gap-[6px]'
            >
              {language && (
                <span>
                  <NextImage
                    useSkeleton
                    src={language.icon_flag.src!}
                    width='15'
                    height='15'
                    alt='Icon'
                  />
                </span>
              )}
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
