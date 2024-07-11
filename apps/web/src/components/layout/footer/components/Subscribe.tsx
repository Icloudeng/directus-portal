import { useTranslation } from 'next-i18next';

import clsxm from '@/lib/clsxm';

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
        <p className='text-xs max-w-md text-center uppercase font-normal'>
          {t('JOIN_MAIL_TEXT')}
        </p>
      </div>

      <div className='flex flex-col'>
        <form
          onSubmit={onSubmit}
          className='flex flex-col ss:flex-row items-stretch gap-5'
        >
          <input
            type='email'
            placeholder={t('Enter your email')}
            required
            name='email'
            onKeyUp={onKeyUp}
            className={clsxm(
              'border-none placeholder-gray-300 bg-transparent ring-1 ring-primary-300',
              'rounded-sm h-12 max-w-[20rem] w-full px-2 font-base outline-none focus:ring-2 focus:ring-primary-400'
            )}
          />
          <Button
            type='submit'
            disabled={loading}
            className={clsxm(
              'w-full ss:w-min py-[.7rem] px-8 font-light bg-primary-400 rounded-sm hover:bg-primary-500',
              'inline-flex justify-center items-center space-x-2 min-w-36'
            )}
          >
            {!loading && <span>{t('Subscribe')}</span>}
            {loading && (
              <span className='w-4 h-4 flex items-center justify-center'>
                <Spinner className='mr-0' />
              </span>
            )}
          </Button>
        </form>

        <div
          className={clsxm(
            'w-full text-sm mt-2 text-red-400 lg:max-w-[400px]',
            !error && 'opacity-0'
          )}
        >
          {t(error || '---')}
        </div>

        {success && (
          <div className='w-full text-sm mt-2 text-green-400 lg:max-w-[400px]'>
            {t('SUBSCRIPTION_SUCCESS')}(s).
          </div>
        )}
      </div>
    </div>
  );
};
