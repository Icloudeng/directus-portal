import ButtonLink from '@/components/ui/links/ButtonLink';

import { useSharedData } from '@/app/store';
import { useMut } from '@/cms/mut';

import { ContactSection } from './components/ContactSection';
import { FooterItemLinks } from './components/FooterItemLinks';
import { Subscribe } from './components/Subscribe';
import { TermsConditions } from './components/TermsConditions';
import React from 'react';

export const Footer = () => {
  const { FooterLinks, Layout } = useSharedData();
  const footer_links = useMut(FooterLinks);

  const showSection =
    Layout?.show_footer_contacts !== false ||
    Layout.show_footer_links !== false;

  const hasFooterLinks =
    Layout?.show_footer_contacts === false &&
    Layout.show_footer_links !== false;

  const bottom_footer = Layout?.bottom_footer || [];

  return (
    <footer
      className='sm:px-10 py-10 text-gray-300 z-0'
      style={{ backgroundColor: Layout?.site_background_color || '#313B4D' }}
    >
      <div className='x-container-fluid flex flex-col gap-5 divide-y-2 divide-gray-800'>
        {Layout?.show_top_footer !== false && <FooterTopSection />}

        {showSection && (
          <div className='middle-footer flex items-start py-10 divide-x-[1px] divide-gray-300 text-xs xs:text-sm'>
            {Layout?.show_footer_contacts !== false && <ContactSection />}

            {Layout?.show_footer_links !== false && (
              <div
                className={`middle-left grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-start ${
                  hasFooterLinks ? 'justify-around' : 'justify-start'
                } gap-20 sm:flex-[2.7] flex-[3.6] ml-1 xs:ml-3 px-4 `}
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
        {Layout?.show_footer_mailing_subscription !== false && <Subscribe />}
        {bottom_footer.length > 0 && <TermsConditions />}
      </div>
    </footer>
  );
};

function FooterTopSection() {
  const { Layout } = useSharedData();
  const layout = useMut(Layout);
  const translations = layout?.translations;

  const texts = translations?.titles || [];
  const buttons = translations?.buttons || [];

  return (
    <div className='top-footer flex flex-col items-center gap-12 py-10'>
      <h1 className='text-center'>
        {texts.map(({ title, color }, i) => {
          return (
            <span style={{ color: color || undefined }} key={i}>
              {title + ' '}
            </span>
          );
        })}
      </h1>
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
