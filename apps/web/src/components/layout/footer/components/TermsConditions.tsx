import { useTranslation } from 'next-i18next';
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { COMPANY_NAME } from '@/app/constant/env';
import { useSharedData } from '@/app/store';

export const TermsConditions = () => {
  const { t } = useTranslation();
  const { CompanyDetails, Layout } = useSharedData();

  const items = Layout?.bottom_footer || [];

  return (
    <div className='flex items-end sm:items-center space-x-32 pt-10'>
      <div className='bottom-footer flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0 md:divide-x-2'>
        {items.includes('company_name') && (
          <span className='px-2 text-xs hover:text-primary-400'>
            &#169; {new Date().getFullYear()}{' '}
            <UnstyledLink href='#'>
              {CompanyDetails?.company_name || COMPANY_NAME}.
            </UnstyledLink>
          </span>
        )}

        {items.includes('terms_services') && (
          <UnstyledLink
            href='#'
            className='px-2 text-xs hover:text-primary-400'
          >
            {t('Terms of services')}
          </UnstyledLink>
        )}

        {items.includes('privacy') && (
          <UnstyledLink
            href='#'
            className='px-2 text-xs hover:text-primary-400'
          >
            {t('TERM_PRIVACY')}
          </UnstyledLink>
        )}

        {items.includes('use_cookies') && (
          <UnstyledLink
            href='#'
            className='px-2 text-xs hover:text-primary-400'
          >
            {t('Use of Cookies')}
          </UnstyledLink>
        )}
      </div>

      {items.includes('payment_modes') && (
        <span className='flex flex-col xs:flex-row items-center gap-7 '>
          <FaCcMastercard fontSize={22} />
          <FaCcVisa fontSize={22} />
          <FaCcPaypal fontSize={22} />
        </span>
      )}
    </div>
  );
};
