import { FooterBottom } from '@apps/contracts';
import { useTranslation } from 'next-i18next';
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { COMPANY_NAME } from '@/app/constant/env';
import { useSharedData } from '@/app/store';

export const TermsConditions = () => {
  const { t } = useTranslation();
  const { CompanyDetails, Layout } = useSharedData();
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
    <div className='flex items-end sm:items-center space-x-32 pt-10'>
      <div className='bottom-footer flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0 md:divide-x-2'>
        {bottom_footer.includes('company_name') && (
          <span className='px-2 text-xs hover:text-primary-400'>
            &#169; {new Date().getFullYear()}{' '}
            <UnstyledLink href='#'>
              {CompanyDetails?.company_name || COMPANY_NAME}
            </UnstyledLink>
          </span>
        )}

        {bottom_footer.includes('terms_services') && (
          <UnstyledLink
            href='#'
            className='px-2 text-xs hover:text-primary-400'
          >
            {t('Terms of services')}
          </UnstyledLink>
        )}

        {bottom_footer.includes('privacy') && (
          <UnstyledLink
            href='#'
            className='px-2 text-xs hover:text-primary-400'
          >
            {t('TERM_PRIVACY')}
          </UnstyledLink>
        )}

        {bottom_footer.includes('use_cookies') && (
          <UnstyledLink
            href='#'
            className='px-2 text-xs hover:text-primary-400'
          >
            {t('Use of Cookies')}
          </UnstyledLink>
        )}
      </div>

      {bottom_footer.includes('payment_modes') && (
        <span className='flex flex-col xs:flex-row items-center gap-7 '>
          <FaCcMastercard fontSize={22} />
          <FaCcVisa fontSize={22} />
          <FaCcPaypal fontSize={22} />
        </span>
      )}

      {newItems.map((v, i) => {
        return (
          <span key={i} className='px-2 text-xs hover:text-primary-400'>
            {v}
          </span>
        );
      })}
    </div>
  );
};
