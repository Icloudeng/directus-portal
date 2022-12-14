import { COMPANY_NAME } from '@/app/constant/env';
import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';
import Button from '@/components/ui/buttons/Button';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { FooterBottom } from '@apps/contracts';
import { useTranslation } from 'next-i18next';
import { socialIcons } from './components/ContactSection';
import { SocialMedia } from './components/SocialMedia';

export const FooterSimple = () => {
  const { FooterLinks, Layout, locale, CompanyDetails } = useSharedData();
  const socials = CompanyDetails?.socials || [];
  const bottom_footer = Layout?.bottom_footer || [];

  const itemValues = [
    'company_name',
    'terms_services',
    'privacy',
    'use_cookies',
    'payment_modes',
  ] as FooterBottom[];

  const newItems = bottom_footer.reduce((acc, v) => {
    if (!itemValues.includes(v)) {
      acc.push(v);
    }
    return acc;
  }, [] as string[]);

  return (
    <footer className='sm:px-10 py-10 text-gray-300 z-0 bg-[#313b4d]'>
      <div className='x-container-fluid flex flex-col gap-5 divide-y-2 divide-gray-800'>
        {Layout?.show_footer_links !== false && (
          <div className='container px-5 py-10 mx-auto'>
            <div className='flex flex-wrap justify-around md:text-left text-center -mb-10 -mx-4'>
              {FooterLinks.map((link) => {
                const { translations } = mut(link, locale);
                return (
                  <div className='lg:w-1/6 md:w-1/2 w-full px-4'>
                    <h2 className='title-font font-medium text-primary-400 trackingWidest text-sm mb-3'>
                      {translations?.name}
                    </h2>
                    <nav className='list-none mb-10'>
                      {link.links.map((item) => {
                        const { translations } = mut(item, locale);
                        return (
                          <li>
                            <UnstyledLink
                              href={item.url}
                              target={item.external ? '_blank' : undefined}
                              className='text-gray-400 hover:text-gray-300'
                            >
                              {translations?.name}
                            </UnstyledLink>
                          </li>
                        );
                      })}
                    </nav>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className='border-t border-gray-200'>
          <div className='container px-5 py-8 flex flex-wrap mx-auto items-center'>
            {Layout?.show_footer_mailing_subscription !== false && (
              <Subscription />
            )}

            {Layout?.show_footer_contacts !== false && (
              <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
                {socials.map(({ link, icon, id, social_name }) => (
                  <SocialMedia
                    key={id}
                    href={link}
                    title={social_name}
                    icon={
                      icon?.src
                        ? icon.src
                        : socialIcons[social_name.toLowerCase()] || ''
                    }
                  />
                ))}
              </span>
            )}
          </div>
        </div>
        <div className='bg-gray-800 bg-opacity-50'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-500 text-sm text-center sm:text-left'>
              <UnstyledLink
                href='#'
                className='text-gray-600 ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                © {new Date().getFullYear()}{' '}
              </UnstyledLink>

              {newItems.map((v) => {
                return (
                  <span className='px-2 text-xs hover:text-primary-400'>
                    {v}
                  </span>
                );
              })}
            </p>

            {bottom_footer.includes('company_name') && (
              <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm'>
                {CompanyDetails?.company_name || COMPANY_NAME}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

function Subscription() {
  const { t } = useTranslation();
  return (
    <div className='flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start'>
      <div className='relative sm:w-64 w-40 sm:mr-4 mr-2'>
        <input
          type='email'
          placeholder={t('Enter your email')}
          id='footer-field'
          name='footer-field'
          className='w-full bg-transparent bg-opacity-50 rounded-sm border border-primary-400 focus:ring-1 focus:bg-transparent focus:ring-primary-400 focus:border-primary-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        />
      </div>
      <Button className='inline-flex text-white bg-primary-400 border-0 py-2 px-6 focus:outline-none hover:bg-primary-500 rounded-sm'>
        {t('Subscribe')}
      </Button>
    </div>
  );
}
