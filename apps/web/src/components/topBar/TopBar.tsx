import React, { useContext, useEffect } from 'react';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import { LangList } from '@/components/topBar/components/ListData';
import { ITopBar } from '@/types/topBarTypes';
import { sharedDataContext } from '@/store';

const listData = [
  { href: '#', text: 'Cloud comparison' },
  { href: '#', text: 'Pricing' },
  { href: '#', text: 'Changelog' },
];

export const TopBar: React.FC<ITopBar> = ({ message, href }) => {
  const { languages } = useContext(sharedDataContext);
  const langRef = React.useRef<HTMLElement>(null);
  const toggleLang = () => {
    langRef.current?.classList.toggle('active');
  };

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
          <ul className='no-underline hidden sm:flex gap-5 text-xs text-textDark list-none'>
            {listData.map(({ href, text }, i) => (
              <li key={i}>
                <UnstyledLink
                  href={href}
                  className='animated-underline border-b-0'
                >
                  {text}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-xs text-textDark h-full relative flex items-center'>
          <nav ref={langRef} className='lang-switcher block'>
            <button
              type='button'
              onClick={toggleLang}
              className='flex items-center gap-[6px]'
            >
              {languages[0]?.icon_flag && (
                <span>
                  <NextImage
                    useSkeleton
                    src={languages[0].icon_flag}
                    width='15'
                    height='15'
                    alt='Icon'
                  />
                </span>
              )}
              <span className='flex items-center gap-[1px]'>
                <span>{languages[0]?.code}</span>
                <VscChevronDown className='lang-switcher__chevron text-textDark text-sm' />
              </span>
            </button>
            <div className='lang-switcher__submenu absolute flex flex-col gap-[1px] border border-b-textGray py-2 top-full -left-5 bg-white z-50 invisible opacity-0'>
              {languages.map(({ icon_flag, name }, i) => (
                <LangList
                  key={i}
                  link={href}
                  icon_flag={icon_flag}
                  name={name}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
