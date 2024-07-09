import { ST_CompanyDetail, STemplates_Props } from '@apps/contracts';
import dynamic from 'next/dynamic';
import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';

import UnderlineLink from '@/components/ui/links/UnderlineLink';

import { useSharedData } from '@/app/store';

const ReactLeaflet = dynamic(() => import('@/components/ui/react-leaflet'), {
  ssr: false,
});

export function ST_CompanyDetailsFC(_: STemplates_Props<ST_CompanyDetail>) {
  const { CompanyDetails: cmp } = useSharedData();
  const { t } = useTranslation();

  return (
    <>
      <div className='flex md:flex-row flex-col-reverse justify-between'>
        <div className='company--details md:w-1/2'>
          <h3 className='md:text-4xl text-2xl mb-8'>{t('Company details')}</h3>
          <ul className='list-disc ml-8'>
            {cmp?.company_name && (
              <li className='mb-3'>
                {t('Company name')}: {cmp?.company_name}
              </li>
            )}

            {cmp?.email && (
              <li className='mb-3'>
                {t('Email')}:{' '}
                <a href={`mailto:${cmp?.email}`} className='text-primary-400'>
                  {cmp?.email}
                </a>
              </li>
            )}

            {cmp?.support_email && (
              <li className='mb-3'>
                {t('Support email')}:{' '}
                <a
                  href={`mailto:${cmp?.support_email}`}
                  className='text-primary-400'
                >
                  {cmp?.support_email}
                </a>
              </li>
            )}

            {cmp?.website && (
              <li className='mb-3'>
                {t('Website')}:{' '}
                <UnderlineLink
                  href={cmp?.website}
                  target='_blank'
                  className='text-primary-400'
                >
                  {cmp?.website}
                </UnderlineLink>
              </li>
            )}
          </ul>
        </div>
        <div className='relative w-full md:w-1/2 md:px-9 mb-7 md:mb-0'>
          {cmp?.image?.src && (
            <Image
              layout='responsive'
              width={728}
              height={514}
              objectFit='cover'
              src={cmp.image.src as string}
              alt={cmp.company_name}
            />
          )}
        </div>
      </div>

      {cmp?.addresses && (
        <div className='mt-10'>
          <h3 className='md:text-2xl text-xl mb-5'>
            {cmp.addresses.length > 1 ? t('Addresses') : t('Address')}
          </h3>

          {cmp.addresses.map(
            ({
              id,
              address_name,
              working_days,
              working_time,
              phone,
              localization,
            }) => {
              return (
                <div
                  key={id}
                  className='flex md:flex-row flex-col md:space-x-6 space-y-7 md:space-y-0 border-b py-4'
                >
                  <div className='address-text'>
                    <span>{address_name}</span>
                    <div className='space-y-1 mb-4' key={id}>
                      <ul>
                        <li>
                          <p className='font-light text-gray-400'>
                            {working_days}, {working_time}
                          </p>
                        </li>
                        <li>
                          <p className='font-light text-gray-400'>
                            {t('Phone')}:{' '}
                            <a href={`tel:${phone}`} className='underline'>
                              {phone}
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {localization && (
                    <div className='w-full h-96'>
                      <ReactLeaflet
                        position={localization}
                        name={address_name}
                      />
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
}
