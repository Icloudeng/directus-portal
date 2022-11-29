import { useTranslation } from 'next-i18next';

import Button from '@/components/ui/buttons/Button';
import { Spinner } from '@/components/ui/Spinner';

import { useErrorInput } from '@/app/hooks/useErrorInput';
import { useFormSubmit } from '@/app/hooks/useFormSubmit';

export const Subscribe = () => {
  const { t } = useTranslation();
  const { onSubmit, loading, success, errors } = useFormSubmit(
    '/api/newsletters/subscriptions',
    1000 * 15
  );
  const { error, onKeyUp } = useErrorInput('email', errors);

  return (
    <div className='flex flex-col gap-7 lg:flex-row items-center justify-center lg:gap-44 px-10 py-10'>
      <div className='flex flex-col items-center gap-4'>
        <p className='text-2xl font-bold text-center'>
          {t('Join our mailing list')}
        </p>
        <p className='text-xs max-w-md text-center uppercase font-extralight'>
          {t('JOIN_MAIL_TEXT')}
        </p>
      </div>

      <div className='flex flex-col'>
        <form
          onSubmit={onSubmit}
          className='flex flex-col ss:flex-row items-center gap-5'
        >
          <input
            type='email'
            placeholder={t('Enter your email')}
            required
            name='email'
            onKeyUp={onKeyUp}
            className='border-none font-extralight bg-transparent ring-1 ring-primary-400 rounded-sm h-12 max-w-[20rem] w-full px-2 font-base outline-none focus:ring-2'
          />
          <div>
            <Button
              type='submit'
              disabled={loading}
              className='w-full ss:w-min flex items-center justify-center py-[.7rem] px-8 font-light bg-primary-400 rounded-sm hover:bg-primary-500'
            >
              {t('Subscribe')}
              {loading && (
                <span className='ml-1'>
                  <Spinner />
                </span>
              )}
            </Button>
          </div>
        </form>

        {error && (
          <div className='w-full text-center mt-2 text-red-500 lg:max-w-[400px]'>
            {t(error)}
          </div>
        )}

        {success && (
          <div className='w-full text-center mt-2 text-green-500 lg:max-w-[400px]'>
            {t('SUBSCRIPTION_SUCCESS')}(s).
          </div>
        )}
      </div>
    </div>
  );
};
