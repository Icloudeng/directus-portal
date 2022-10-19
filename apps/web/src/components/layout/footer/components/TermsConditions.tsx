import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';

import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { useTranslation } from 'next-i18next';

export const TermsConditions = () => {
  const { t } = useTranslation();
  return (
    <div className='flex items-end sm:items-center space-x-32 pt-10'>
      <div className='bottom-footer flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0 md:divide-x-2'>
        <span className='px-2 text-xs hover:text-primary-400'>
          &#169; 2021-2022{' '}
          <UnstyledLink href='#'>Cloud IT Engineering LTD.</UnstyledLink>
        </span>
        <UnstyledLink href='#' className='px-2 text-xs hover:text-primary-400'>
          {t('Terms of services')}
        </UnstyledLink>
        <UnstyledLink href='#' className='px-2 text-xs hover:text-primary-400'>
          {t('TERM_PRIVACY')}
        </UnstyledLink>
        <UnstyledLink href='#' className='px-2 text-xs hover:text-primary-400'>
          {t('Use of Cookies')}
        </UnstyledLink>
      </div>
      <span className='flex flex-col xs:flex-row items-center gap-7 '>
        <FaCcMastercard fontSize={22} />
        <FaCcVisa fontSize={22} />
        <FaCcPaypal fontSize={22} />
      </span>
    </div>
  );
};
