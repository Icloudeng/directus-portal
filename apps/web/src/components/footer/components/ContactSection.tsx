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

import { SocialMedia } from './SocialMedia';
import { useSharedData } from '@/store';
import { useMut } from '@/cms/mut';

const socialMediaData = [
  { href: '#', icon: <FaFacebookF fontSize={17} /> },
  { href: '#', icon: <FaTwitter fontSize={17} /> },
  { href: '#', icon: <FaInstagram fontSize={17} /> },
  { href: '#', icon: <FaYoutube fontSize={17} /> },
  { href: '#', icon: <FaDiscord fontSize={17} /> },
  { href: '#', icon: <FaLinkedinIn fontSize={17} /> },
];

export const ContactSection = () => {
  const { CompanyDetails } = useSharedData();
  const data = useMut(CompanyDetails);
  const $data = data as typeof data | undefined;

  return (
    <div className='middle-right text-sm flex-1 flex flex-col gap-5'>
      <p className='max-w-[24rem] mb-3'>{$data?.translations?.slogan}</p>
      <p className='font-bold uppercase underline underline-offset-8'>
        Contact Us :
      </p>
      <div className='flex flex-col gap-5'>
        <div className='space-y-4'>
          {$data?.addresses.map(
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
        <span>Local call rate</span>
      </div>

      {$data?.support_email && (
        <div className='flex items-center gap-2 mt-3'>
          <GoMailRead fontSize={20} />
          <span>
            <UnstyledLink
              className='hover:text-primary-400'
              href={'mailto:' + $data?.support_email}
            >
              {$data?.support_email}
            </UnstyledLink>
          </span>
        </div>
      )}

      <div className='flex items-center gap-5 text-primary-400 mt-1'>
        {$data?.socials.length
          ? $data?.socials.map(({ link, icon, id, social_name }) => (
              <SocialMedia
                key={id}
                href={link}
                title={social_name}
                icon={icon.src || ''}
              />
            ))
          : socialMediaData.map(({ href, icon }, i) => (
              <SocialMedia key={i} href={href} icon={icon} />
            ))}
      </div>
    </div>
  );
};
