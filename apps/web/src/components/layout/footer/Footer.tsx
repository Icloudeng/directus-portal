import React from 'react';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/ui/links/ButtonLink';

import { useSharedData } from '@/app/store';
import { useMut } from '@/cms/mut';

import { ContactSection } from './components/ContactSection';
import { FooterItemLinks } from './components/FooterItemLinks';
import { Subscribe } from './components/Subscribe';
import { TermsConditions } from './components/TermsConditions';

export const Footer = () => {
  const { FooterLinks, FooterLayout } = useSharedData();
  const footer_links = useMut(FooterLinks);

  const showSection =
    FooterLayout?.show_footer_contacts !== false ||
    FooterLayout.show_footer_links !== false;

  const hasFooterLinks =
    FooterLayout?.show_footer_contacts === false &&
    FooterLayout.show_footer_links !== false;

  const bottom_footer = FooterLayout?.bottom_footer || [];

  return (
    <footer className='sm:px-10 py-10 text-gray-300 z-0'>
      <div className='x-container-fluid flex flex-col gap-5 divide-y-2 divide-primary-900'>
        {FooterLayout?.show_top_footer === true && <FooterTopSection />}

        {showSection && (
          <div
            className={clsxm(
              'flex items-start py-10 sm:divide-x-[1px] sm:divide-primary-300 text-sm w-full',
              'flex-col-reverse sm:flex-row sm:justify-between pb-3 sm:pb-0 gap-5'
            )}
          >
            {FooterLayout?.show_footer_contacts === true && (
              <ContactSection
                className={clsxm(
                  'min-w-40 w-full sm:w-auto',
                  'border-t-2 border-t-primary-900 sm:border-0 sm:border-t-none pt-5 sm:pt-0'
                )}
              />
            )}

            {FooterLayout?.show_footer_links !== false && (
              <div
                className={clsxm(
                  'middle-left grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-start',
                  'gap-20 sm:flex-[2.7] flex-[3.6]',
                  'sm:ml-3 sm:px-4',
                  hasFooterLinks ? ['justify-around'] : ['justify-start']
                )}
              >
                {footer_links?.map(({ id, links, translations }) => (
                  <FooterItemLinks
                    key={id}
                    title={translations?.name || ''}
                    links={links}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        {FooterLayout?.show_footer_mailing_subscription === true && (
          <Subscribe />
        )}
        {bottom_footer.length > 0 && <TermsConditions />}
      </div>
    </footer>
  );
};

function FooterTopSection() {
  const { FooterLayout } = useSharedData();
  const layout = useMut(FooterLayout);
  const translations = layout?.translations;

  const texts = translations?.titles || [];
  const buttons = translations?.buttons || [];

  return (
    <div className='top-footer flex flex-col items-center gap-12 py-10'>
      <h3 className='text-center h1'>
        {texts.map(({ title, color }, i) => {
          return (
            <span style={{ color: color || undefined }} key={i}>
              {title + ' '}
            </span>
          );
        })}
      </h3>
      <div className='flex flex-col ss:flex-row items-center gap-7'>
        {buttons.map((btn, i) => {
          return (
            <React.Fragment key={i}>
              {btn.variant === 'text' && <span>{btn.name + ' '}</span>}
              {btn.variant !== 'text' && (
                <ButtonLink
                  href={btn.url}
                  className='py-[.7rem] px-10 font-normal rounded-none text-center'
                  variant={btn.variant}
                  target={btn.external ? '_blank' : undefined}
                >
                  {btn.name + ' '}
                </ButtonLink>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
