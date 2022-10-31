import ButtonLink from '@/components/ui/links/ButtonLink';

import { useSharedData } from '@/app/store';

import { useMut } from '@/cms/mut';

import { ContactSection } from './components/ContactSection';
import { FooterItemLinks } from './components/FooterItemLinks';
import { Subscribe } from './components/Subscribe';
import { TermsConditions } from './components/TermsConditions';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { FooterLinks } = useSharedData();
  const footer_links = useMut(FooterLinks);
  const { t } = useTranslation();

  return (
    <div className='sm:px-10 py-10 text-gray-300 z-0 bg-[#313b4d]'>
      <div className='x-container-fluid flex flex-col gap-5 divide-y-2 divide-gray-800'>
        <div className='top-footer flex flex-col items-center gap-12 py-10'>
          <h1 className='text-center'>
            <span className='text-primary-400'>
              {t('Start your innovation')}
            </span>{' '}
            {t('today with cloud')}
          </h1>
          <div className='flex flex-col ss:flex-row items-center gap-7'>
            <span>{t('Take first step right now')}</span>
            <ButtonLink
              href='#'
              className='py-[.7rem] px-10 font-normal rounded-none text-center'
              variant='primary'
            >
              {t('Get started')}
            </ButtonLink>
          </div>
        </div>

        <div className='middle-footer flex items-start justify-center py-10 divide-x-[1px] divide-gray-300 text-xs xs:text-sm'>
          <ContactSection />
          <div className='middle-left grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-start justify-start gap-20 sm:flex-[2.7] flex-[3.6] ml-1 xs:ml-3 px-4'>
            {footer_links.map(({ id, links, translations }) => (
              <FooterItemLinks
                key={id}
                title={translations?.name || ''}
                links={links}
              />
            ))}
          </div>
        </div>
        <Subscribe />
        <TermsConditions />
      </div>
    </div>
  );
};
