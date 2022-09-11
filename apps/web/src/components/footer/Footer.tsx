import ButtonLink from '@/components/links/ButtonLink';

import { useSharedData } from '@/store';

import { useMut } from '@/cms/mut';

import { ContactSection } from './components/ContactSection';
import { FooterItemLinks } from './components/FooterItemLinks';
import { Subscribe } from './components/Subscribe';
import { TermsConditions } from './components/TermsConditions';

export const Footer = () => {
  const { FooterLinks } = useSharedData();
  const footer_links = useMut(FooterLinks);

  return (
    <div className='sm:px-10 py-10 text-gray-300 z-0 bg-[#313b4d]'>
      <div className='x-container-fluid flex flex-col gap-5 divide-y-2 divide-gray-800'>
        <div className='top-footer flex flex-col items-center gap-12 py-10'>
          <h1 className='text-center'>
            <span className='text-primary-400'>Start your innovation</span>{' '}
            today with cloud
          </h1>
          <div className='flex items-center gap-7'>
            <span>Take first step right now</span>
            <ButtonLink
              href='#'
              className='py-[.7rem] px-10 font-normal rounded-none'
              variant='primary'
            >
              Get started
            </ButtonLink>
          </div>
        </div>

        <div className='middle-footer flex items-start justify-center py-10'>
          <ContactSection />
          <div className='middle-left grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex items-start justify-center gap-20 sm:flex-[2.7] flex-[3.6] ml-3 border-l-[1px] border-gray-300 px-4'>
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
