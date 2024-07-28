import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';

import UnstyledLink from '@/components/ui/links/UnstyledLink';

import { COMPANY_NAME } from '@/app/constant/env';
import { useSharedData } from '@/app/store';
import { useMut } from '@/cms/mut';

export const TermsConditions = () => {
  const { CompanyDetails, FooterLayout } = useSharedData();

  const footer_layout = useMut(
    FooterLayout,
    undefined,
    'bottom_footer_translations'
  );

  const links = footer_layout?.bottom_footer_translations?.links || [];

  const has_company_name =
    footer_layout?.show_bottom_footer_company_name === true;

  const has_payment_modes =
    footer_layout?.show_bottom_footer_payment_modes === true;

  if (!links.length && !has_company_name && !has_payment_modes) {
    return <></>;
  }

  return (
    <div className='flex items-end sm:items-center space-x-32 pt-10'>
      <div className='bottom-footer flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-0 md:divide-x-2'>
        {has_company_name && (
          <UnstyledLink
            href='/'
            className='px-2 text-xs hover:text-primary-400'
          >
            &#169; {new Date().getFullYear()}{' '}
            {CompanyDetails?.company_name || COMPANY_NAME}
          </UnstyledLink>
        )}

        {links?.map((link, i) => (
          <UnstyledLink
            key={i}
            href={link.url}
            target={link.external ? '_blank' : ''}
            className='px-2 text-xs hover:text-primary-400'
          >
            {link.name}
          </UnstyledLink>
        ))}
      </div>

      {has_payment_modes && (
        <span className='flex flex-col xs:flex-row items-center gap-7 '>
          <FaCcMastercard fontSize={22} />
          <FaCcVisa fontSize={22} />
          <FaCcPaypal fontSize={22} />
        </span>
      )}
    </div>
  );
};
