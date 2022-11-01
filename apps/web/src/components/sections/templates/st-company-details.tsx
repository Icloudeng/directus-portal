import { useSharedData } from '@/app/store';
import { STemplates_Props, ST_CompanyDetail } from '@/cms/page-sections';
import UnderlineLink from '@/components/ui/links/UnderlineLink';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export function ST_CompanyDetailsFC(_: STemplates_Props<ST_CompanyDetail>) {
  const { CompanyDetails } = useSharedData();
  const { t } = useTranslation();

  return (
    <div className='flex md:flex-row flex-col-reverse justify-between'>
      <div className='company--details md:w-1/2'>
        <h2 className='md:text-4xl text-2xl mb-8'>{t('Company details')}</h2>
        <ul className='list-disc ml-8'>
          <li className='mb-3'>
            {t('Company name')}: {CompanyDetails?.company_name}
          </li>
          <li className='mb-3'>
            {t('Address')}:{' '}
            {CompanyDetails?.addresses?.map(
              ({ id, address_name, working_days, working_time, phone }) => {
                return (
                  <div className='space-y-1 mb-4' key={id}>
                    <p>{address_name}</p>
                    <p className=' font-light text-gray-400 mb-10'>
                      {working_days}, {working_time}
                    </p>
                    <p className=' font-light text-gray-400'>
                      Support: {phone}
                    </p>
                  </div>
                );
              }
            )}
          </li>
          <li className='mb-3'>
            {t('Email')}:{' '}
            {CompanyDetails?.email && (
              <a
                href={`mailto:${CompanyDetails?.email}`}
                className='text-primary-400'
              >
                {CompanyDetails?.email}
              </a>
            )}
          </li>
          <li className='mb-3'>
            {t('Website')}:{' '}
            {CompanyDetails?.website && (
              <UnderlineLink
                href={CompanyDetails?.website}
                target='_blank'
                className='text-primary-400'
              >
                {CompanyDetails?.website}
              </UnderlineLink>
            )}
          </li>
        </ul>
      </div>
      <div className='relative w-full md:w-1/2 md:px-9 mb-7 md:mb-0'>
        {CompanyDetails?.image && (
          <Image
            layout='responsive'
            width={728}
            height={514}
            objectFit='cover'
            src={CompanyDetails.image.src!}
          />
        )}
      </div>
    </div>
  );
}
