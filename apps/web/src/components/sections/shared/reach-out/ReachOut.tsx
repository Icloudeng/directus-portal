import { GiMoebiusStar } from 'react-icons/gi';

import Button from '@/components/ui/buttons/Button';
import UnstyledLink from '@/components/ui/links/UnstyledLink';
import { useTranslation } from 'next-i18next';
import { useFormSubmit } from '@/app/hooks/useFormSubmit';
import { Spinner } from '@/components/ui/Spinner';
import InputField from '@/components/ui/form-control/InputField';
import { TextArea } from '@/components/ui/form-control/TextArea';

export const ReachOut = () => {
  const { t } = useTranslation();

  const { onSubmit, success, loading, errors } = useFormSubmit(
    '/api/guest/questions'
  );

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
      <div className='right-side flex-[2.5] sm:flex-[2] md:flex-[1.7] bg-[#f3f3f5] p-7 border'>
        <h4>{t('Ask a question')}</h4>
        <form onSubmit={onSubmit} method='POST'>
          <div className='formInputs flex flex-col gap-1 mt-7'>
            <InputField
              inputType='text'
              errors={errors}
              inputLabel={t('Name')}
              inputPlaceholder={t('Name')}
              inputID='name'
              border={false}
            />

            <InputField
              inputType='email'
              errors={errors}
              inputLabel={t('Email')}
              inputPlaceholder={t('Email')}
              inputID='email'
              border={false}
            />

            <TextArea
              errors={errors}
              inputLabel={t('Your message')}
              inputPlaceholder={t('Your message')}
              inputID='message'
            />
            {success && (
              <div className='text-green-400 rounded-md mb-3 text-sm'>
                {t('GUEST_QUESTION_SENT')}
              </div>
            )}
            <Button
              type='submit'
              disabled={loading}
              className='flex items-center justify-center font-normal bg-primary-400 border-none rounded-none'
            >
              {loading && <Spinner />}
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
