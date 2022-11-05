import { GiMoebiusStar } from 'react-icons/gi';

import Button from '@/components/ui/buttons/Button';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { useTranslation } from 'next-i18next';

export const ReachOut = () => {
  const { t } = useTranslation();

  return (
    <div className='max-w-4xl w-full flex flex-col sd:flex-row items-center gap-12'>
      <div className='left-side flex-[3]'>
        <ul className='flex flex-col gap-20 max-w-xs'>
          <li className='relative flex items-center'>
            <GiMoebiusStar className='absolute text-xl text-primary-400' />
            <h4 className='ml-12'>
              {t('Get a technical expert consultation')}
            </h4>
          </li>
          <li className='relative flex items-center'>
            <GiMoebiusStar className='absolute text-xl text-primary-400' />
            <h4 className='ml-12'>{t('Get a customized solution')}</h4>
          </li>
          <li className='relative flex items-center'>
            <GiMoebiusStar className='absolute text-xl text-primary-400' />
            <h4 className='ml-12'>{t('Get a commercial offer')}</h4>
          </li>
        </ul>
      </div>
      <div className='right-side flex-[2.5] sm:flex-[2] md:flex-[1.7] bg-[#f5f7fa] p-7 border'>
        <h4>{t('Ask a question')}</h4>
        <form action=''>
          <div className='formInputs flex flex-col gap-5 mt-7'>
            <input
              type='text'
              name='first_name'
              id='first_name-id'
              className='block w-full rounded-sm bg-gray-50 py-3 border-gray-300  px-4 focus:border-primary-400 focus:ring-primary-400 sm:text-sm'
              placeholder={t('Name')}
            />
            <input
              type='text'
              name='first_name'
              id='first_name-id'
              className='block w-full rounded-sm bg-gray-50 py-3 border-gray-300  px-4 focus:border-primary-400 focus:ring-primary-400 sm:text-sm'
              placeholder={t('Email')}
            />
            <textarea
              id='description-id'
              rows={4}
              name='description'
              className='block p-2.5 px-4 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-primary-400 focus:border-primary-400'
              placeholder={t('Your message')}
            ></textarea>
            <Button className='flex items-center justify-center font-normal bg-primary-400 border-none rounded-none'>
              {t('Send')}
            </Button>
            <span className='text-xs text-center'>
              {t('By clicking on the button, you agree to the')}{' '}
              <UnstyledLink className='text-primary-500' href='#'>
                {t('terms of service')}
              </UnstyledLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
