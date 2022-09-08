import React, { useContext, useEffect } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import { LangList } from '@/components/topBar/components/ListData';
import { ITopBar } from '@/types/topBarTypes';
import { sharedDataContext } from '@/store';
import { mut } from '@/cms/mut';

export const TopBar: React.FC<ITopBar> = ({ message, href }) => {
  const { languages, user_language } = useContext(sharedDataContext);
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
            <span className='uppercase text-[0.6rem] text-primary-400'>
              news
            </span>
          </div>
          <UnstyledLink
            href={href}
            className='animated-underline mx-3 text-xs flex items-center justify-start text-textDark'
          >
            {message}
          </UnstyledLink>
          <VscChevronRight className='text-textDark text-sm' />
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
                    src={language.icon_flag}
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

function TopbarLinks() {
  const { tb_links, user_language: lang } = useContext(sharedDataContext);

  return (
    <ul className='no-underline hidden sm:flex gap-5 text-xs text-textDark list-none'>
      {mut(tb_links, lang).map(({ translations, url, id }) => (
        <li key={id}>
          <UnstyledLink href={url} className='animated-underline border-b-0'>
            {translations?.name}
          </UnstyledLink>
        </li>
      ))}
    </ul>
  );
}
