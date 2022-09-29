import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { GoMailRead } from 'react-icons/go';

import UnstyledLink from '@/components/links/UnstyledLink';

import { useSharedData } from '@/store';

import { useMut } from '@/cms/mut';

import { SocialMedia } from './SocialMedia';
import { useTranslation } from 'next-i18next';

const socialIcons: { [x: string]: JSX.Element } = {
  facebook: <FaFacebookF fontSize={17} />,
  twitter: <FaTwitter fontSize={17} />,
  instagram: <FaInstagram fontSize={17} />,
  youtube: <FaYoutube fontSize={17} />,
  discord: <FaDiscord fontSize={17} />,
  linkedin: <FaLinkedinIn fontSize={17} />,
};

export const ContactSection = () => {
  const { CompanyDetails } = useSharedData();
  const data = useMut(CompanyDetails);
  const { t } = useTranslation();

  return (
    <div className='middle-right text-sm flex-1 flex flex-col gap-5'>
      {data?.translations?.slogan && (
        <p className='max-w-[24rem] mb-3'>{data?.translations?.slogan}</p>
      )}
      <p className='font-bold uppercase underline underline-offset-8'>
        {t('Contact Us')} :
      </p>
      <div className='flex flex-col gap-5'>
        <div className='space-y-4'>
          {data?.addresses?.map(
            ({ id, address_name, working_days, working_time, phone }) => {
              return (
                <div className='space-y-1 mb-4' key={id}>
                  <p>{address_name}</p>
                  <p className=' font-light text-gray-400 mb-10'>
                    {working_days}, {working_time}
                  </p>
                  <p className=' font-light text-gray-400'>Support: {phone}</p>
                </div>
              );
            }
          )}
        </div>
        <span>{t('Local call rate')}</span>
      </div>

      {data?.support_email && (
        <div className='flex items-center gap-2 mt-3'>
          <GoMailRead fontSize={20} />
          <span>
            <UnstyledLink
              className='hover:text-primary-400'
              href={'mailto:' + data?.support_email}
            >
              {data?.support_email}
            </UnstyledLink>
          </span>
        </div>
      )}

      <div className='flex items-center gap-5 text-primary-400 mt-1'>
        {data?.socials?.map(({ link, icon, id, social_name }) => (
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
      </div>
    </div>
  );
};
